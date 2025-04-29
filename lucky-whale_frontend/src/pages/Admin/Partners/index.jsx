import { Container } from './styles'
import Coding from '../../../assets/coding.gif'

export function Partners() {
  return (
    <Container>
      <h1>Parceiros Afiliados</h1>
      <img src={Coding} />
      <p>
        *lista de parceiros afiliados, cada campanha poderá ter um ou mais
        parceiros afiliados.*
      </p>
    </Container>
  )
}
