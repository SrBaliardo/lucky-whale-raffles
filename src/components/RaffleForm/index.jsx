import { useState } from 'react'
import {
  Form,
  ContainerContent,
  ContainerInfo,
  UploadLabel,
  ContainerImg,
  ContainerPrice,
  ConfirmTermsInfo,
  ContainerCheck,
  ContainerButtons,
} from './styles'
import { ButtonFilled } from '../../components'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import DefaultImage from '../../assets/default-user.png'
import DefaultImage2 from '../../assets/default-prize.png'

export function RaffleForm() {
  const [raffleFile, setRaffleFile] = useState(null)
  const [raffleImageURL, setRaffleImageURL] = useState(DefaultImage)
  const [prizeFile, setPrizeFile] = useState(null)
  const [prizeImageURL, setPrizeImageURL] = useState(DefaultImage2)

  const handleRaffleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setRaffleFile(file)
      setRaffleImageURL(URL.createObjectURL(file))
    }
  }

  const handlePrizeFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      setPrizeFile(file)
      setPrizeImageURL(URL.createObjectURL(file))
    }
  }

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
        <textarea type='text' maxLength={1540} />
      </ContainerContent>

      <ContainerInfo>
        <ContainerContent>
          <label>Capa da Rifa</label>
          <UploadLabel>
            <>
              <PermMediaIcon />
              carregar imagem
            </>

            <input
              type='file'
              accept='image/png, image/jpeg'
              onChange={handleRaffleFileChange}
            />
          </UploadLabel>
        </ContainerContent>

        <ContainerImg>
          <img src={raffleImageURL} alt='image' />
        </ContainerImg>
      </ContainerInfo>

      <ContainerContent>
        <label>
          Descrição do Prêmio <span>*</span>
        </label>
        <textarea type='text' maxLength={1540} />
      </ContainerContent>

      <ContainerInfo>
        <ContainerContent>
          <label>Foto do Prêmio</label>
          <UploadLabel>
            <>
              <PermMediaIcon />
              carregar imagem
            </>

            <input
              type='file'
              accept='image/png, image/jpeg'
              onChange={handlePrizeFileChange}
            />
          </UploadLabel>
        </ContainerContent>

        <ContainerImg>
          <img src={prizeImageURL} alt='image' />
        </ContainerImg>
      </ContainerInfo>

      <ContainerInfo>
        <ContainerContent className='date'>
          <label>
            Dia do Sorteio <span>*</span>
          </label>
          <input type='date' />
        </ContainerContent>

        <ContainerContent className='date'>
          <label>
            Hora do Sorteio <span>*</span>
          </label>
          <input type='time' />
        </ContainerContent>

        <ContainerContent className='price'>
          <label>
            Preço do BIlhete <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>
      </ContainerInfo>

      <ContainerPrice></ContainerPrice>
      <ConfirmTermsInfo>
        <ContainerCheck>
          <input type='checkbox' />
          <p>
            Confirmo que li e concordo com os{' '}
            <a href='#'>Termos de Privacidade</a> e{' '}
            <a href='#'>Termos de Uso</a>.
          </p>
        </ContainerCheck>

        <ContainerCheck>
          <input type='checkbox' />
          <p>Declaro que as informações neste formulário são verdadeiras.</p>
        </ContainerCheck>
      </ConfirmTermsInfo>

      <ContainerButtons>
        <ButtonFilled type='button'>Registrar</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
