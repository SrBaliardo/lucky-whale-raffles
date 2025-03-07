import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import {
  Container,
  Title,
  TopSection,
  TopContent,
  ContainerButtons,
  AdvantageSection,
  AdvantageContent,
  AdvantageCard,
  EBookTitle,
  EBookSection,
  EBookContainer,
  EBookContent,
  CapaEBook,
  CreateProcessTitle,
  CreateProcessSection,
  CreateProcessContent,
  CreateProcessCard,
  FAQSectionTitle,
  FAQSection,
  FAQContent,
} from './styles'
import { ButtonBordered, ButtonFilled, MergingWhale } from '../../components'
import { faqs } from './faq.jsx'
import CapaEBookImg from '../../assets/CapaE-Book_Lucky-Whale.png'
import eBookPDF from '../../assets/eBook_10-Dicas-para-uma-boa-Rifa_Lucky-Whale.pdf'
import Diversity3Icon from '@mui/icons-material/Diversity3'
import LocalAtmIcon from '@mui/icons-material/LocalAtm'
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive'
import EditNoteIcon from '@mui/icons-material/EditNote'
import CampaignIcon from '@mui/icons-material/Campaign'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import SavingsIcon from '@mui/icons-material/Savings'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export function Home() {
  const navigate = useNavigate()
  const [openFaqs, setOpenFaqs] = useState({})
  const [email, setEmail] = useState('')

  const toggleFaq = (index) => {
    setOpenFaqs((prev) => ({ ...prev, [index]: !prev[index] }))
  }

  return (
    <Container>
      <TopSection id='top-home'>
        <div className='div'>
          <MergingWhale />
        </div>

        <TopContent>
          <Title>FAÇA SUA RIFA ONLINE COM A</Title>
          <Title>
            <span className='span-title'>LUCKY</span> WHALE
          </Title>

          <p>Solidariedade é uma onda de sorte que vai...e vem!</p>

          <ContainerButtons>
            <ButtonBordered
              onClick={() => {
                navigate('/admin/raffle-register')
              }}
            >
              CRIAR RIFA
            </ButtonBordered>
            <ButtonFilled
              onClick={() => {
                navigate('/raffle-list')
              }}
            >
              COMPRAR
            </ButtonFilled>
          </ContainerButtons>
        </TopContent>
      </TopSection>

      <AdvantageSection>
        <div>
          <Title className='advantage-title'>
            Vantagens de entrar essa onda com a
          </Title>
          <Title className='advantage-title'>
            <span className='span-title'>LUCKY</span> WHALE
          </Title>
        </div>

        <AdvantageContent>
          <AdvantageCard>
            <p className='card-title'>Rede</p>
            <Diversity3Icon className='icon' />
            <p>Compartilhe como e onde puder e dê uma força.</p>
          </AdvantageCard>
          <AdvantageCard>
            <p className='card-title'>Notificação</p>
            <NotificationsActiveIcon className='icon' />
            <p>Envio de notificações com as informações de cada doação.</p>
          </AdvantageCard>
          <AdvantageCard>
            <p className='card-title'>PIX, Crédito</p>
            <LocalAtmIcon className='icon' />
            <p>Receba doações por PIX ou Cartão de Crédito.</p>
          </AdvantageCard>
        </AdvantageContent>
      </AdvantageSection>

      <EBookSection id='eBook'>
        <CapaEBook src={CapaEBookImg} alt='e-book image' />
        <EBookContainer>
          <EBookContent>
            <EBookTitle>10 Dicas para uma boa Rifa</EBookTitle>

            <p>
              Com base em pesquisas e observação de vários sites e campanhas,
              selecionamos os 10 elementos fundamentais presentes em uma rifa de
              sucesso. Vamos revelar esses segredos para você! Inscreva seu
              email e receba gratuitamente este eBook.
            </p>

            <div className='div-eBook'>
              <input
                type='email'
                placeholder='Seu e-mail aqui'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <a
                href={email ? eBookPDF : '#'}
                download
                onClick={(e) => {
                  if (!email) {
                    e.preventDefault()
                  }
                }}
              >
                <ButtonBordered>QUERO O EBOOK</ButtonBordered>
              </a>
            </div>
          </EBookContent>
        </EBookContainer>
      </EBookSection>

      <CreateProcessSection>
        <div className='create-process-content'>
          <CreateProcessTitle>Arrecadar com a</CreateProcessTitle>
          <CreateProcessTitle>
            <span className='span-title'>LUCKY</span> WHALE
          </CreateProcessTitle>
          <CreateProcessTitle>é fácil</CreateProcessTitle>
        </div>

        <CreateProcessContent>
          <CreateProcessCard>
            <EditNoteIcon className='icon' />
            <p className='card-title'>&#8779; Crie</p>
            <p>
              Informe dados sobre sua campanha. Diga em poucas palavras qual é o
              objetivo, brinde e quando será o sorteio.
            </p>
          </CreateProcessCard>
          <CreateProcessCard>
            <CampaignIcon className='icon' />
            <p className='card-title'>&#8779; Divulgue</p>
            <p>
              Compartilhe em suas redes sociais e com seus amigos. Peça para
              eles compartilharem também. Faça espalhar.
            </p>
          </CreateProcessCard>
          <CreateProcessCard>
            <LocalActivityIcon className='icon' />
            <p className='card-title'>&#8779; Sorteie</p>
            <p>
              Realize o sorteio de forma eletrônica. Você poderá sortear
              manualmente. Transmita o sorteio pelas redes sociais ou grupo de
              Whatsapp.
            </p>
          </CreateProcessCard>
          <CreateProcessCard>
            <SavingsIcon className='icon' />
            <p className='card-title'>&#8779; Receba</p>
            <p>
              Receba o valor arrecadado em sua conta bancária após o "sortudo"
              acusar o recebimento do brinde oferecido.
            </p>
          </CreateProcessCard>
        </CreateProcessContent>
      </CreateProcessSection>

      <ContainerButtons className='second-container-buttons'>
        <ButtonBordered
          className='bordered'
          onClick={() => {
            navigate('/admin/raffle-register')
          }}
        >
          CRIAR RIFA
        </ButtonBordered>
        <ButtonFilled
          className='filled'
          onClick={() => {
            navigate('/raffle-list')
          }}
        >
          COMPRAR RIFA
        </ButtonFilled>
      </ContainerButtons>

      <FAQSection>
        <FAQSectionTitle>
          <span className='faq-title1'>?</span> Perguntas Frequentes{' '}
          <span className='faq-title2'>?</span>
        </FAQSectionTitle>

        <FAQContent>
          {faqs.map((faq, index) => (
            <div className='faq' key={index}>
              <p className='faq-question' onClick={() => toggleFaq(index)}>
                {faq.question}{' '}
                <span>
                  {openFaqs[index] ? (
                    <ExpandLessIcon className='span' />
                  ) : (
                    <ExpandMoreIcon className='span' />
                  )}
                </span>
              </p>

              <div
                className={`faq-answer ${openFaqs[index] ? 'open' : ''}`}
                dangerouslySetInnerHTML={{ __html: faq.answer }}
              />
            </div>
          ))}
        </FAQContent>
      </FAQSection>
    </Container>
  )
}
