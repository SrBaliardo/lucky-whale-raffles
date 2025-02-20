import { Outlet, Navigate } from 'react-router-dom'
import { Container } from './styles'
import { Header, Footer } from '../../components'

export function AdminLayout() {
  // const { admin: isAdmin } = JSON.parse(
  //   localStorage?.getItem('lucky-whale:UserData'),
  // )
  const isAdmin = true

  return isAdmin ? (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  ) : (
    <Navigate to={'/'} />
  )
}
