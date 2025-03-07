import { Container, TitleSection, Title, Description, Content } from './styles'
import { ButtonFilled } from '../../../components'
import { useState } from 'react'
import { useUser } from '../../../contexts/UserContext'
import { toast } from 'react-toastify'

export function ChangePassword() {
  const { changePassword, userId } = useUser()
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmNewPassword, setConfirmNewPassword] = useState('')

  const onSubmit = async () => {
    if (fullName === '') {
      toast.warn('Informe o NOME COMPLETO')
      return
    }

    if (email === '') {
      toast.warn('Informe o E-MAIL')
      return
    }

    if (currentPassword === '') {
      toast.warn('Informe o SENHA ATUAL')
      return
    }

    if (newPassword === '') {
      toast.warn('Informe o NOVA SENHA')
      return
    }

    if (confirmNewPassword === '') {
      toast.warn('Informe o CONFIRME NOVA SENHA')
      return
    }

    if (newPassword !== confirmNewPassword) {
      toast.warn('NOVA SENHA e CONFIRME NOVA SENHA devem ser iguais')
      return
    }

    try {
      const data = {
        userId,
        currentPassword,
        newPassword,
      }

      await changePassword(data)

      setFullName('')
      setEmail('')
      setCurrentPassword('')
      setNewPassword('')
      setConfirmNewPassword('')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Container>
      <TitleSection>Alterar Senha</TitleSection>
      <Content>
        <Description>
          Conforme os dados cadastrados e informe a nova senha.
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

        <Title>SENHA ATUAL</Title>
        <input
          type='text'
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />

        <Title>NOVA SENHA</Title>
        <input
          type='text'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />

        <Title>CONFIRME NOVA SENHA</Title>
        <input
          type='text'
          value={confirmNewPassword}
          onChange={(e) => setConfirmNewPassword(e.target.value)}
        />

        <ButtonFilled type='button' onClick={onSubmit}>
          SOLICITAR
        </ButtonFilled>
      </Content>
    </Container>
  )
}
