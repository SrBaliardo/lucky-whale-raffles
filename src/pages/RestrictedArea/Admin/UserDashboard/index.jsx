import { Container } from './styles'
import Coding from '../../../../assets/c6bcd3e0db9e5d03fa06c3aef5d5ef2f.gif'
import Dashboard from '../../../../assets/example_dashboard.png'

export function UserDashboard() {
  return (
    <Container>
      <h1>DASHBOARD</h1>
      <img src={Dashboard} />
    </Container>
  )
}
