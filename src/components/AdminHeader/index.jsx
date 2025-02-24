import { useNavigate, useLocation } from 'react-router-dom'
import { HeaderContainer, Logo, NavContainer, NavName, Span } from './styles'
import { MenuHamburger } from '../../components'
import BannerLogo from '../../assets/logo-lucky-whale.png'
import HomeIcon from '@mui/icons-material/Home'
import KeyIcon from '@mui/icons-material/Key'
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar'
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted'
import WidgetsIcon from '@mui/icons-material/Widgets'

export function AdminHeader() {
  const navigate = useNavigate()
  const location = useLocation()
  const pathname = location.pathname

  const menuOptions = [
    { label: 'Home', pathname: '/' },
    { label: 'Minhas Rifas', pathname: '/raffle-list' },
    { label: 'Sobre Nós', pathname: '/about' },
    { label: 'Termos de Uso', pathname: '/terms-of-use' },
    { label: 'Área Restrita', pathname: '/restricted-area' },
  ]

  return (
    <HeaderContainer>
      <Logo src={BannerLogo} alt='banner-logo-metroidburger' />

      <div className='hamburger'>
        <MenuHamburger options={menuOptions} />
      </div>
      <NavContainer>
        <NavName onClick={() => navigate('/')} $isActive={pathname === '/'}>
          <HomeIcon />
          Home
        </NavName>
        <Span>|</Span>
        <NavName
          onClick={() => navigate('/admin/dashboard')}
          $isActive={pathname === '/admin/dashboard'}
        >
          <HomeIcon />
          Dashboard
        </NavName>
        <Span>|</Span>
        <NavName
          onClick={() => navigate('/admin/raffle-list')}
          $isActive={pathname === '/admin/raffle-list'}
        >
          <FormatListBulletedIcon />
          Minhas Rifas
        </NavName>
      </NavContainer>
    </HeaderContainer>
  )
}
