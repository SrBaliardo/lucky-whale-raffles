import {
  Container,
  AboutContent,
  TitleSection,
  Title,
  Subtitle,
  Text,
  L_W,
  DealImg,
} from './styles'
import Deal from '../../assets/deal.png'
import Coding from '../../assets/c6bcd3e0db9e5d03fa06c3aef5d5ef2f.gif'

export function PrivacyPolicy() {
  const eMail = 'contato@luckywhaleraffles.com'

  return (
    <Container>
      <L_W>
        <span>LUCKY</span> WHALE
      </L_W>

      <AboutContent>
        <TitleSection>Política de Privacidade</TitleSection>
      </AboutContent>

      {/* <DealImg src={Deal} alt='high-five-image' /> */}
      <DealImg src={Coding} alt='coding-image' />
    </Container>
  )
}
