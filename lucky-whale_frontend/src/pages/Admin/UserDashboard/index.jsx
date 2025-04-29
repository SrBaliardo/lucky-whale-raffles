import { Container, Content, Title, Subtitle, Image } from './styles'
import BgDash from '../../../assets/background-dashboard.png'

export function UserDashboard() {
  return (
    <Container>
      <Content>
        <Title>BEM VINDO !</Title>
        <Image src={BgDash} />
        <Subtitle>
          <span>Lembre-se:</span>
          <br /> Solidariedade é uma onda que vai...e vem!
        </Subtitle>
      </Content>
    </Container>
  )
}
