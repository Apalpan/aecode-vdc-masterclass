import { useEffect, useState } from 'react'
import Deck from './deck/Deck'
import { vdcMasterclass } from './slides/slides'

/** App de un solo deck: el hash sólo lleva el número de diapositiva (#/vdc/3). */
function currentSlide(): number {
  const m = location.hash.match(/(\d+)\s*$/)
  const n = m ? parseInt(m[1], 10) : 1
  return Number.isFinite(n) && n > 0 ? n : 1
}

export default function App() {
  const [slide, setSlide] = useState(currentSlide)

  useEffect(() => {
    const onHash = () => setSlide(currentSlide())
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return <Deck key={vdcMasterclass.slug} deck={vdcMasterclass} initialSlide={slide} />
}
