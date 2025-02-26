import React, { useRef } from 'react'
import { RafflesList, ButtonFilled, InputSelect } from '../../../components'
import { Container, ContainerFilter, ContainerContent, Title } from './styles'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export function AdminRaffleList() {
  const menuOptionsCategory = [
    { label: 'Todas', pathname: '' },
    { label: 'Pets', pathname: '' },
    { label: 'Pessoas', pathname: '' },
    { label: 'Organizações', pathname: '' },
  ]

  const menuOptionsStatus = [
    { label: 'Todas', pathname: '' },
    { label: 'Ativa', pathname: '' },
    { label: 'Finalizada', pathname: '' },
  ]

  const categoryRef = useRef(null)
  const statusRef = useRef(null)

  const handleResetFilters = () => {
    if (
      categoryRef.current &&
      typeof categoryRef.current.reset === 'function'
    ) {
      categoryRef.current.reset()
    }
    if (statusRef.current && typeof statusRef.current.reset === 'function') {
      statusRef.current.reset()
    }
  }

  return (
    <Container>
      <ContainerFilter>
        <div>
          <label>Categorias</label>
          <InputSelect options={menuOptionsCategory} ref={categoryRef} />
        </div>

        <div>
          <label>Status</label>
          <InputSelect options={menuOptionsStatus} ref={statusRef} />
        </div>

        <ButtonFilled onClick={handleResetFilters}>
          <HighlightOffIcon />
          &nbsp;Filtros
        </ButtonFilled>
      </ContainerFilter>

      <RafflesList />
    </Container>
  )
}
