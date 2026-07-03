import type { ReactNode } from 'react'

/** Entrada de módulo: slide + guion del presentador + franja horaria sugerida. */
export interface Entry {
  id: string
  num: string
  title: string
  node: ReactNode
  note: string
  time?: string
}
