import { createContext, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import type { ReactNode } from 'react'
import { useTheme } from './theme'
import AecodeLogo from './AecodeLogo'

export interface SlideDef { id: string; num: string; title: string; node: ReactNode; tone?: 'dark' | 'light'; section?: string }
export interface DeckDef {
  slug: string
  title: string
  subtitle?: string
  date?: string
  tag?: string
  slides: SlideDef[]
  /** Guion del presentador, alineado por índice con `slides`. Si existe, activa
   *  el modo presentador (teleprompter + cronómetro). Opcional por deck. */
  notes?: string[]
  /** Marcas de tiempo por slide (alineadas por índice), p. ej. "0:53–1:18". */
  times?: string[]
  /** Duración objetivo de la clase en segundos (default 10800 = 3 h). */
  targetSeconds?: number
}

const fmt = (s: number) => {
  const h = Math.floor(s / 3600)
  const m = Math.floor((s % 3600) / 60)
  const ss = String(Math.abs(s) % 60).padStart(2, '0')
  return h > 0 ? `${h}:${String(m).padStart(2, '0')}:${ss}` : `${m}:${ss}`
}

/** True sólo cuando la diapositiva es la actual: dispara count-up y re-anima visuales. */
export const SlideActiveContext = createContext(false)
/** Número de sección calculado automáticamente (secuencial), provisto a cada slide. */
export const SlideNumContext = createContext('')

/** Numeración automática: las slides cuyo `num` empieza por dígito se cuentan
 *  01,02,03…; las demás (portada '', divisor '', flash '⚡'…) se conservan. */
function computeNums(slides: SlideDef[]): string[] {
  let c = 0
  return slides.map((s) => {
    if (/^[0-9]/.test(s.num)) { c++; return String(c).padStart(2, '0') }
    return s.num
  })
}

function SlideFrame({ state, mounted, id, index, total, label, displayNum, children }: {
  state: 'prev' | 'current' | 'next'; mounted: boolean; id: string; index: number; total: number; label: string; displayNum: string; children: ReactNode
}) {
  const ref = useRef<HTMLElement>(null)
  useEffect(() => { const el = ref.current as any; if (el) el.inert = state !== 'current' }, [state])
  return (
    <section
      ref={ref}
      id={`slide-${id}`}
      className="slide"
      data-state={state}
      role="group"
      aria-roledescription="diapositiva"
      aria-label={`${index + 1} de ${total}: ${label}`}
      aria-hidden={state !== 'current'}
    >
      <div className="slide-inner"><div className="slide-content">
        {mounted ? (
          <SlideActiveContext.Provider value={state === 'current'}>
            <SlideNumContext.Provider value={displayNum}>{children}</SlideNumContext.Provider>
          </SlideActiveContext.Provider>
        ) : null}
      </div></div>
    </section>
  )
}

export default function Deck({ deck, initialSlide = 1 }: { deck: DeckDef; initialSlide?: number }) {
  const slides = deck.slides
  const total = slides.length
  const nums = computeNums(slides)
  const [cur, setCur] = useState(() => Math.max(0, Math.min(total - 1, initialSlide - 1)))
  const [overview, setOverview] = useState(false)
  const [query, setQuery] = useState('')
  const [theme, toggleTheme] = useTheme()
  const curRef = useRef(cur); curRef.current = cur
  const touch = useRef<{ x: number; y: number } | null>(null)

  // Módulos: primera aparición de cada `section` → [{name, index}] para el salto rápido.
  const sections = useMemo(() => {
    const out: Array<{ name: string; index: number }> = []
    slides.forEach((s, i) => {
      if (s.section && !out.some((x) => x.name === s.section)) out.push({ name: s.section, index: i })
    })
    return out
  }, [slides])
  const curSection = useMemo(() => {
    let name = sections[0]?.name ?? ''
    for (const s of sections) if (s.index <= cur) name = s.name
    return name
  }, [sections, cur])

  // Modo presentador (sólo si el deck trae guion): teleprompter + cronómetro.
  const hasNotes = !!deck.notes?.length
  const target = deck.targetSeconds ?? 10800
  const [speaker, setSpeaker] = useState(false)
  const [secs, setSecs] = useState(0)
  const [running, setRunning] = useState(false)
  useEffect(() => { setRunning(speaker) }, [speaker])
  useEffect(() => {
    if (!running) return
    const id = setInterval(() => setSecs((s) => s + 1), 1000)
    return () => clearInterval(id)
  }, [running])

  const go = useCallback((i: number) => setCur(Math.max(0, Math.min(total - 1, i))), [total])
  const next = useCallback(() => go(curRef.current + 1), [go])
  const prev = useCallback(() => go(curRef.current - 1), [go])

  const toggleFs = useCallback(() => {
    if (!document.fullscreenElement) document.documentElement.requestFullscreen?.().catch(() => {})
    else document.exitFullscreen?.().catch(() => {})
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      const target = e.target as HTMLElement | null
      if (target?.closest?.('input, textarea, select, [contenteditable="true"]')) return
      switch (e.key) {
        case 'ArrowRight': case 'PageDown': case ' ': e.preventDefault(); next(); break
        case 'ArrowLeft': case 'PageUp': e.preventDefault(); prev(); break
        case 'Home': e.preventDefault(); go(0); break
        case 'End': e.preventDefault(); go(total - 1); break
        case 'g': case 'G': case 'o': case 'O': setOverview((v) => !v); break
        case 'f': case 'F': toggleFs(); break
        case 'n': case 'N': if (hasNotes) { e.preventDefault(); setSpeaker((v) => !v) } break
        case 'Escape': if (overview) setOverview(false); else if (speaker) setSpeaker(false); break
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [next, prev, go, total, toggleFs, overview, hasNotes, speaker])

  // Deep-linking por hash (#/<slug>/<n>) — compartible y restaurable al recargar.
  useEffect(() => { const h = `#/${deck.slug}/${cur + 1}`; if (location.hash !== h) history.replaceState(null, '', h) }, [cur, deck.slug])

  // El índice abre limpio (sin búsqueda anterior).
  useEffect(() => { if (overview) setQuery('') }, [overview])

  const onTouchStart = (e: React.TouchEvent) => { const t = e.touches[0]; touch.current = { x: t.clientX, y: t.clientY } }
  const onTouchEnd = (e: React.TouchEvent) => {
    const t = touch.current; if (!t) return; touch.current = null
    const dx = e.changedTouches[0].clientX - t.x, dy = e.changedTouches[0].clientY - t.y
    if (Math.abs(dx) > 56 && Math.abs(dx) > Math.abs(dy) * 1.4) { if (dx < 0) next(); else prev() }
  }

  const q = query.trim().toLowerCase()
  const visible = slides
    .map((s, i) => ({ s, i }))
    .filter(({ s }) => !q || `${s.title} ${s.id} ${s.section ?? ''}`.toLowerCase().includes(q))

  const cs = slides[cur]
  return (
    <div className="deck" data-overview={overview ? 'on' : undefined} data-theme={cs.tone}>
      <div className="deck-progress" aria-hidden="true"><span style={{ width: `${((cur + 1) / total) * 100}%` }} /></div>

      <span className="hud-c tl" aria-hidden="true" /><span className="hud-c tr" aria-hidden="true" />
      <span className="hud-c bl" aria-hidden="true" /><span className="hud-c br" aria-hidden="true" />

      <header className="deck-bar">
        <button className="deck-brand" onClick={() => go(0)} aria-label="AECODE · ir a la portada">
          <AecodeLogo className="deck-logo" />
          <span className="deck-brand-sub">{deck.tag ?? 'AECODE'}</span>
        </button>
        <div className="deck-actions">
          {sections.length > 1 && (
            <select
              className="block-jump"
              value={String(sections.find((s) => s.name === curSection)?.index ?? 0)}
              onChange={(e) => go(Number(e.currentTarget.value))}
              aria-label="Saltar a un módulo"
            >
              {sections.map((s) => <option key={s.name} value={s.index}>{s.name}</option>)}
            </select>
          )}
          {hasNotes && (
            <button className={`icon-btn${speaker ? ' on' : ''}`} onClick={() => setSpeaker((v) => !v)} aria-label="Modo presentador: guion + cronómetro" title="Presentador · guion + cronómetro (N)">🎤</button>
          )}
          <button className="icon-btn" onClick={() => setOverview((v) => !v)} aria-label="Índice de diapositivas" title="Índice (G)">▦</button>
          <button className="icon-btn" onClick={toggleTheme} aria-label={`Cambiar a tema ${theme === 'dark' ? 'claro' : 'oscuro'}`} title="Tema">{theme === 'dark' ? '☀' : '☾'}</button>
          <button className="icon-btn show-md" onClick={toggleFs} aria-label="Pantalla completa" title="Pantalla completa (F)">⤢</button>
        </div>
      </header>

      <main className="slides" onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
        {slides.map((s, i) => {
          const mounted = Math.abs(i - cur) <= 1
          return (
            <SlideFrame key={s.id} id={s.id} index={i} total={total} label={s.title} displayNum={nums[i]}
              mounted={mounted} state={i === cur ? 'current' : i < cur ? 'prev' : 'next'}>
              {s.node}
            </SlideFrame>
          )
        })}
      </main>

      <nav className="deck-nav" aria-label="Navegación de diapositivas">
        <button className="nav-arrow" onClick={prev} disabled={cur === 0} aria-label="Diapositiva anterior">‹</button>
        <button className="nav-count" onClick={() => setOverview(true)} aria-label={`Diapositiva ${cur + 1} de ${total}. Abrir índice`}>
          <span className="nc-cur tnum">{String(cur + 1).padStart(2, '0')}</span>
          <span className="nc-sep">/</span>
          <span className="nc-tot tnum">{String(total).padStart(2, '0')}</span>
          <span className="nc-title">{cs.title}</span>
        </button>
        <button className="nav-arrow" onClick={next} disabled={cur === total - 1} aria-label="Diapositiva siguiente">›</button>
      </nav>

      {hasNotes && speaker && (
        <aside className="teleprompter" aria-label="Guion del presentador">
          <div className="tp-bar">
            <span className="tp-where">
              <b className="tnum">{String(cur + 1).padStart(2, '0')}</b> / {String(total).padStart(2, '0')} · {cs.title}
              {deck.times?.[cur] && <em className="tp-slot">{deck.times?.[cur]}</em>}
            </span>
            <div className="tp-timer">
              <button className="tp-btn" onClick={() => setRunning((r) => !r)} aria-label={running ? 'Pausar cronómetro' : 'Reanudar cronómetro'}>{running ? '⏸' : '▶'}</button>
              <span className={`tp-clock tnum${secs > target ? ' over' : secs > target * 0.85 ? ' near' : ''}`}>{fmt(secs)}</span>
              <span className="tp-target">/ {fmt(target)}</span>
              <button className="tp-btn" onClick={() => { setSecs(0); setRunning(true) }} aria-label="Reiniciar cronómetro" title="Reiniciar">↺</button>
              <button className="tp-btn" onClick={() => setSpeaker(false)} aria-label="Cerrar modo presentador">✕</button>
            </div>
          </div>
          <div className="tp-progress" aria-hidden="true"><span className={secs > target ? 'over' : undefined} style={{ width: `${Math.min(100, (secs / target) * 100)}%` }} /></div>
          <p className="tp-script">{deck.notes![cur] || '—'}</p>
        </aside>
      )}

      {overview && (
        <div className="overview" role="dialog" aria-modal="true" aria-label="Índice de diapositivas" onClick={() => setOverview(false)}>
          <div className="overview-inner" onClick={(e) => e.stopPropagation()}>
            <div className="overview-head">
              <h2>Índice · {total} diapositivas</h2>
              <input
                className="ov-search"
                type="search"
                placeholder="Buscar slide o módulo…"
                value={query}
                onChange={(e) => setQuery(e.currentTarget.value)}
                aria-label="Buscar diapositiva"
                autoFocus
              />
              <button className="icon-btn" onClick={() => setOverview(false)} aria-label="Cerrar índice">✕</button>
            </div>
            <ol className="overview-grid">
              {visible.map(({ s, i }) => (
                <li key={s.id}>
                  <button className={`ov-card ${i === cur ? 'active' : ''}`} onClick={() => { go(i); setOverview(false) }}>
                    <span className="ov-num tnum">{nums[i] || String(i + 1).padStart(2, '0')}</span>
                    <span className="ov-title">{s.title}</span>
                    {s.section && <span className="ov-sec">{s.section}</span>}
                  </button>
                </li>
              ))}
              {visible.length === 0 && <li className="ov-empty">Sin resultados para «{query}»</li>}
            </ol>
          </div>
        </div>
      )}
    </div>
  )
}
