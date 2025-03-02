import { Container } from './styles'
import Coding from '../../../assets/coding.gif'

export function Partners() {
  return (
    <Container>
      <h1>Parceiros Afiliados</h1>
      <img src={Coding} />
      <p>
        *lista de parceiros afiliados, cada campanha contará com seus próprios
        afiliados, porém, também haverá opção para "todos em todas".*
      </p>
    </Container>
  )
}
