import { Outlet, Navigate } from 'react-router-dom'
import { Container, DesktopMenu, MobileMenu } from './styles'
import { AdminSideMenu, MenuHamburgerAdminLayout } from '../../components'
import { useUser } from '../../contexts/UserContext'
import { useRaffle } from '../../contexts/RaffleContext'
import { useNavigate } from 'react-router-dom'

export function AdminLayout() {
  const navigate = useNavigate()
  const { clearUserData, userToken } = useUser()
  const { setRafflesByUser } = useRaffle()

  const isAuthenticated = userToken

  const logout = () => {
    clearUserData()
    setRafflesByUser([])
    navigate('/')
  }

  const menuOptions = [
    // { label: 'Dashboard', pathname: '/admin/dashboard' },
    { label: 'Minhas Rifas', pathname: '/admin/raffle-list' },
    { label: 'Criar Rifa', pathname: '/admin/raffle-register' },
    { label: 'Gerenciar Território', pathname: '/admin/manage-territory' },
    { label: 'Parceiros', pathname: '/admin/partners' },
    { label: 'Alterar Senha', pathname: '/admin/change-password' },
    { label: 'Ir para Home', pathname: '/' },
    { label: 'Sair', onClick: logout },
  ]

  return isAuthenticated ? (
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
    <Navigate to={'/restricted-area'} />
  )
}
