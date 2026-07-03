import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/manrope'
import '@fontsource-variable/inter'
import './styles/tokens.css'
import './styles/global.css'
import './styles/components.css'
import './styles/deck.css'
import './styles/hud.css'
import './styles/flash.css'
import './styles/vdc.css'
import App from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
