import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import { useUser } from '../../contexts/UserContext'
import { useRaffle } from '../../contexts/RaffleContext'
import { toast } from 'react-toastify'
import {
  Form,
  Key,
  ContainerLoginInfo,
  InputContainer,
  InputPassword,
} from './styles'
import { ButtonFilled } from '../../components'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'

export function LoginForm() {
  const [isShowPassword, setIsShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { putUserData } = useUser()
  const { getRafflesByUser } = useRaffle()
  const navigate = useNavigate()

  const toggleViewPassword = () => {
    setIsShowPassword(!isShowPassword)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      const { data } = await toast.promise(
        api.post('/api/auth/login', {
          email: email,
          password: password,
        }),
        {
          pending: '👨🏻‍💻 Verificando seus dados...',
          success: '🙋🏻‍♂️ Seja bem-vindo(a)!',
          error: '🙅🏻‍♂️ Verifique seu e-mail e senha.',
        },
      )
      putUserData(data)
      getRafflesByUser(data.userId)
      setTimeout(() => {
        navigate('/admin/dashboard')
      }, 1000)
    } catch (error) {
      console.error('Error logging in:', error)
    }
  }

  return (
    <Form onSubmit={onSubmit}>
      <Key />

      <ContainerLoginInfo>
        <label>E-mail</label>
        <input
          type='text'
          placeholder='Login'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </ContainerLoginInfo>

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

      <ButtonFilled type='submit'>Entrar</ButtonFilled>
    </Form>
  )
}
