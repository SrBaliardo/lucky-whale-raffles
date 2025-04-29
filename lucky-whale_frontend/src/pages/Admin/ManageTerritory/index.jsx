import { useState, useEffect } from 'react'
import {
  Container,
  TitleSection,
  ContainerContent,
  Content,
  ContainerUFs,
  Title,
  Option,
} from './styles'
import { ButtonFilled } from '../../../components'
import { useTerritory } from '../../../contexts/TerritoryContext'
import axios from 'axios'
import GlobeImg from '../../../assets/globe.png'
import { toast } from 'react-toastify'

export function ManageTerritory() {
  const { updateTerritory } = useTerritory()
  const [countryOption, setCountryOption] = useState('allCountries')
  const [stateOption, setStateOption] = useState('')
  const [selectedStates, setSelectedStates] = useState([])
  const [cityOption, setCityOption] = useState('')
  const [ufs, setUfs] = useState([])

  useEffect(() => {
    axios
      .get('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then((response) => {
        setUfs(response.data)
      })
  }, [])

  const handleStateSelection = (state) => {
    if (state === 'allStates') {
      setSelectedStates(['allStates'])
    } else {
      setSelectedStates((prev) =>
        prev.includes(state)
          ? prev.filter((s) => s !== state)
          : [...prev.filter((s) => s !== 'allStates'), state],
      )
    }
  }

  const handleSaveTerritory = async () => {
    let territoryData = { country: countryOption }

    if (countryOption === 'myCountry') {
      if (stateOption === 'myState') {
        territoryData.stateScope = 'myState'
        territoryData.cityScope =
          cityOption === 'myCity'
            ? 'myCity'
            : cityOption === '200KmRadius'
            ? '200KmRadius'
            : undefined
      } else if (stateOption === 'otherStates') {
        territoryData.stateScope = 'otherStates'
        territoryData.states = selectedStates.includes('allStates')
          ? 'allStates'
          : selectedStates
      }
    }

    try {
      // await updateTerritory(territoryData)
      toast.success('Configurações de território atualizadas com sucesso!')
      // alert('Configurações de território atualizadas com sucesso!')
    } catch (error) {
      console.error('Erro ao atualizar território:', error)
      alert('Erro ao atualizar território.')
    }
  }

  return (
    <Container>
      <TitleSection>Onde minhas rifas podem ser vistas?</TitleSection>

      <ContainerContent>
        {/* Seleção de País */}
        <Option>
          <input
            type='radio'
            value='allCountries'
            checked={countryOption === 'allCountries'}
            onChange={() => setCountryOption('allCountries')}
          />
          Qualquer Lugar com Internet
        </Option>
        <Option>
          <input
            type='radio'
            value='myCountry'
            checked={countryOption === 'myCountry'}
            onChange={() => setCountryOption('myCountry')}
          />
          Meu País
        </Option>

        {/* Se selecionar "myCountry", mostra opções de estado */}
        {countryOption === 'myCountry' && countryOption !== 'allCountries' && (
          <>
            <Title>Visibilidade no país</Title>
            <Option>
              <input
                type='radio'
                value='myState'
                checked={stateOption === 'myState'}
                onChange={() => setStateOption('myState')}
              />
              Meu Estado
            </Option>
            <Option>
              <input
                type='radio'
                value='otherStates'
                checked={stateOption === 'otherStates'}
                onChange={() => setStateOption('otherStates')}
              />
              Outros Estados
            </Option>
          </>
        )}

        {/* Se selecionar "myState", mostra opções de cidade */}
        {stateOption === 'myState' && countryOption !== 'allCountries' && (
          <>
            <Title>Visibilidade no estado</Title>
            <Option>
              <input
                type='radio'
                value='myCity'
                checked={cityOption === 'myCity'}
                onChange={() => setCityOption('myCity')}
              />
              Minha Cidade
            </Option>
            <Option>
              <input
                type='radio'
                value='200KmRadius'
                checked={cityOption === '200KmRadius'}
                onChange={() => setCityOption('200KmRadius')}
              />
              Até 200 km de mim
            </Option>
            <Option>
              <input
                type='radio'
                value='myState inteiro'
                checked={cityOption === 'myState inteiro'}
                onChange={() => setCityOption('myState inteiro')}
              />
              Meu Estado Inteiro
            </Option>
          </>
        )}

        {/* Se selecionar "otherStates", mostra a lista de estados */}
        {stateOption === 'otherStates' && countryOption !== 'allCountries' && (
          <>
            <Title>Selecione os estados</Title>
            <Option>
              <input
                type='checkbox'
                value='allStates'
                checked={selectedStates.includes('allStates')}
                onChange={() => handleStateSelection('allStates')}
              />
              Todos Estados
            </Option>
            <ContainerUFs>
              {ufs.map((state) => (
                <Option key={state.id}>
                  <input
                    type='checkbox'
                    value={state}
                    checked={selectedStates.includes(state)}
                    onChange={() => handleStateSelection(state)}
                    disabled={selectedStates.includes('allStates')}
                  />
                  {state.sigla}
                </Option>
              ))}
            </ContainerUFs>
          </>
        )}

        <Content>
          <ButtonFilled onClick={handleSaveTerritory}>Salvar</ButtonFilled>
        </Content>
        <img src={GlobeImg} />
      </ContainerContent>
    </Container>
  )
}
