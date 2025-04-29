import { RaffleCard, InputSelect } from '../../components'
import { Container, ContainerFilter, ContainerContent, Title } from './styles'
import { useRaffle } from '../../contexts/RaffleContext'
import { useEffect, useState } from 'react'

export function RaffleList() {
  const { listAllRaffles, allRaffles } = useRaffle()
  const [selectedCategory, setSelectedCategory] = useState('Todas')

  useEffect(() => {
    if (!allRaffles || allRaffles?.length === 0) {
      listAllRaffles()
    }
  }, [allRaffles, listAllRaffles])

  const menuOptions = [
    { label: 'Todas', value: 'Todas' },
    { label: 'Organizações', value: 'Organizações' },
    { label: 'Pessoas', value: 'Pessoas' },
    { label: 'Pets', value: 'Pets' },
  ]

  return (
    <Container>
      <Title>Rifas Ativas</Title>

      {/* <ContainerFilter>
        <div>
          <label>Categorias</label>
          <InputSelect options={menuOptions}  onChange={(value) => handleFilterChange(value, 'category')}
            value={selectedCategory} />
        </div>
      </ContainerFilter> */}

      <ContainerContent>
        {allRaffles?.length > 0 ? (
          allRaffles.map((raffle) => (
            <RaffleCard key={raffle.id} raffle={raffle} />
          ))
        ) : (
          <p>Nenhuma rifa encontrada.</p>
        )}
      </ContainerContent>
    </Container>
  )
}
