import { Outlet, Navigate } from 'react-router-dom'
import { Container, DesktopMenu, MobileMenu } from './styles'
import { AdminSideMenu, MenuHamburgerAdminLayout } from '../../components'

export function AdminLayout() {
  // const { admin: isAdmin } = JSON.parse(
  //   localStorage?.getItem('lucky-whale:UserData'),
  // )
  const isAdmin = true

  const menuOptions = [
    // { label: 'Dashboard', pathname: '/admin/dashboard' },
    { label: 'Minhas Rifas', pathname: '/admin/raffle-list' },
    { label: 'Criar Rifa', pathname: '/admin/raffle-register' },
    { label: 'Gerenciar Território', pathname: '/admin/manage-territory' },
    { label: 'Parceiros', pathname: '/admin/partners' },
    { label: 'Alterar Senha', pathname: '/admin/change-password' },
    { label: 'Ir para Home', pathname: '/' },
    { label: 'Sair', pathname: '/' },
  ]

  return isAdmin ? (
    <Container>
      <DesktopMenu>
        <AdminSideMenu />
      </DesktopMenu>

      <MobileMenu>
        <MenuHamburgerAdminLayout options={menuOptions} />
      </MobileMenu>
      <Outlet />
    </Container>
  ) : (
    <Navigate to={'/'} />
  )
}
