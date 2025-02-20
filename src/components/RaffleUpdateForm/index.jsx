import {
  Form,
  ContainerContent,
  ContainerInfo,
  ContainerButtons,
} from './styles'
import { ButtonFilled } from '../../components'

export function RaffleUpdateForm() {
  return (
    <Form>
      <ContainerContent>
        <label>
          Título da Rifa <span>*</span>
        </label>
        <input type='text' />
      </ContainerContent>

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
      <ContainerButtons>
        <ButtonFilled>Sortear</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
