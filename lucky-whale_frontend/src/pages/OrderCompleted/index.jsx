import { Container } from './styles'
import Coding from '../../assets/coding.gif'

export function OrderCompleted() {
  return (
    <Container>
      <h1>PEDIDO FINALIZADO</h1>
      <img src={Coding} />
    </Container>
  )
}
