import { Container, Title, Back } from './styles'
import { RafflePreviewForm } from '../../../components'
import UndoIcon from '@mui/icons-material/Undo'
import { useLocation } from 'react-router-dom'
import { useEffect } from 'react'

export function RafflePreview() {
  const location = useLocation()
  const previewData =
    location.state?.previewData ||
    JSON.parse(sessionStorage.getItem('previewData'))

  useEffect(() => {
    console.log('Preview Data:', previewData)
  }, [previewData])

  return (
    <Container>
      <Back
        onClick={() => {
          window.history.back()
        }}
      >
        <UndoIcon /> &nbsp; Voltar
      </Back>

      <RafflePreviewForm previewData={previewData} />
    </Container>
  )
}
