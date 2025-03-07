import { useNavigate, useLocation } from 'react-router-dom'
import { Container, ContainerContent, MenuItems, MenuLink } from './styles'
import LuckyWhale from '../../assets/logo-lucky-whale.png'
import DashboardIcon from '@mui/icons-material/Dashboard'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import AddIcon from '@mui/icons-material/Add'
import PublicIcon from '@mui/icons-material/Public'
import GroupsIcon from '@mui/icons-material/Groups'
import PasswordIcon from '@mui/icons-material/Password'
import HomeIcon from '@mui/icons-material/Home'
import LogoutIcon from '@mui/icons-material/Logout'
import { useUser } from '../../contexts/UserContext'
import { useRaffle } from '../../contexts/RaffleContext'

export function AdminSideMenu() {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname
  const { clearUserData } = useUser()
  const { setRafflesByUser } = useRaffle()

  const logout = () => {
    clearUserData()
    setRafflesByUser([])
    navigate('/')
  }

  return (
    <Container>
      <ContainerContent>
        <img src={LuckyWhale} />

        <MenuItems>
          {/* <MenuLink
            onClick={() => navigate('/admin/dashboard')}
            $isActive={pathname.includes('admin/dashboard')}
          >
            <DashboardIcon />
            Dashboard
          </MenuLink> */}
          <MenuLink
            onClick={() => navigate('/admin/raffle-list')}
            $isActive={pathname.includes('list')}
          >
            <FormatListBulletedIcon />
            Minhas Rifas
          </MenuLink>
          <MenuLink
            onClick={() => navigate('/admin/raffle-register')}
            $isActive={pathname.includes('register')}
          >
            <AddIcon />
            Criar Rifa
          </MenuLink>
          <MenuLink
            onClick={() => navigate('/admin/manage-territory')}
            $isActive={pathname.includes('territory')}
          >
            <PublicIcon />
            Gerenciar Território
          </MenuLink>
          <MenuLink
            onClick={() => navigate('/admin/partners')}
            $isActive={pathname.includes('partners')}
          >
            <GroupsIcon />
            Parceiros
          </MenuLink>
          <MenuLink
            onClick={() => navigate('/admin/change-password')}
            $isActive={pathname.includes('password')}
          >
            <PasswordIcon />
            Alterar Senha
          </MenuLink>
          <MenuLink onClick={() => navigate('/')}>
            <HomeIcon />
            Ir para Home
          </MenuLink>
          <MenuLink className='unshow'></MenuLink>
          <MenuLink onClick={logout}>
            <LogoutIcon />
            Sair
          </MenuLink>
        </MenuItems>
      </ContainerContent>
    </Container>
  )
}
