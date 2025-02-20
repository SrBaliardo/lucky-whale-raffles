import { Form, Key, ContainerLoginInfo } from './styles'
import { ButtonFilled } from '../../components'

export function LoginForm() {
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

      <ButtonFilled>Entrar</ButtonFilled>
    </Form>
  )
}
