/* =========================================================================
   FLASH — interludios de aprendizaje cada 3–5 slides.
   Cuatro formatos: pregunta (V/F · A/B/C/D · postura), dato clave, frase
   síntesis y debate para la sala. La pregunta se responde tocando una
   alternativa; la explicación técnica aparece después. Se reinicia al salir.
   ========================================================================= */
import { useContext, useEffect, useState } from 'react'
import type { CSSProperties, ReactNode } from 'react'
import { SlideActiveContext } from './Deck'
import AnimatedValue from './CountUp'

const st = (i: number): CSSProperties => ({ ['--i' as any]: i })

export type FlashItem =
  | { kind: 'quiz'; tag: string; q: string; options: { id: string; t: string }[]; answer: string; explain: string; src?: string }
  | { kind: 'dato'; tag: string; v: string; t: string; d: string; src?: string }
  | { kind: 'frase'; tag: string; t: ReactNode; d?: string }
  | { kind: 'debate'; tag: string; q: string; d: string; anchor: { v: string; t: string; src?: string } }

/* ------------------------------- QUIZ --------------------------------- */
function Quiz({ f }: { f: Extract<FlashItem, { kind: 'quiz' }> }) {
  const active = useContext(SlideActiveContext)
  const [sel, setSel] = useState<string | null>(null)
  useEffect(() => { if (!active) setSel(null) }, [active])
  const revealed = sel !== null
  const correct = sel === f.answer
  return (
    <div className="flash">
      <span className="flash-tag up" style={st(0)}>{f.tag}</span>
      <h2 className="flash-q up" style={st(1)}>{f.q}</h2>
      <div className="flash-opts up" style={st(2)} data-n={f.options.length} role="group" aria-label="Alternativas">
        {f.options.map((o, i) => {
          const state = !revealed ? undefined : o.id === f.answer ? 'correct' : o.id === sel ? 'wrong' : 'dim'
          return (
            <button key={o.id} className="fopt" data-state={state} style={st(i + 1)}
              onClick={() => { if (!revealed) setSel(o.id) }} aria-pressed={sel === o.id}>
              <span className="fopt-k" aria-hidden="true">{o.id.toUpperCase()}</span>
              <span className="fopt-t">{o.t}</span>
              {state === 'correct' && <span className="fopt-mark" aria-hidden="true">✓</span>}
              {state === 'wrong' && <span className="fopt-mark" aria-hidden="true">✕</span>}
            </button>
          )
        })}
      </div>
      {revealed ? (
        <div className="flash-explain" role="status">
          <span className="fe-label">{correct ? '✓ Correcto' : `La respuesta es ${f.answer.toUpperCase()}`}</span>
          <p>{f.explain}</p>
          {f.src && <span className="fe-src">{f.src}</span>}
        </div>
      ) : (
        <p className="flash-hint up" style={st(3)}>Elige una alternativa — después viene el porqué.</p>
      )}
    </div>
  )
}

/* ------------------------------- DATO --------------------------------- */
function Dato({ f }: { f: Extract<FlashItem, { kind: 'dato' }> }) {
  return (
    <div className="flash">
      <span className="flash-tag up" style={st(0)}>{f.tag}</span>
      <div className="flash-v tnum up" style={st(1)}><AnimatedValue text={f.v} /></div>
      <p className="flash-vt up" style={st(2)}>{f.t}</p>
      <div className="flash-rule up" style={st(2)} aria-hidden="true" />
      <p className="flash-d up" style={st(3)}>{f.d}</p>
      {f.src && <span className="fe-src up" style={st(4)}>{f.src}</span>}
    </div>
  )
}

/* ------------------------------- FRASE -------------------------------- */
function Frase({ f }: { f: Extract<FlashItem, { kind: 'frase' }> }) {
  return (
    <div className="flash frase">
      <span className="flash-tag up" style={st(0)}>{f.tag}</span>
      <div className="flash-rule up" style={st(1)} aria-hidden="true" />
      <p className="flash-phrase up" style={st(2)}>{f.t}</p>
      <div className="flash-rule up" style={st(3)} aria-hidden="true" />
      {f.d && <p className="flash-d up" style={st(4)}>{f.d}</p>}
    </div>
  )
}

/* ------------------------------- DEBATE ------------------------------- */
function Debate({ f }: { f: Extract<FlashItem, { kind: 'debate' }> }) {
  return (
    <div className="flash">
      <span className="flash-tag up" style={st(0)}>{f.tag}</span>
      <h2 className="flash-q up" style={st(1)}>{f.q}</h2>
      <div className="flash-anchor up" style={st(2)}>
        <span className="fa-v tnum"><AnimatedValue text={f.anchor.v} /></span>
        <span className="fa-t">{f.anchor.t}{f.anchor.src && <em> · {f.anchor.src}</em>}</span>
      </div>
      <p className="flash-d up" style={st(3)}>{f.d}</p>
    </div>
  )
}

export default function FlashSlide({ item }: { item: FlashItem }) {
  switch (item.kind) {
    case 'quiz': return <Quiz f={item} />
    case 'dato': return <Dato f={item} />
    case 'frase': return <Frase f={item} />
    case 'debate': return <Debate f={item} />
  }
}
