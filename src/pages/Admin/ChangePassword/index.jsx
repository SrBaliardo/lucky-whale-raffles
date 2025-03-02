import { Container, TitleSection, Title, Description, Content } from './styles'
import { ButtonFilled } from '../../../components'

export function ChangePassword() {
  const sendEmail = () => {
    alert('E-mail enviado, cheque sua caixa.')
  }

  return (
    <Container>
      <TitleSection>Alterar Senha</TitleSection>
      <Content>
        <Description>
          Ao clicar no botão, um e-mail com instruções será enviado. Cheque sua
          caixa de entrada e sua caixa de span, os provedores as vezes podem
          encaminhar para lá.
        </Description>

        <Title>E-MAIL</Title>
        <input type='text' placeholder='seuemailaqui@email.com.br' />

        <ButtonFilled type='button' onClick={sendEmail}>
          SOLICITAR
        </ButtonFilled>
      </Content>
    </Container>
  )
}
