import { Outlet, Navigate } from 'react-router-dom'
import { Container } from './styles'
import { AdminHeader, Footer, AdminFooterMenu } from '../../components'

export function AdminLayout() {
  // const { admin: isAdmin } = JSON.parse(
  //   localStorage?.getItem('lucky-whale:UserData'),
  // )
  const isAdmin = true

  return isAdmin ? (
    <Container>
      <AdminHeader />
      <Outlet />
      <AdminFooterMenu />
      <Footer />
    </Container>
  ) : (
    <Navigate to={'/'} />
  )
}
