import { RaffleCard, InputSelect } from '../../components'
import { Container, ContainerFilter, ContainerContent, Title } from './styles'

export function RaffleList() {
  const menuOptions = [
    { label: 'Todas', pathname: '' },
    { label: 'Pets', pathname: '' },
    { label: 'Pessoas', pathname: '' },
    { label: 'Organizações', pathname: '' },
  ]

  return (
    <Container>
      <Title>Rifas Ativas</Title>

      <ContainerFilter>
        <div>
          <label>Categorias</label>
          <InputSelect options={menuOptions} />
        </div>
      </ContainerFilter>

      <ContainerContent>
        <RaffleCard />
        <RaffleCard />
        <RaffleCard />
        <RaffleCard />
        <RaffleCard />
      </ContainerContent>
    </Container>
  )
}
