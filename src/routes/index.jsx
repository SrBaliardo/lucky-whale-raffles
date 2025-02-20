import { Route, Routes } from 'react-router-dom'
import { MainLayout } from '../layouts/MainLayout'
import { AdminLayout } from '../layouts/AdminLayout'
import {
  Contact,
  Home,
  RaffleList,
  RegisterAdmin,
  RestrictedArea,
  AdminRaffleList,
  UserDashboard,
  RaffleRegister,
  RaffleUpdate,
  OrderResume,
  OrderCompleted,
} from '../pages'

export function Router() {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/raffle-list' element={<RaffleList />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/restricted-area' element={<RestrictedArea />} />
        <Route path='/user-register' element={<RegisterAdmin />} />
      </Route>

      <Route path='/admin' element={<AdminLayout />}>
        <Route path='/admin/dashboard' element={<UserDashboard />} />
        <Route path='/admin/raffle-list' element={<AdminRaffleList />} />
        <Route path='/admin/raffle-register' element={<RaffleRegister />} />
        <Route path='/admin/raffle-update' element={<RaffleUpdate />} />
        <Route path='/admin/order-resume' element={<OrderResume />} />
        <Route path='/admin/order-completed' element={<OrderCompleted />} />
      </Route>
    </Routes>
  )
}
