import { useNavigate } from 'react-router-dom'
import {
  Container,
  ContainerContent,
  TitleSection,
  Title,
  Description,
} from './styles'
import { ButtonFilled } from '../../components'
import { useUser } from '../../contexts/UserContext'
import { toast } from 'react-toastify'
import { useState } from 'react'

export function ForgotPassword() {
  const navigate = useNavigate()
  const { forgotPassword } = useUser()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')

  const onSubmit = async () => {
    if (fullName === '') {
      toast.warn('Informe o NOME COMPLETO')
      return
    }

    if (email === '') {
      toast.warn('Informe o E-MAIL')
      return
    }

    try {
      const data = {
        fullName,
        email,
      }

      await forgotPassword(data)

      setFullName('')
      setEmail('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <TitleSection>Esqueceu sua senha?</TitleSection>
      <ContainerContent>
        <Description>
          Informe o nome completo e o e-mail cadastrado.
          <br />
          Ao clicar no botão, a senha do usuário será resetada e por padrão será{' '}
          <b>senha123</b>.
          <br />
          Fique atento e lembre-se de alterar a senha para uma segura em
          seguida. <b>Faça login e vá em "Alterar Senha"</b>.
        </Description>

        <Title>NOME COMPLETO</Title>
        <input
          type='text'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />

        <Title>E-MAIL</Title>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <ButtonFilled type='button' onClick={onSubmit}>
          Solicitar
        </ButtonFilled>

        <div className='div'>
          <p>
            Lembrou?{' '}
            <a
              onClick={() => {
                navigate('/restricted-area')
              }}
            >
              Tente de novo
            </a>
          </p>
        </div>
      </ContainerContent>
    </Container>
  )
}
