/* =========================================================================
   VDC · VIRTUAL DESIGN AND CONSTRUCTION — Masterclass AECODE (3 h)
   Ensambla los 8 módulos en un DeckDef con secciones (block-jump),
   guion de presentador (teleprompter) y cronograma calculado:
   170 min de contenido + 10 min de pausa (tras el módulo 03) = 180 min.
   ========================================================================= */
import type { DeckDef, SlideDef } from '../deck/Deck'
import type { Entry } from './types'
import { m0 } from './m0-apertura'
import { m1 } from './m1-problema'
import { m2 } from './m2-canon'
import { m3 } from './m3-pilares'
import { m4 } from './m4-megantoni'
import { m5 } from './m5-peru'
import { m6 } from './m6-futuro'
import { m7 } from './m7-cierre'

interface Mod { section: string; entries: Entry[]; durations: number[]; breakBefore?: number }

const MODULES: Mod[] = [
  { section: 'Apertura', entries: m0, durations: [3, 3, 3, 3, 2] },
  { section: '01 · El problema', entries: m1, durations: [1, 3, 3, 4, 3] },
  { section: '02 · Canon Stanford', entries: m2, durations: [1, 4, 3, 3, 6, 4, 4, 3, 2, 2] },
  { section: '03 · Tres pilares', entries: m3, durations: [1, 3, 4, 3, 3, 4, 3, 4, 3, 3, 2, 2, 1] },
  { section: '04 · Caso Megantoni', entries: m4, durations: [1, 3, 5, 3, 3, 3, 8, 3, 2], breakBefore: 10 },
  { section: '05 · VDC en el Perú', entries: m5, durations: [1, 4, 3, 3, 3, 3, 3, 2] },
  { section: '06 · VDC + IA', entries: m6, durations: [1, 3, 2, 2, 1, 1] },
  { section: 'Cierre', entries: m7, durations: [1, 3, 4, 2, 1] },
]

const fmt = (min: number) => `${Math.floor(min / 60)}:${String(min % 60).padStart(2, '0')}`

const slides: SlideDef[] = []
const notes: string[] = []
const times: string[] = []
let clock = 0
for (const mod of MODULES) {
  if (mod.breakBefore) clock += mod.breakBefore
  mod.entries.forEach((e, i) => {
    const dur = mod.durations[i] ?? 3
    slides.push({ id: e.id, num: e.num, title: e.title, node: e.node, section: mod.section })
    notes.push(e.note)
    const slot = `${fmt(clock)}–${fmt(clock + dur)}`
    times.push(mod.breakBefore && i === 0 ? `pausa 10’ · ${slot}` : slot)
    clock += dur
  })
}

export const vdcMasterclass: DeckDef = {
  slug: 'vdc',
  title: 'VDC · Virtual Design and Construction',
  subtitle: 'Masterclass del Diplomado BIM·Lean·BI·IA — AECODE',
  tag: 'VDC · Masterclass',
  date: '2026',
  slides,
  notes,
  times,
  targetSeconds: 3 * 60 * 60,
}
