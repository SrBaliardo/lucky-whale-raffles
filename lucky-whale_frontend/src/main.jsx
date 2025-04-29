import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ToastContainer } from 'react-toastify'
import GlobalStyles from './globalStyles'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './routes'
import { UserProvider } from './contexts/UserContext'
import { RaffleProvider } from './contexts/RaffleContext'
import { PaymentProvider } from './contexts/PaymentContext'
import { TerritoryProvider } from './contexts/TerritoryContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <RaffleProvider>
        <PaymentProvider>
          <TerritoryProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </TerritoryProvider>
        </PaymentProvider>
      </RaffleProvider>
    </UserProvider>
    <ToastContainer theme='colored' autoClose={3000} />
    <GlobalStyles />
  </StrictMode>,
)
