import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
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
import { maskPhone } from '../../utils/phoneMask'
import PermMediaIcon from '@mui/icons-material/PermMedia'
import DefaultImage from '../../assets/lucky-whale-icon.png'
import DefaultImage2 from '../../assets/default-prize.png'
import SearchIcon from '@mui/icons-material/Search'
import { useRaffle } from '../../contexts/RaffleContext'
import { useUser } from '../../contexts/UserContext'

function fileToDataURL(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(reader.result)
    reader.onerror = () => reject(new Error('File reading failed'))
    reader.readAsDataURL(file)
  })
}

export function RaffleForm() {
  const [phone, setPhone] = useState('')
  const [cepData, setCepData] = useState(false)
  const [raffleFile, setRaffleFile] = useState(null)
  const [raffleImageURL, setRaffleImageURL] = useState(DefaultImage)
  const [prizeFile, setPrizeFile] = useState(null)
  const [prizeImageURL, setPrizeImageURL] = useState(DefaultImage2)
  const [raffleDescription, setRaffleDescription] = useState('')
  const [prizeDescription, setPrizeDescription] = useState('')
  const maxLength = 1540
  const navigate = useNavigate()
  const { createNewRaffle } = useRaffle()
  const { userId, userFullName, userEmail } = useUser()

  const ticketPrice = 'R$ 10,00'

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm()

  useEffect(() => {
    const storedPreview = sessionStorage.getItem('previewData')
    if (storedPreview) {
      const data = JSON.parse(storedPreview)
      setRaffleDescription(data.raffleDescription || '')
      setPrizeDescription(data.prizeDescription || '')
      setValue('title', data.title || '')
      setValue('beneficiary', data.beneficiary || '')
      setValue('drawDate', data.drawDate || '')
      setValue('ticketPrice', data.ticketPrice || ticketPrice)
      setValue('bankAccountName', data.bankAccountName || '')
      setValue('bankAccountId', data.bankAccountId || '')
      setValue('bankAccountInstitution', data.bankAccountInstitution || '')
      setValue('bankAccountAgency', data.bankAccountAgency || '')
      setValue('bankAccountNumber', data.bankAccountNumber || '')
      setValue('bankAccountNumberDigit', data.bankAccountNumberDigit || '')
      setValue('bankAccountKey', data.bankAccountKey || '')
      setValue('bankAccountSavings', data.bankAccountSavings || '')
      setValue('titularCep', data.titularCep || '')
      setValue('titularStreet', data.titularStreet || '')
      setValue('titularStreetNumber', data.titularStreetNumber || '')
      setValue('titularComplement', data.titularComplement || '')
      setValue('titularNeighborhood', data.titularNeighborhood || '')
      setValue('titularCity', data.titularCity || '')
      setValue('titularUf', data.titularUf || '')
      if (data.phone) setPhone(data.phone)
      if (data.raffleImageURL) setRaffleImageURL(data.raffleImageURL)
      if (data.prizeImageURL) setPrizeImageURL(data.prizeImageURL)
      if (data.titularCep) setCepData(true)
    }
  }, [setValue])

  const handleChange = (e) => {
    const formatted = maskPhone(e.target.value)
    setPhone(formatted)
  }

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

  const handleRaffleFileChange = async (event) => {
    const file = event.target.files[0]
    if (file) {
      setRaffleFile(file)
      const dataUrl = await fileToDataURL(file)
      setRaffleImageURL(dataUrl)
    }
  }

  const handlePrizeFileChange = async (event) => {
    const file = event.target.files[0]
    if (file) {
      setPrizeFile(file)
      const dataUrl = await fileToDataURL(file)
      setPrizeImageURL(dataUrl)
    }
  }

  const validateAndFetchCEP = async (cep) => {
    if (cep.length > 8) {
      alert('CEP deve ter no máximo 8 dígitos.')
      return false
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (data.erro) {
        alert('CEP não encontrado.')
        return false
      }

      return data
    } catch (error) {
      alert('Erro ao buscar CEP.')
      return false
    }
  }

  const checkCEP = async (event) => {
    const cep = event.target.value.replace(/\D/g, '')
    if (!cep) return

    const data = await validateAndFetchCEP(cep)
    if (data) {
      setCepData(true)
      setValue('titularStreet', data.logradouro)
      setValue('titularNeighborhood', data.bairro)
      setValue('titularCity', data.localidade)
      setValue('titularUf', data.uf)
    }
  }

  const calculateCountdown = (drawDateString) => {
    const targetDate = new Date(drawDateString)
    const now = new Date()
    const diff = targetDate.getTime() - now.getTime()
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds }
  }

  /*PRÉ VISUALIZAÇÃO*/
  const handlePreview = handleSubmit((data) => {
    const drawDate = data.drawDate || getDefaultDateTime()
    const countdown = calculateCountdown(drawDate)
    const previewData = {
      ...data,
      phone,
      raffleDescription,
      prizeDescription,
      raffleImageURL,
      prizeImageURL,
      drawDate,
      countdown,
    }
    sessionStorage.setItem('previewData', JSON.stringify(previewData))
    navigate('/admin/raffle-preview', { state: { previewData } })
  })

  const handleRegister = async (data) => {
    if (!data.termsPrivacy_Use || !data.termsTrueInformation) {
      alert(
        'Você deve aceitar os Termos de Privacidade e os Termos de Uso para registrar.',
      )
      return
    }
    data.bankAccountSavings = !!data.bankAccountSavings
    const drawDate = data.drawDate || getDefaultDateTime()
    const definitiveData = {
      ...data,
      phone,
      raffleDescription,
      prizeDescription,
      raffleImageURL,
      prizeImageURL,
      drawDate,
      ticketPrice: 10.0,
      termsPrivacy_Use: true,
      termsTrueInformation: true,
      userId,
    }
    try {
      await createNewRaffle(definitiveData)

      sessionStorage.removeItem('previewData')
      navigate('/admin/raffle-list')
    } catch (error) {
      console.error('Erro ao registrar rifa:', error)
      alert('Ocorreu um erro ao registrar a rifa. Tente novamente.')
    }
  }

  return (
    <Form onSubmit={handleSubmit(handleRegister)}>
      <Subtitle>
        As informações a seguir definirão como vai seu RifaCard. Também pode ser
        o diferencial para o sucesso de sua campanha. Então leia com atenção,
        preencha todos os campos e lembre-se, deve ser uma ação beneficente e
        não comercial.
        <br />
        Se estiver com dúvidas, <a href='/step-by-step'>clique aqui</a> e veja
        nosso passo-a-passo sobre como criar uma rifa.
      </Subtitle>

      <ContainerContent>
        <label>
          Título da rifa <span>*</span>
        </label>
        <span className='span-desc'>Dê um nome para sua campanha</span>
        <input type='text' {...register('title')} />
      </ContainerContent>

      <ContainerContent>
        <label>
          Celular para contato <span>*</span>
        </label>
        <input
          type='text'
          value={phone}
          onChange={handleChange}
          inputMode='numeric'
        />
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
        <input type='text' {...register('beneficiary')} />
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
          <img src={raffleImageURL} alt='raffle-image' />
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
          <img src={prizeImageURL} alt='prize-image' />
        </ContainerImg>
      </ContainerInfo>

      <ContainerInfo>
        <ContainerContent>
          <label>
            Data do Sorteio <span>*</span>
          </label>
          <span className='span-desc'>
            Não pode ser inferior a 15 dias e nem superior a 90 dias
          </span>
          <input
            type='datetime-local'
            defaultValue={getDefaultDateTime()}
            min={getMinDateTime()}
            max={getMaxDateTime()}
            {...register('drawDate')}
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
            value={ticketPrice}
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
          <input type='text' {...register('bankAccountName')} />
        </ContainerContent>

        <ContainerContent>
          <label>
            CPF ou CNPJ do titular <span>*</span>
          </label>
          <input type='text' {...register('bankAccountId')} />
        </ContainerContent>
      </ContainerInfo>

      <ContainerInfo>
        <ContainerContent>
          <label>
            Banco <span>*</span>
          </label>
          <span className='invisible'>Nome da instituição</span>
          <input type='text' {...register('bankAccountInstitution')} />
        </ContainerContent>

        <ContainerContent>
          <label>
            Agência <span>*</span>
          </label>
          <span className='span-desc'>sem o dígito</span>
          <input type='text' {...register('bankAccountAgency')} />
        </ContainerContent>
      </ContainerInfo>

      <ContainerInfo>
        <ContainerContent>
          <label>
            Número da conta <span>*</span>
          </label>
          <span className='span-desc'>sem o dígito</span>
          <input type='text' {...register('bankAccountNumber')} />
        </ContainerContent>

        <ContainerContent>
          <label>
            Dígito da conta <span>*</span>
          </label>
          <span className='span-desc'>somente o dígito</span>
          <input type='text' {...register('bankAccountNumberDigit')} />
        </ContainerContent>
      </ContainerInfo>

      <ContainerContent>
        <label>
          Chave PIX <span>*</span>
        </label>
        <span className='span-desc'>Preferencialmente e-mail</span>
        <input type='text' {...register('bankAccountKey')} />
      </ContainerContent>

      <ContainerCheck>
        <input type='checkbox' {...register('bankAccountSavings')} />
        <label>Conta poupança</label>
      </ContainerCheck>

      <Subtitle className='acc'>
        ENDEREÇO DA FATURA DO CARTÃO (deve ser o mesmo do titular)
      </Subtitle>

      <ContainerAddress>
        <ContainerContent className='cep'>
          <label>
            CEP <span>*</span>
          </label>
          <input type='text' {...register('titularCep')} onBlur={checkCEP} />
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
                {...register('titularStreet')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
            <ContainerContent className='number'>
              <label>Número</label>
              <input type='text' {...register('titularStreetNumber')} />
            </ContainerContent>
          </ContainerAddress>
          <ContainerContent>
            <label>Complemento</label>
            <input type='text' {...register('titularComplement')} />
          </ContainerContent>

          <ContainerAddress>
            <ContainerContent>
              <label>Bairro</label>
              <input
                type='text'
                {...register('titularNeighborhood')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
            <ContainerContent>
              <label>Cidade</label>
              <input
                type='text'
                {...register('titularCity')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
            <ContainerContent className='uf'>
              <label>UF</label>
              <input
                type='text'
                {...register('titularUf')}
                readOnly
                className='read-only'
              />
            </ContainerContent>
          </ContainerAddress>
        </>
      )}

      <ConfirmTermsInfo>
        <ContainerCheck>
          <input type='checkbox' {...register('termsPrivacy_Use')} />
          <p>
            Confirmo que li e concordo com os{' '}
            <a href='/privacy-policy'>Política de Privacidade</a> e{' '}
            <a href='/terms-of-use'>Termos de Uso</a>.
          </p>
        </ContainerCheck>

        <ContainerCheck>
          <input type='checkbox' {...register('termsTrueInformation')} />
          <p>
            Declaro que as informações neste formulário são verdadeiras e com
            objetivo beneficente e sem fins lucrativos.
          </p>
        </ContainerCheck>
      </ConfirmTermsInfo>

      <ContainerButtons>
        <ButtonFilled type='button' onClick={handlePreview}>
          Pré-visualização
        </ButtonFilled>
        <ButtonFilled type='submit'>Registrar</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
