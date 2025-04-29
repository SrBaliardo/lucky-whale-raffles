import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { AdminLayout } from '../layouts/AdminLayout'
import {
  About,
  Home,
  RaffleList,
  RegisterAdmin,
  UseTerms,
  PrivacyPolicy,
  StepByStep,
  RestrictedArea,
  ForgotPassword,
  AdminRaffleList,
  UserDashboard,
  RaffleRegister,
  RafflePreview,
  RaffleUpdate,
  ManageTerritory,
  Partners,
  ChangePassword,
  PaymentPage,
  OrderCompleted,
} from '../pages'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/raffle-list' element={<RaffleList />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms-of-use' element={<UseTerms />} />
        <Route path='/restricted-area' element={<RestrictedArea />} />
        <Route path='/user-register' element={<RegisterAdmin />} />
        <Route path='/privacy-policy' element={<PrivacyPolicy />} />
        <Route path='/step-by-step' element={<StepByStep />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/payment-page' element={<PaymentPage />} />
        <Route path='/order-completed' element={<OrderCompleted />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='/admin/dashboard' element={<UserDashboard />} />
        <Route path='/admin/raffle-list' element={<AdminRaffleList />} />
        <Route path='/admin/raffle-register' element={<RaffleRegister />} />
        <Route path='/admin/raffle-preview' element={<RafflePreview />} />
        <Route path='/admin/raffle-update' element={<RaffleUpdate />} />
        <Route path='/admin/manage-territory' element={<ManageTerritory />} />
        <Route path='/admin/partners' element={<Partners />} />
        <Route path='/admin/change-password' element={<ChangePassword />} />
      </Route>
    </Routes>
  )
}
