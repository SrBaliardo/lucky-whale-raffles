import {
  Form,
  ContainerContent,
  Title,
  Description,
  ContainerInfo,
  ContainerImg,
  Waves,
  ContainerButtons,
} from './styles'
import { ButtonFilled } from '../../components'
import { useEffect, useState } from 'react'

export function RaffleUpdateForm() {
  const [disabled, setDisabled] = useState(true)

  useEffect(() => {
    setDisabled(disabled)
  }, [])

  return (
    <Form>
      <ContainerContent>
        <Title>*título da rifa*</Title>
      </ContainerContent>

      <ContainerInfo>
        <ContainerImg>
          <img />
          *foto da rifa*
        </ContainerImg>

        <ContainerContent>
          <Description>*descrição da rifa*</Description>
        </ContainerContent>
      </ContainerInfo>

      <Waves />

      <ContainerContent>
        <Title className='prize-title'>Prêmio</Title>
      </ContainerContent>

      <ContainerInfo>
        <ContainerContent>
          <Description>*descrição do prêmio*</Description>
        </ContainerContent>

        <ContainerImg>
          <img />
          *foto do prêmio*
        </ContainerImg>
      </ContainerInfo>

      <Waves />

      <ContainerButtons>
        <ButtonFilled type='button' $disabled={disabled}>
          Sortear
        </ButtonFilled>
      </ContainerButtons>

      <ContainerInfo>
        <ContainerContent>
          <label>
            Bilhete Sorteado <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>

        <ContainerContent>
          <label>
            Ganhador <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>
      </ContainerInfo>
    </Form>
  )
}
