import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Router />
    </BrowserRouter>
    <GlobalStyles />
  </StrictMode>,
)
