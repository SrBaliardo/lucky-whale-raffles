import { Outlet, Navigate } from 'react-router-dom'
import { Container, ContainerContent } from './styles'
import { AdminSideMenu, Footer, AdminFooterMenu } from '../../components'

export function AdminLayout() {
  // const { admin: isAdmin } = JSON.parse(
  //   localStorage?.getItem('lucky-whale:UserData'),
  // )
  const isAdmin = true

  return isAdmin ? (
    <Container>
      {/* <ContainerContent> */}
        <AdminSideMenu />
        <Outlet />
      {/* </ContainerContent> */}
      {/* <AdminFooterMenu /> */}
      {/* <Footer /> */}
    </Container>
  ) : (
    <Navigate to={'/'} />
  )
}
