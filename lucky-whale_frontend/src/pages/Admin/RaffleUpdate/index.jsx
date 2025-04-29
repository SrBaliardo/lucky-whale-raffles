import { Container, Title, Back } from './styles'
import { RaffleUpdateForm } from '../../../components'
import UndoIcon from '@mui/icons-material/Undo'
import { useLocation } from 'react-router-dom'

export function RaffleUpdate() {
  const location = useLocation()
  const selectedRaffle = location?.state.selectedRaffle

  return (
    <Container>
      <Back
        onClick={() => {
          window.history.back()
        }}
      >
        <UndoIcon /> &nbsp; Voltar
      </Back>

      <RaffleUpdateForm selectedRaffle={selectedRaffle} />
    </Container>
  )
}
