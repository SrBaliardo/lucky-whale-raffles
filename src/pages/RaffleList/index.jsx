import { RafflesList, ButtonFilled, CardProduct } from '../../components'
import { Container, ContainerFilter, ContainerContent, Title } from './styles'

export function RaffleList() {
  return (
    <Container>
      <Title>Rifas Ativas</Title>

      <ContainerFilter>
        <ContainerContent>
          <label>Categorias</label>
          <input type='text' />
        </ContainerContent>
      </ContainerFilter>

      <CardProduct />
      {/* <RafflesList /> */}
    </Container>
  )
}
