import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import {
  Form,
  TItle,
  ContainerContent,
  ContainerAddress,
  ContainerPassword,
  ContainerButtons,
} from './styles'
import { ButtonFilled } from '../../components'
import SearchIcon from '@mui/icons-material/Search'

export function UserRegisterForm() {
  const [cepData, setCepData] = useState(false)
  const navigate = useNavigate()

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
    setValue('street-number', '')
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
      // alert('CEP localizado e endereço carregado!')
    }
  }

  const handleCancel = () => {
    navigate('/')
    clearAddressFields()
    setCepData(false)
  }

  return (
    <Form>
      <TItle>Dados Pessoais</TItle>

      <ContainerContent>
        <label>
          Nome Completo <span>*</span>
        </label>
        <input type='text' />
      </ContainerContent>

      <ContainerContent>
        <label>
          E-mail <span>*</span>
        </label>
        <input type='email' />
      </ContainerContent>

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
        <ContainerContent>
          <label>
            Senha <span>*</span>
          </label>
          <input type='password' />
        </ContainerContent>

        <ContainerContent>
          <label>
            Repita a Senha <span>*</span>
          </label>
          <input type='password' />
        </ContainerContent>
      </ContainerPassword>

      <ContainerButtons>
        <ButtonFilled type='button'>Cadastrar</ButtonFilled>
      </ContainerButtons>
    </Form>
  )
}
