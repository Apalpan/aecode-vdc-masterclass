import { useContext, useEffect, useRef, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { SlideActiveContext, SlideNumContext } from './Deck'
import AecodeLogo from './AecodeLogo'

export const st = (i: number): CSSProperties => ({ ['--i' as any]: i })

const reducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

/** Count-up disparado SÓLO cuando la diapositiva es la actual (re-anima al volver). */
function useCountUp(target: number, decimals = 0, dur = 1200): string {
  const active = useContext(SlideActiveContext)
  const [val, setVal] = useState(0)
  const raf = useRef<number>()
  useEffect(() => {
    if (!active) { setVal(0); return }
    if (reducedMotion()) { setVal(target); return }
    const t0 = performance.now()
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / dur)
      setVal(target * (1 - Math.pow(1 - p, 3)))      // easeOutCubic
      if (p < 1) raf.current = requestAnimationFrame(tick)
    }
    raf.current = requestAnimationFrame(tick)
    return () => { if (raf.current) cancelAnimationFrame(raf.current) }
  }, [active, target, dur])
  return decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString('es')
}

/** Número animado con prefijo/sufijo (p. ej. <Num to={75} suffix="K" />). */
export function Num({ to, decimals = 0, prefix, suffix }: {
  to: number; decimals?: number; prefix?: string; suffix?: string
}) {
  const v = useCountUp(to, decimals)
  return <span className="tnum">{prefix}{v}{suffix}</span>
}

export function Head({ eyebrow, title, lead }: { eyebrow: string; title: ReactNode; lead?: ReactNode }) {
  const num = useContext(SlideNumContext)
  return (
    <header className="s-head up" style={st(0)}>
      <p className="eyebrow">{num && <span className="idx">{num}</span>} {eyebrow}</p>
      <h2 className="s-title">{title}</h2>
      <div className="kicker-line" />
      {lead && <p className="lead">{lead}</p>}
    </header>
  )
}

export function Insights({ items }: { items: ReactNode[] }) {
  return <ul className="insights compact">{items.map((t, i) => <li key={i}>{t}</li>)}</ul>
}

export function SourceNote({ children }: { children: ReactNode }) {
  return <p className="src-note up" style={st(4)}><b>Fuente:</b> {children}</p>
}

export function Plain({ children, i = 2 }: { children: ReactNode; i?: number }) {
  return <div className="plain up" style={st(i)}><p>{children}</p></div>
}

export function PresenterNote({ children, i = 3 }: { children: ReactNode; i?: number }) {
  return <div className="presenter-note up" style={st(i)}>{children}</div>
}

export function SectionSlide({ eyebrow, title, lead, chips }: { eyebrow: string; title: ReactNode; lead: ReactNode; chips: string[] }) {
  return (
    <div className="section-slide">
      <AecodeLogo className="section-logo up" style={st(0)} />
      <p className="cover-eyebrow up" style={st(1)}>{eyebrow}</p>
      <h1 className="section-title up" style={st(2)}>{title}</h1>
      <p className="cover-lead up" style={st(3)}>{lead}</p>
      <div className="cover-meta up" style={st(4)}>
        {chips.map((c) => <span className="chip" key={c}>{c}</span>)}
      </div>
    </div>
  )
}
