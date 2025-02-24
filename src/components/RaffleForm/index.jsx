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
  ContainerImg,
  ContainerPrice,
} from './styles'
import { ButtonFilled } from '../../components'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import DefaultImage from '../../assets/default-user.png'

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
        <label>Descrição da Rifa</label>
        <input type='text' />
      </ContainerContent>

      <ContainerInfo>
        <ContainerContent>
          <label>Capa da Rifa</label>
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

        <ContainerImg>
          <img src={DefaultImage} alt='image' />
        </ContainerImg>
      </ContainerInfo>

      <ContainerContent>
        <label>
          Descrição do Prêmio <span>*</span>
        </label>
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

        <ContainerImg>
          <img src={DefaultImage} alt='image' />
        </ContainerImg>
      </ContainerInfo>

      <ContainerDate>
        <ContainerContent>
          <label>
            Dia do Sorteio <span>*</span>
          </label>
          <input type='date' />
        </ContainerContent>

        <ContainerContent>
          <label>
            Hora do Sorteio <span>*</span>
          </label>
          <input type='time' />
        </ContainerContent>
      </ContainerDate>

      <ContainerPrice>
        <ContainerContent>
          <label>
            Preço do BIlhete <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>
      </ContainerPrice>

      <ContainerButtons>
        <ButtonFilled type='button'>Registrar</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
