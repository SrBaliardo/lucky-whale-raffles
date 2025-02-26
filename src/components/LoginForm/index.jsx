import { Form, Key, ContainerLoginInfo } from './styles'
import { ButtonFilled } from '../../components'
import { useNavigate } from 'react-router-dom'

export function LoginForm() {
  const navigate = useNavigate()

  return (
    <Form>
      <Key />

      <ContainerLoginInfo>
        <label>E-mail</label>
        <input type='text' placeholder='Login' />
      </ContainerLoginInfo>

      <ContainerLoginInfo>
        <label>Senha</label>
        <input type='text' placeholder='Senha' />
      </ContainerLoginInfo>

      <ButtonFilled
        type='button'
        onClick={() => navigate('/admin/raffle-list')}
      >
        Entrar
      </ButtonFilled>
    </Form>
  )
}
