import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import {
  Form,
  Subtitle,
  ContainerContent,
  ContainerInfo,
  UploadLabel,
  ContainerImg,
  ConfirmTermsInfo,
  ContainerCheck,
  ContainerAddress,
  ContainerButtons,
} from './styles'
import { ButtonFilled } from '../../components'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import DefaultImage from '../../assets/lucky-whale-icon.png'
import DefaultImage2 from '../../assets/default-prize.png'
import SearchIcon from '@mui/icons-material/Search'

export function RaffleForm() {
  const [cepData, setCepData] = useState(false)
  const [raffleFile, setRaffleFile] = useState(null)
  const [raffleImageURL, setRaffleImageURL] = useState(DefaultImage)
  const [prizeFile, setPrizeFile] = useState(null)
  const [prizeImageURL, setPrizeImageURL] = useState(DefaultImage2)
  const [raffleDescription, setRaffleDescription] = useState('')
  const [prizeDescription, setPrizeDescription] = useState('')
  const maxLength = 1540

  const defaultTicketValue = 'R$ 10,00'

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const getDefaultDateTime = () => {
    const today = new Date()
    const year = today.getFullYear()
    const month = String(today.getMonth() + 1).padStart(2, '0')
    const day = String(today.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}T23:59`
  }

  const getMinDateTime = () => {
    const date = new Date()
    date.setDate(date.getDate() + 14)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}T23:59`
  }

  const getMaxDateTime = () => {
    const date = new Date()
    date.setDate(date.getDate() + 91)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}T23:59`
  }

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

  const validateAndFetchCEP = async (cep) => {
    if (cep.length > 8) {
      alert('CEP deve ter no máximo 8 dígitos.')
      // clearAddressFields()
      return false
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (data.erro) {
        alert('CEP não encontrado.')
        // clearAddressFields()
        return false
      }

      return data
    } catch (error) {
      alert('Erro ao buscar CEP.')
      // clearAddressFields()
      return false
    }
  }

  const checkCEP = async (event) => {
    const cep = event.target.value.replace(/\D/g, '')
    if (!cep) return

    const data = await validateAndFetchCEP(cep)
    if (data) {
      setCepData(true)
      setValue('street', data.logradouro)
      setValue('neighborhood', data.bairro)
      setValue('city', data.localidade)
      setValue('uf', data.uf)
      // alert('CEP localizado e endereço carregado!')
    }
  }

  return (
    <Form>
      <Subtitle>
        As informações a seguir definirão como vai seu RifaCard. Também pode ser
        o diferencial para o sucesso de sua campanha. Então leia com atenção,
        preencha todos os campos e lembre-se, deve ser uma ação beneficente e
        não comercial.
        <br />
        Se estiver com dúvidas, <a href='#'>clique aqui</a> e veja nosso
        passo-a-passo sobre como criar uma rifa.
      </Subtitle>

      <ContainerContent>
        <label>
          Título da rifa <span>*</span>
        </label>
        <span className='span-desc'>Dê um nome para sua campanha</span>
        <input type='text' />
      </ContainerContent>

      <ContainerContent>
        <label>
          Celular para contato <span>*</span> {/* COLOCAR MASCARA DDD */}
        </label>
        <input type='text' />
      </ContainerContent>

      <ContainerContent>
        <label>
          Descrição da Rifa <span>*</span>
        </label>
        <span className='span-desc'>
          Fale um pouco sobre o objetivo da rifa e porquê essa é uma ação
          beneficente ou sem fins lucrativos
        </span>
        <textarea
          maxLength={maxLength}
          value={raffleDescription}
          onChange={(e) => setRaffleDescription(e.target.value)}
        />
        <span className='char-counter'>
          {maxLength - raffleDescription.length}/{maxLength}
        </span>
      </ContainerContent>

      <ContainerContent>
        <label>
          Quem será o beneficiado pela rifa <span>*</span>
        </label>
        <span className='span-desc'>Pessoa ou instituição</span>
        <input type='text' />
      </ContainerContent>

      <ContainerInfo className='content-img'>
        <ContainerContent>
          <label>
            Capa da Rifa <span>*</span>
          </label>
          <span className='span-desc'>
            Coloque uma foto do organizador ou beneficiário (pessoa ou
            instituição) da rifa
          </span>
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
        <span className='span-desc'>
          Conte detalhes sobre o prêmio que está oferecendo. Se um brinde, uma
          aula, um lanche =P
        </span>
        <textarea
          maxLength={maxLength}
          value={prizeDescription}
          onChange={(e) => setPrizeDescription(e.target.value)}
        />
        <span className='char-counter'>
          {maxLength - prizeDescription.length}/{maxLength}
        </span>
      </ContainerContent>

      <ContainerInfo className='content-img'>
        <ContainerContent>
          <label>
            Foto do Prêmio <span>*</span>
          </label>
          <span className='span-desc'>
            Escolha uma foto legal que mostre bem o prêmio
          </span>
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
        <ContainerContent>
          <label>
            Data do Sorteio (horário de Brasília) <span>*</span>
          </label>
          <span className='span-desc'>
            Não pode ser inferior a 15 dias e nem superior a 90 dias
          </span>
          <input
            type='datetime-local'
            defaultValue={getDefaultDateTime()}
            min={getMinDateTime()}
            max={getMaxDateTime()}
          />
        </ContainerContent>

        <ContainerContent>
          <label>Preço do Bilhete</label>
          <span className='span-desc'>
            Este valor é padrão por bilhete
            <span className='invisible'>Este valor é padrão por bilhete</span>
          </span>
          <input
            className='read-only'
            type='text'
            value={defaultTicketValue}
            readOnly
          />
        </ContainerContent>
      </ContainerInfo>

      <Subtitle className='acc'>
        DADOS BANCÁRIOS PARA RECEBIMENTO APÓS O FIM DA CAMPANHA
      </Subtitle>

      <ContainerInfo>
        <ContainerContent>
          <label>
            Nome do titular <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>

        <ContainerContent>
          <label>
            CPF ou CNPJ do titular <span>*</span>
          </label>
          <input type='text' />
        </ContainerContent>
      </ContainerInfo>

      <ContainerInfo>
        <ContainerContent>
          <label>
            Banco <span>*</span>
          </label>
          <span className='invisible'>Nome da instituição</span>
          <input type='text' />
        </ContainerContent>

        <ContainerContent>
          <label>
            Agência <span>*</span>
          </label>
          <span className='span-desc'>sem o dígito</span>
          <input type='text' />
        </ContainerContent>
      </ContainerInfo>

      <ContainerInfo>
        <ContainerContent>
          <label>
            Número da conta <span>*</span>
          </label>
          <span className='span-desc'>sem o dígito</span>
          <input type='text' />
        </ContainerContent>

        <ContainerContent>
          <label>
            Dígito da conta <span>*</span>
          </label>
          <span className='span-desc'>somente o dígito</span>
          <input type='text' />
        </ContainerContent>
      </ContainerInfo>

      <ContainerContent>
        <label>
          Chave PIX <span>*</span>
        </label>
        <span className='span-desc'>Preferencialmente e-mail</span>
        <input type='text' />
      </ContainerContent>

      <ContainerCheck>
        <input type='checkbox' />
        <label>Conta poupança</label>
      </ContainerCheck>

      <Subtitle className='acc'>ENDEREÇO DO TÍTULAR DA CONTA BANCÁRIA</Subtitle>

      <ContainerAddress>
        <ContainerContent className='cep'>
          <label>
            CEP <span>*</span>
          </label>
          <input type='text' {...register('cep')} onBlur={checkCEP} />
        </ContainerContent>
        <ButtonFilled type='button' onClick={checkCEP}>
          <SearchIcon />
          Buscar
        </ButtonFilled>
      </ContainerAddress>

      {cepData && (
        <>
          <ContainerAddress>
            <ContainerContent>
              <label>Logradouro</label>
              <input
                type='text'
                {...register('street')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
            <ContainerContent className='number'>
              <label>Número</label>
              <input type='text' {...register('street-number')} />
            </ContainerContent>
          </ContainerAddress>
          <ContainerContent>
            <label>Complemento</label>
            <input type='text' {...register('complement')} />
          </ContainerContent>

          <ContainerAddress>
            <ContainerContent>
              <label>Bairro</label>
              <input
                type='text'
                {...register('neighborhood')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
            <ContainerContent>
              <label>Cidade</label>
              <input
                type='text'
                {...register('city')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
            <ContainerContent className='uf'>
              <label>UF</label>
              <input
                type='text'
                {...register('uf')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
          </ContainerAddress>
        </>
      )}

      <ConfirmTermsInfo>
        <ContainerCheck>
          <input type='checkbox' />
          <p>
            Confirmo que li e concordo com os{' '}
            <a href='#'>Termos de Privacidade</a> e{' '}
            <a href='/terms-of-use'>Termos de Uso</a>.
          </p>
        </ContainerCheck>

        <ContainerCheck>
          <input type='checkbox' />
          <p>
            Declaro que as informações neste formulário são verdadeiras e com
            objetivo beneficente e sem fins lucrativos.
          </p>
        </ContainerCheck>
      </ConfirmTermsInfo>

      <ContainerButtons>
        <ButtonFilled type='button'>Registrar</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
