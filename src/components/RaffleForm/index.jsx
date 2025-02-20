import { useState } from 'react'
import {
  Form,
  ContainerContent,
  ContainerDate,
  ContainerButtons,
  UploadLabel,
  ContainerTicketType,
  ContainerTicketInfo,
  ContainerInfo,
} from './styles'
import { ButtonBordered, ButtonFilled } from '../../components'
import PermMediaIcon from '@mui/icons-material/PermMedia'

export function RaffleForm() {
  const [fileName, setFileName] = useState(null)

  return (
    <Form>
      <ContainerContent>
        <label>
          Título da Rifa <span>*</span>
        </label>
        <input type='text' />
      </ContainerContent>

      <ContainerContent>
        <label>Propósito da Rifa</label>
        <input type='text' />
      </ContainerContent>

      <ContainerContent>
        <label>
          Descrição do Prêmio <span>*</span>
        </label>
        <input type='text' />
      </ContainerContent>

      <ContainerDate>
        <ContainerContent>
          <label>
            Dia do Sorteio <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>

        <ContainerContent>
          <label>
            Hora do Sorteio <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>
      </ContainerDate>

      <ContainerContent>
        <label>Local do Sorteio ou Grupo Whatsapp</label>
        <input type='text' />
      </ContainerContent>

      <ContainerInfo>
        <ContainerContent>
          <label>Foto do Prêmio</label>
          <UploadLabel>
            {fileName || (
              <>
                <PermMediaIcon />
                carregar imagem
              </>
            )}
            <input
              type='file'
              accept='image/png, image/jpeg'
              onChange={(value) => {
                setFileName(value.target.files[0]?.name)
              }}
            />
          </UploadLabel>
        </ContainerContent>

        <ContainerContent>
          <label>
            Selecione <span>*</span>
          </label>
          <ContainerTicketType>
            <label className='ticket-type' name='ticket-type'>
              Nome
              <input type='radio' name='type-ticket' value='name' />
            </label>
            <label className='ticket-type' name='ticket-type'>
              Número
              <input type='radio' name='type-ticket' value='number' />
            </label>
          </ContainerTicketType>
          <span className='ticket-type-ex'>Ex: Maria, José... ou 1,2,3...</span>
        </ContainerContent>
      </ContainerInfo>

      <ContainerTicketInfo>
        <ContainerContent>
          <label>
            Quantidade <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>

        <ContainerContent>
          <label>
            Preço <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>
      </ContainerTicketInfo>

      <ContainerButtons>
        {/* <ButtonBordered>Cancelar</ButtonBordered> */}
        <ButtonFilled>Registrar</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
