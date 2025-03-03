import { useNavigate } from 'react-router-dom'
import {
  Container,
  ContainerContent,
  TitleSection,
  Title,
  Description,
} from './styles'
import { ButtonFilled } from '../../components'

export function ForgotPassword() {
  const navigate = useNavigate()

  const sendEmail = () => {
    alert('E-mail enviado, cheque sua caixa.')
  }

  return (
    <Container>
      <TitleSection>Esqueceu sua senha?</TitleSection>
      <ContainerContent>
        <Description>
          Ao clicar no botão, um e-mail com instruções será enviado. Cheque sua
          caixa de entrada e sua caixa de spam, os provedores as vezes podem
          encaminhar para lá.
        </Description>

        <Title>E-MAIL</Title>
        <input type='text' placeholder='seuemailaqui@email.com.br' />

        <ButtonFilled type='button' onClick={sendEmail}>
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
