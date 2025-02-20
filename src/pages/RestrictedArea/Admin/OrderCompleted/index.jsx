import { Container } from './styles'
import Coding from '../../../../assets/c6bcd3e0db9e5d03fa06c3aef5d5ef2f.gif'

export function OrderCompleted() {
  return (
    <Container>
      <h1>PEDIDO FINALIZADO</h1>
      <img src={Coding} />
    </Container>
  )
}
