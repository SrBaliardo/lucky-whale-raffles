import React, { useRef, useState } from 'react'
import { RafflesList, ButtonFilled, InputSelect } from '../../../components'
import { Container, ContainerFilter, ContainerContent, Title } from './styles'
import HighlightOffIcon from '@mui/icons-material/HighlightOff'

export function AdminRaffleList() {
  const [selectedCategory, setSelectedCategory] = useState()
  const [selectedStatus, setSelectedStatus] = useState()

  const menuOptionsCategory = [
    { label: 'Todas', value: '' },
    { label: 'Pets', value: 'Pets' },
    { label: 'Pessoas', value: 'Pessoas' },
    { label: 'Organizações', value: 'Organizações' },
  ]

  const menuOptionsStatus = [
    { label: 'Todas', value: '' },
    { label: 'Ativa', value: 'Ativa' },
    { label: 'Finalizada', value: 'Finalizada' },
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
      {/* <ContainerFilter>
        <div>
          <label>Categorias</label>
          <InputSelect
            options={menuOptionsCategory}
            ref={categoryRef}
            value={selectedCategory}
            onChange={(option) => {
              setSelectedCategory(option.value)
            }}
          />
        </div>

        <div>
          <label>Status</label>
          <InputSelect
            options={menuOptionsStatus}
            ref={statusRef}
            value={selectedStatus}
            onChange={(option) => {
              setSelectedStatus(option.value)
            }}
          />
        </div>

        <ButtonFilled onClick={handleResetFilters}>
          <HighlightOffIcon />
          &nbsp;Filtros
        </ButtonFilled>
      </ContainerFilter> */}

      <RafflesList
        selectedCategory={selectedCategory}
        selectedStatus={selectedStatus}
      />
    </Container>
  )
}
