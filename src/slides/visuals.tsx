/* =========================================================================
   VISUALES VDC — componentes de diagrama propios de la masterclass.
   Heredan las primitivas nx-* del motor (vdc.css) y añaden la capa vd-*.
   ========================================================================= */
import { useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import { st } from '../deck/primitives'
import { SlideActiveContext } from '../deck/Deck'
import AnimatedValue from '../deck/CountUp'

/* ---- Hub radial reutilizable (ecosistemas, mapas de actores) ----------- */
export function Hub({ core, sub, nodes, ac = 'nx-v' }: {
  core: string; sub: string; nodes: Array<[string, string]>; ac?: string
}) {
  return (
    <div className={`nx-hub up ${ac}`} data-n={String(nodes.length)} style={st(1)}>
      <div className="nx-core"><b>{core}</b><span>{sub}</span></div>
      {nodes.map((n) => (
        <div className="nx-node" key={n[0]}>{n[0]}<small>{n[1]}</small></div>
      ))}
    </div>
  )
}

/* ---- Comparación a dos lados (tradicional vs VDC) ---------------------- */
export function VS({ bad, good, mid = 'vs' }: {
  bad: { pill: string; h: string; items: string[] }
  good: { pill: string; h: string; items: string[] }
  mid?: string
}) {
  return (
    <div className="nx-vs up" style={st(1)}>
      <div className="nx-side bad" style={st(1)}>
        <span className="vs-pill">{bad.pill}</span>
        <h3>{bad.h}</h3>
        <ul>{bad.items.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
      <div className="vs-mid" style={st(2)}><span>{mid}</span></div>
      <div className="nx-side good" style={st(3)}>
        <span className="vs-pill">{good.pill}</span>
        <h3>{good.h}</h3>
        <ul>{good.items.map((t) => <li key={t}>{t}</li>)}</ul>
      </div>
    </div>
  )
}

/* ---- Flujo horizontal (procesos de 3-5 pasos) --------------------------- */
export function Flow({ steps, loop }: { steps: Array<[string, string]>; loop?: string }) {
  return (
    <>
      <div className="nx-flow up" style={{ ...st(1), gridTemplateColumns: `repeat(${steps.length}, 1fr)` }}>
        {steps.map((s, i) => (
          <div className="nx-step" key={s[0]} style={st(i + 1)}>
            <span className="fs-n">{i + 1}</span>
            <h3>{s[0]}</h3>
            <p>{s[1]}</p>
          </div>
        ))}
      </div>
      {loop && <span className="nx-loop up" style={st(2)}>{loop}</span>}
    </>
  )
}

/* ---- Fila de stats grandes con count-up --------------------------------- */
export function Stats({ items }: {
  items: Array<{ v: string; t: string; src?: string; ac?: 'v' | 'b' | 'g' | 'r' | 'w' }>
}) {
  return (
    <div className="vd-stats up" style={st(1)} data-n={items.length}>
      {items.map((s, i) => (
        <div className={`vd-stat ac-${s.ac ?? 'v'}`} key={i} style={st(i + 1)}>
          <span className="vs-v tnum"><AnimatedValue text={s.v} /></span>
          <span className="vs-t">{s.t}</span>
          {s.src && <span className="vs-src">{s.src}</span>}
        </div>
      ))}
    </div>
  )
}

/* ---- Cascada VDC: CO → PO → ProdO → FC (el diagrama central) ------------ */
export function Cascade({ rows, back }: {
  rows: Array<{ code: string; name: string; desc: string; items: string[]; ac: 'v' | 'b' | 'g' | 'w' }>
  back?: string
}) {
  return (
    <div className="vd-casc up" style={st(1)}>
      {rows.map((r, i) => (
        <div className={`vd-crow ac-${r.ac}`} key={r.code} style={st(i + 1)}>
          <div className="vd-ckey">
            <span className="vd-ccode">{r.code}</span>
            <b>{r.name}</b>
            <small>{r.desc}</small>
          </div>
          <div className="vd-citems">
            {r.items.map((it) => <span key={it}>{it}</span>)}
          </div>
          {i < rows.length - 1 && <span className="vd-carrow" aria-hidden="true">↓</span>}
        </div>
      ))}
      {back && <p className="vd-cback up" style={st(rows.length + 1)}>↺ {back}</p>}
    </div>
  )
}

/* ---- Panel de métricas 3 pilares × N (dashboard Megantoni) -------------- */
export function MetricsPanel({ pillars }: {
  pillars: Array<{ name: string; ac: 'v' | 'b' | 'g'; metrics: Array<[string, string]> }>
}) {
  return (
    <div className="vd-mx up" style={st(1)}>
      {pillars.map((p, pi) => (
        <div className={`vd-mcol ac-${p.ac}`} key={p.name} style={st(pi + 1)}>
          <h3>{p.name}</h3>
          {p.metrics.map((m, i) => (
            <div className="vd-metric" key={i}>
              <span className="vd-mval tnum">{m[0]}</span>
              <span className="vd-mlab">{m[1]}</span>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

/* ---- Línea de tiempo horizontal (historia, normativa) ------------------- */
export function Tline({ items }: { items: Array<{ y: string; t: string; d: string; hot?: boolean }> }) {
  return (
    <div className="vd-tl up" style={st(1)}>
      {items.map((m, i) => (
        <div className={`vd-tli${m.hot ? ' hot' : ''}`} key={i} style={st(i + 1)}>
          <span className="vd-ty tnum">{m.y}</span>
          <span className="vd-tdot" aria-hidden="true" />
          <b>{m.t}</b>
          <p>{m.d}</p>
        </div>
      ))}
    </div>
  )
}

/* ---- Agenda ICE minutada (barras proporcionales a los minutos) ---------- */
export function IceAgenda({ blocks }: { blocks: Array<{ min: number; t: string; d: string }> }) {
  const total = blocks.reduce((a, b) => a + b.min, 0)
  return (
    <div className="vd-ice up" style={st(1)}>
      <div className="vd-icebar" aria-hidden="true">
        {blocks.map((b, i) => (
          <span key={i} style={{ flexGrow: b.min }} className={`seg s${i + 1}`}>{b.min}’</span>
        ))}
      </div>
      <div className="vd-icelist">
        {blocks.map((b, i) => (
          <div className="vd-iceit" key={i} style={st(i + 1)}>
            <span className={`dot s${i + 1}`} aria-hidden="true" />
            <b>{b.t}</b>
            <p>{b.d}</p>
          </div>
        ))}
      </div>
      <p className="vd-icetotal">Total: <b className="tnum">{total} minutos</b> — una decisión de calidad por bloque, no una reunión más.</p>
    </div>
  )
}

/* ---- Juego de auditoría: encuentra los errores del BEP real -------------- */
export function AuditGame({ items }: {
  items: Array<{ claim: string; error: boolean; why: string }>
}) {
  const active = useContext(SlideActiveContext)
  const [open, setOpen] = useState<Set<number>>(new Set())
  useEffect(() => { if (!active) setOpen(new Set()) }, [active])
  const found = [...open].filter((i) => items[i].error).length
  const totalErr = items.filter((i) => i.error).length
  return (
    <div className="vd-audit up" style={st(1)}>
      <div className="vd-ascore" role="status">
        Errores encontrados: <b className="tnum">{found}</b> / <span className="tnum">{totalErr}</span>
      </div>
      <div className="vd-agrid">
        {items.map((it, i) => {
          const revealed = open.has(i)
          return (
            <button
              key={i}
              className="vd-acard"
              data-state={revealed ? (it.error ? 'err' : 'ok') : undefined}
              style={st(i + 1)}
              onClick={() => setOpen((s) => { const n = new Set(s); n.add(i); return n })}
              aria-pressed={revealed}
            >
              <span className="vd-aclaim">{it.claim}</span>
              {revealed
                ? <span className="vd-awhy"><b>{it.error ? '✕ ERROR' : '✓ CORRECTO'}</b> {it.why}</span>
                : <span className="vd-ahint">Toca para auditar</span>}
            </button>
          )
        })}
      </div>
    </div>
  )
}

/* ---- Flip-cards de repaso (voltea para ver la respuesta) ----------------- */
export interface FlipItem { icon: string; k: string; tag: string; q: string; back: Array<[string, string]>; ac?: 'nx-v' | 'nx-b' | 'nx-g' }
export function FlipDeck({ cards }: { cards: FlipItem[] }) {
  return (
    <div className="flips up" style={st(1)}>
      {cards.map((c, i) => <FlipCard key={c.k} c={c} i={i} />)}
    </div>
  )
}
function FlipCard({ c, i }: { c: FlipItem; i: number }) {
  const active = useContext(SlideActiveContext)
  const [open, setOpen] = useState(false)
  useEffect(() => { if (!active) setOpen(false) }, [active])
  return (
    <button className={`flip ${c.ac ?? 'nx-v'}`} data-open={open || undefined} onClick={() => setOpen((o) => !o)}
      aria-pressed={open} style={st(i + 1)}>
      <span className="flip-inner">
        <span className="flip-face flip-front">
          <span className="flip-icon" aria-hidden="true">{c.icon}</span>
          <span className="flip-k">{c.k}</span>
          <span className="flip-tag">{c.tag}</span>
          <span className="flip-que">{c.q}</span>
          <span className="flip-cue">Toca para voltear ↻</span>
        </span>
        <span className="flip-face flip-back">
          {c.back.map((b, j) => (
            <span className={`fb-row${j === 0 ? ' hot' : ''}`} key={j}>
              <span className="fb-i" aria-hidden="true">{b[0]}</span>
              <span>{b[1]}</span>
            </span>
          ))}
        </span>
      </span>
    </button>
  )
}

/* ---- Escalera (madurez, niveles, servicios) ------------------------------ */
export function Ladder({ steps }: { steps: Array<{ t: string; d: string; tag?: string }> }) {
  return (
    <div className="vd-ladder up" style={st(1)} data-n={steps.length}>
      {steps.map((s, i) => (
        <div className="vd-lstep" key={s.t} style={{ ...st(i + 1), ['--lift' as any]: i }}>
          {s.tag && <span className="vd-ltag">{s.tag}</span>}
          <b>{s.t}</b>
          <p>{s.d}</p>
        </div>
      ))}
    </div>
  )
}

/* ---- Tabla compacta premium (metas, fuentes) ----------------------------- */
export function Table({ head, rows, hotCol }: { head: string[]; rows: ReactNode[][]; hotCol?: number }) {
  return (
    <div className="vd-tablewrap up" style={st(1)}>
      <table className="vd-table">
        <thead><tr>{head.map((h) => <th key={h}>{h}</th>)}</tr></thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>{r.map((c, j) => <td key={j} className={j === hotCol ? 'hot' : undefined}>{c}</td>)}</tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

/* ---- Lista de fuentes con badge de confianza ----------------------------- */
export function Sources({ groups }: {
  groups: Array<{ h: string; items: Array<{ t: string; conf: 'alta' | 'media' | 'baja' }> }>
}) {
  return (
    <div className="vd-src up" style={st(1)}>
      {groups.map((g, gi) => (
        <div className="vd-srcg" key={g.h} style={st(gi + 1)}>
          <h3>{g.h}</h3>
          <ul>
            {g.items.map((s, i) => (
              <li key={i}><span className={`vd-conf c-${s.conf}`}>{s.conf}</span>{s.t}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

/* ---- Mapa de procesos simple (tareas + decisión sí/no) ------------------- */
export interface PmNode { t: string; type?: 'start' | 'task' | 'dec' | 'end'; no?: string }
export function ProcessMap({ nodes, caption }: { nodes: PmNode[]; caption?: string }) {
  return (
    <div className="vd-pm up" style={st(1)}>
      <div className="vd-pmrow">
        {nodes.map((n, i) => (
          <div className="vd-pmcell" key={i} style={st(i + 1)}>
            <div className={`vd-pmnode ${n.type ?? 'task'}`}>
              <span>{n.t}</span>
              {n.type === 'dec' && <b className="pm-yes" aria-hidden="true">sí →</b>}
            </div>
            {n.type === 'dec' && n.no && (
              <div className="vd-pmno"><b>no ↩</b> {n.no}</div>
            )}
            {i < nodes.length - 1 && <span className="vd-pmarrow" aria-hidden="true">→</span>}
          </div>
        ))}
      </div>
      {caption && <p className="vd-pmcap">{caption}</p>}
    </div>
  )
}

/* ---- Carriles (swimlanes): un responsable por fila ----------------------- */
export function Lanes({ lanes, caption }: {
  lanes: Array<{ role: string; ac: 'v' | 'b' | 'g'; steps: Array<{ t: string; dec?: boolean; hot?: boolean }> }>
  caption?: string
}) {
  return (
    <div className="vd-lanes up" style={st(1)}>
      {lanes.map((l, li) => (
        <div className={`vd-lane ac-${l.ac}`} key={l.role} style={st(li + 1)}>
          <div className="vd-lrole">{l.role}</div>
          <div className="vd-lsteps">
            {l.steps.map((s, i) => (
              <div key={i} className={`vd-lstepitem${s.dec ? ' dec' : ''}${s.hot ? ' hot' : ''}`}>
                {s.t}
                {s.hot && <em>cuello de botella</em>}
              </div>
            ))}
          </div>
        </div>
      ))}
      {caption && <p className="vd-pmcap">{caption}</p>}
    </div>
  )
}

/* ---- Prompt copiable (para ChatGPT / Claude) ------------------------------ */
export function PromptCard({ title, tag, prompt }: { title: string; tag: string; prompt: string }) {
  const active = useContext(SlideActiveContext)
  const [copied, setCopied] = useState(false)
  useEffect(() => { if (!active) setCopied(false) }, [active])
  const copy = () => {
    navigator.clipboard?.writeText(prompt).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2400)
    }).catch(() => {})
  }
  return (
    <div className="vd-prompt up" style={st(1)}>
      <div className="vd-phead">
        <span className="vd-ptag">{tag}</span>
        <b>{title}</b>
        <button className="vd-pcopy" onClick={copy} aria-label="Copiar prompt al portapapeles">
          {copied ? '✓ Copiado' : '⧉ Copiar'}
        </button>
      </div>
      <pre className="vd-pbody">{prompt}</pre>
    </div>
  )
}

/* ---- Los 3 pilares + métricas (triángulo VDC) ---------------------------- */
export function Pillars() {
  const data: Array<{ ac: string; icon: string; t: string; d: string; tool: string }> = [
    { ac: 'nx-v', icon: '🧭', t: 'ICE', d: 'Ingeniería Concurrente Integrada: sesiones de decisión multidisciplinarias con latencia casi cero.', tool: 'Big Room · agenda · acta de acuerdos' },
    { ac: 'nx-b', icon: '🏗️', t: 'BIM', d: 'Modelos de información federados: una sola fuente de verdad geométrica y de datos.', tool: 'Revit · Navisworks · CDE' },
    { ac: 'nx-g', icon: '⚙️', t: 'PPM', d: 'Gestión de la producción del proyecto: el proyecto como sistema de producción medible.', tool: 'Last Planner · lookahead · PPC' },
  ]
  return (
    <div className="vd-pillars up" style={st(1)}>
      <div className="vd-pcore" style={st(4)}>
        <b>Métricas</b>
        <span>objetivos explícitos y públicos</span>
      </div>
      <div className="vd-pgrid">
        {data.map((p, i) => (
          <article className={`nx-card ${p.ac}`} key={p.t} style={st(i + 1)}>
            <span className="nx-ic" aria-hidden="true">{p.icon}</span>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
            <span className="nx-foot">{p.tool}</span>
          </article>
        ))}
      </div>
    </div>
  )
}
