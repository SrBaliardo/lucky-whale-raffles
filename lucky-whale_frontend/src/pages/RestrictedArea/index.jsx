import { useNavigate } from 'react-router-dom'
import { Container, ContainerContent, Title } from './styles'
import { LoginForm } from '../../components'

export function RestrictedArea() {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>Entre com os dados de acesso</Title>
      <ContainerContent>
        <LoginForm />

        <div className='div'>
          <p>
            Esqueceu a senha?{' '}
            <a
              onClick={() => {
                navigate('/forgot-password')
              }}
            >
              Clique aqui
            </a>
          </p>

          <p>
            Não tem cadastro?{' '}
            <a
              onClick={() => {
                navigate('/user-register')
              }}
            >
              Cadastre-se
            </a>
          </p>
        </div>
      </ContainerContent>
    </Container>
  )
}
