import { useNavigate } from 'react-router-dom'
import { Container, ContainerContent, Title } from './styles'
import { UserRegisterForm } from '../../components'

export function RegisterAdmin() {
  const navigate = useNavigate()

  return (
    <Container>
      <Title>Novo Cadastro</Title>
      <ContainerContent>
        <UserRegisterForm />

        <p>
          Já tem cadastro?{' '}
          <a
            onClick={() => {
              navigate('/restricted-area')
            }}
          >
            Entrar
          </a>
        </p>
      </ContainerContent>
    </Container>
  )
}
