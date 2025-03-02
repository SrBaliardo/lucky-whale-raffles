import { Container } from './styles'
import Coding from '../../../assets/coding.gif'

export function ManageTerritory() {
  return (
    <Container>
      <h1>Gerenciar Território</h1>
      <img src={Coding} />
      <p>
        *configuração de região de visualização, poderá definir se a campanha
        atuará somente em sua cidade, em seu estado ou em seu país.
        Escalabilidade futura prevista para raio de atuação por km ou seleção de
        cidades por estado e estados no país.*
      </p>
    </Container>
  )
}
