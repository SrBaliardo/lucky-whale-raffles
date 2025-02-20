import { RafflesList, ButtonFilled } from '../../../../components'
import { Container, ContainerFilter, ContainerContent, Title } from './styles'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export function AdminRaffleList() {
  return (
    <Container>
      <Title>Rifas Ativas</Title>

      <ContainerFilter>
        <ContainerContent>
          <label>Ver Rifas em</label>
          <input type='text' />
        </ContainerContent>
        <ContainerContent>
          <label>Categorias</label>
          <input type='text' />
        </ContainerContent>
        <ContainerContent>
          <label>Status</label>
          <input type='text' />
        </ContainerContent>

        <ButtonFilled>
          <HighlightOffIcon />
          &nbsp;Filtros
        </ButtonFilled>
      </ContainerFilter>

      <RafflesList />
    </Container>
  )
}
