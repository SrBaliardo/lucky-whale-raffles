import { Container, Title, Back } from './styles'
import { RaffleUpdateForm } from '../../../../components'
import UndoIcon from '@mui/icons-material/Undo'

export function RaffleUpdate() {
  return (
    <Container>
      <Back
        onClick={() => {
          window.history.back()
        }}
      >
        <UndoIcon /> &nbsp; Voltar
      </Back>

      <RaffleUpdateForm />
    </Container>
  )
}
