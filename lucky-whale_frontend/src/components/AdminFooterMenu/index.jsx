import { useNavigate, useLocation } from 'react-router-dom'
import { Container, ContainerContent } from './styles'
import TsunamiIcon from '@mui/icons-material/Tsunami'
import SailingIcon from '@mui/icons-material/Sailing'

export function AdminFooterMenu() {
  const navigate = useNavigate()
  const location = useLocation()

  const navHome = () => {
    location.pathname === '/'
      ? (window.location.href = '#top-home')
      : navigate('/')
  }

  return (
    <Container>
      <ContainerContent>
        <div>
          <h3>LINKS</h3>
          <ul>
            <li onClick={navHome}>Home</li>
            <li onClick={() => navigate('/raffle-list')}>Rifas</li>
            <li onClick={() => navigate('/about')}>Sobre Nós</li>
            <li onClick={() => navigate('/terms-of-use')}>Termos de Uso</li>
          </ul>
        </div>

        <div>
          <TsunamiIcon />
          <SailingIcon />
        </div>

        <div>
          <h3>ÁREA RESTRITA</h3>
          <ul>
            <li onClick={() => navigate('/raffle-list')}>Comprar Rifa</li>
            <li onClick={() => navigate('/admin/raffle-register')}>
              Criar Rifa
            </li>
            <li onClick={() => navigate('/admin/raffle-list')}>Minhas Rifas</li>
            <li onClick={() => navigate('/admin/raffle-list')}>Sortear</li>
          </ul>
        </div>
      </ContainerContent>
    </Container>
  )
}
