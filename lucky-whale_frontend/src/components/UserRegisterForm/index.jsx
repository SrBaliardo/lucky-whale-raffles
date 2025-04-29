import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Form,
  TItle,
  ContainerContent,
  Sub,
  ContainerAddress,
  ContainerPassword,
  ContainerButtons,
  InputContainer,
  InputPassword,
} from './styles'
import { ButtonFilled } from '../../components'
import SearchIcon from '@mui/icons-material/Search'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { useUser } from '../../contexts/UserContext'

export function UserRegisterForm() {
  const [cepData, setCepData] = useState(false)
  const navigate = useNavigate()
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const { addNewUser } = useUser()

  const toggleViewPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const toggleViewConfirmPassword = () => {
    setIsShowConfirmPassword(!isShowConfirmPassword)
  }

  useEffect(() => {
    clearAddressFields()
    setCepData(false)
  }, [])

  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const validateAndFetchCEP = async (cep) => {
    if (cep.length > 8) {
      alert('CEP deve ter no máximo 8 dígitos.')
      clearAddressFields()
      return false
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`)
      const data = await response.json()

      if (data.erro) {
        alert('CEP não encontrado.')
        clearAddressFields()
        return false
      }

      return data
    } catch (error) {
      alert('Erro ao buscar CEP.')
      clearAddressFields()
      return false
    }
  }

  const clearAddressFields = () => {
    setValue('cep', '')
    setValue('street', '')
    setValue('streetNumber', '')
    setValue('complement', '')
    setValue('neighborhood', '')
    setValue('city', '')
    setValue('uf', '')
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
    }
  }

  const onSubmit = async (data) => {
    try {
      if (password !== confirmPassword) {
        alert('as senhas devem ser iguais')
        return
      }

      const birthDate = new Date(data.birthDate)
      const today = new Date()
      let age = today.getFullYear() - birthDate.getFullYear()
      const monthDiff = today.getMonth() - birthDate.getMonth()
      if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
      ) {
        age--
      }

      if (age < 18) {
        alert('deve ser maior do que 18 anos para criar conta')
        return
      }

      const definitiveData = {
        ...data,
        password,
      }

      await addNewUser(definitiveData)
    } catch (error) {
      console.error(error)
    }
    setTimeout(() => {
      navigate('/restricted-area')
    }, 1000)
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <TItle>Dados Pessoais</TItle>

      <ContainerContent>
        <label>
          Nome Completo <span>*</span>
        </label>
        <input type='text' {...register('fullName', { required: true })} />
      </ContainerContent>

      <Sub>
        <ContainerContent>
          <label>
            E-mail <span>*</span>
          </label>
          <input type='email' {...register('email', { required: true })} />
        </ContainerContent>

        <ContainerContent className='born'>
          <label>
            Data de Nascimento <span>*</span>
          </label>
          <input type='date' {...register('birthDate', { required: true })} />
        </ContainerContent>
      </Sub>

      <ContainerAddress>
        <ContainerContent>
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
              <input type='text' {...register('street')} readOnly />
            </ContainerContent>
            <ContainerContent className='number'>
              <label>Número</label>
              <input type='text' {...register('streetNumber')} />
            </ContainerContent>
          </ContainerAddress>
          <ContainerContent>
            <label>Complemento</label>
            <input type='text' {...register('complement')} />
          </ContainerContent>

          <ContainerAddress>
            <ContainerContent>
              <label>Bairro</label>
              <input type='text' {...register('neighborhood')} readOnly />
            </ContainerContent>
            <ContainerContent>
              <label>Cidade</label>
              <input type='text' {...register('city')} readOnly />
            </ContainerContent>
            <ContainerContent className='uf'>
              <label>UF</label>
              <input type='text' {...register('uf')} readOnly />
            </ContainerContent>
          </ContainerAddress>
        </>
      )}

      <ContainerPassword>
        <InputContainer>
          <label>Senha</label>
          <InputPassword>
            <input
              type={isShowPassword ? 'text' : 'password'}
              placeholder='*******'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button type='button' onClick={toggleViewPassword}>
              {isShowPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </button>
          </InputPassword>
        </InputContainer>

        <InputContainer>
          <label> Repita a Senha</label>
          <InputPassword>
            <input
              type={isShowConfirmPassword ? 'text' : 'password'}
              placeholder='*******'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button type='button' onClick={toggleViewConfirmPassword}>
              {isShowConfirmPassword ? (
                <VisibilityOffIcon />
              ) : (
                <VisibilityIcon />
              )}
            </button>
          </InputPassword>
        </InputContainer>
      </ContainerPassword>

      <ContainerButtons>
        <ButtonFilled type='submit'>Cadastrar</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
