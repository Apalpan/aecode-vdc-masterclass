import type { ReactNode } from 'react'

/** Entrada de módulo: slide + guion del presentador.
 *  La franja horaria por slide se calcula en slides.tsx (durations por módulo). */
export interface Entry {
  id: string
  num: string
  title: string
  node: ReactNode
  note: string
}
