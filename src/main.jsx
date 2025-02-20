import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/globalStyles'
import { ThemeProvider } from 'styled-components'
import { standardTheme } from './styles/StandardTheme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider theme={standardTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ThemeProvider>
    <GlobalStyles />
  </StrictMode>,
)
