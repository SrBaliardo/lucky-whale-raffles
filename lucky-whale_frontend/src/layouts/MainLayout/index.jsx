import { Outlet } from 'react-router-dom'
import { Container } from './styles'
import { Header, Footer, FooterMenu } from '../../components'

export function MainLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
      <FooterMenu />
      <Footer />
    </Container>
  )
}
