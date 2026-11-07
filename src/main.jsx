import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Fonts (self-hosted, so the site also works offline)
import '@fontsource-variable/bricolage-grotesque' // headings
import '@fontsource-variable/source-sans-3' // body text
import '@fontsource/instrument-serif/400.css' // expressive accents
import '@fontsource/instrument-serif/400-italic.css'

// Styles, in order: design tokens → base → shared components → layout → sections
import './styles/tokens.css'
import './styles/base.css'
import './styles/components.css'
import './styles/layout.css'
import './styles/sections.css'

import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
