import { Container } from './styles'
import Coding from '../../../assets/coding.gif'
import Dashboard from '../../../assets/example_dashboard.png'

export function UserDashboard() {
  return (
    <Container>
      <h1>DASHBOARD</h1>
      <img src={Coding} />
    </Container>
  )
}
