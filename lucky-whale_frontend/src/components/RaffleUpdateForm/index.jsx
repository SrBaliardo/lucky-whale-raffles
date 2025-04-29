import { useEffect, useState } from 'react'
import {
  Form,
  ContainerContent,
  ContainerInfo,
  Title,
  RaffleImage,
  PrizeImage,
  DrawPrice,
  Countdown,
  Description,
  GrantSection,
  WhaleShieldImage,
  L_W,
  W_S,
  Section,
} from './styles'
import { ButtonFilled, ButtonBordered } from '..'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import DefaultImg from '../../assets/lucky-whale-icon.png'
import DefaultImg2 from '../../assets/default-prize.png'
import WhaleShield from '../../assets/whale-shield.png'
import { formatDate } from '../../utils/formatDate'

function formatISODate(date) {
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const hours = String(date.getHours()).padStart(2, '0')
  const minutes = String(date.getMinutes()).padStart(2, '0')
  return `${year}-${month}-${day}T${hours}:${minutes}`
}

export function RaffleUpdateForm({ selectedRaffle }) {
  const [disabled, setDisabled] = useState(true)
  const [drawn, setDrawn] = useState(false)
  const drawDate = formatISODate(new Date(Date.now() + 24 * 60 * 60 * 1000))

  useEffect(() => {
    setDisabled(disabled)
  }, [])

  function calculateCountdown(drawDateString) {
    const targetDate = new Date(drawDateString)
    const now = new Date()
    const diff = targetDate.getTime() - now.getTime()
    if (diff <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }
    const days = Math.floor(diff / (1000 * 60 * 60 * 24))
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
    const minutes = Math.floor((diff / (1000 * 60)) % 60)
    const seconds = Math.floor((diff / 1000) % 60)
    return { days, hours, minutes, seconds }
  }

  const [currentCountdown, setCurrentCountdown] = useState(
    calculateCountdown(selectedRaffle.drawDate),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountdown(calculateCountdown(selectedRaffle.drawDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [selectedRaffle.drawDate])

  return (
    <Form>
      <RaffleImage
        src={selectedRaffle.raffleImageURL || DefaultImg}
        alt='beneficiary-large-image'
      />
      <Section className='section'>
        <Title>{selectedRaffle.title}</Title>

        <Description>{selectedRaffle.raffleDescription}</Description>
      </Section>

      <DrawPrice>
        Sorteio <span>{formatDate(selectedRaffle.drawDate) || ''}</span>
      </DrawPrice>
      <DrawPrice>
        Preço <span>R$10,00</span>
      </DrawPrice>

      <div className='ticket-quantity-buttons'>
        <ButtonBordered type='button'>
          3 &nbsp; <LocalActivityIcon />
        </ButtonBordered>
        <ButtonBordered type='button'>
          5 &nbsp; <LocalActivityIcon />
        </ButtonBordered>
        <ButtonBordered type='button'>
          10 &nbsp; <LocalActivityIcon />
        </ButtonBordered>
      </div>

      <div className='count-ticket-quantity'>
        <ButtonBordered type='button'>-</ButtonBordered>
        <span>0</span>
        <ButtonBordered type='button'>+</ButtonBordered>
      </div>

      <ButtonBordered type='button'>
        Comprar &nbsp; <LocalActivityIcon />
      </ButtonBordered>

      <Section className='section'>
        <div className='prize-title'>
          <EmojiEventsIcon />
          <Title>Prêmio</Title>
        </div>

        <Description>{selectedRaffle.prizeDescription}</Description>
        <PrizeImage
          src={selectedRaffle.prizeImageURL || DefaultImg2}
          alt='prize-large-image'
        />
      </Section>

      <Countdown>
        <div className='div-countdown'>
          <div className='countdown'>
            <span className='count'>{currentCountdown.days}</span>
            <span className='text'>dias</span>
          </div>
          <div className='countdown'>
            <span className='count'>{currentCountdown.hours}</span>
            <span className='text'>horas</span>
          </div>
          <div className='countdown'>
            <span className='count'>{currentCountdown.minutes}</span>
            <span className='text'>minutos</span>
          </div>
          <div className='countdown'>
            <span className='count'>{currentCountdown.seconds}</span>
            <span className='text'>segundos</span>
          </div>
        </div>
        <br />
        Até o sorteio
      </Countdown>

      <Section className='drawn-data'>
        <ButtonFilled
          type='button'
          $disabled={disabled}
          onClick={() => {
            setDrawn(true)
            alert('DEMO-CLICK, só vai liberar quando contador zerar')
          }}
        >
          Sortear
        </ButtonFilled>

        {drawn && (
          <ContainerInfo>
            <ContainerContent>
              <label>
                Bilhete Sorteado <span>*</span>
              </label>
              <input type='text' className='form' />
            </ContainerContent>

            <ContainerContent>
              <label>
                Ganhador <span>*</span>
              </label>
              <input type='text' className='form' />
            </ContainerContent>
          </ContainerInfo>
        )}
      </Section>

      <Section>
        <GrantSection>
          <W_S>
            <span>WHALE</span> SHIELD
          </W_S>
          <WhaleShieldImage src={WhaleShield} alt='whale-shield-image' />
          <p>
            <W_S>
              <span>WHALE</span> SHIELD
            </W_S>{' '}
            é o selo de segurança da{' '}
            <L_W>
              <span>LUCKY</span> WHALE
            </L_W>
            .
            <br />
            Acompanhamos todo o processo de cada rifa para garantir a segurança
            e credibilidade. O resultado das rifas e a devida entrega dos
            prêmios aos ganhadores também são monitorados de perto. Se for
            identificada fraude por parte do organizador ou se a campanha
            estiver em desacordo com os Termos de Uso e Privacidade, Tomamos as
            devidas providências e a campanha pode ser cancelada e os doadores
            receberão de volta o valor doado. Estamos em constante monitoramento
            para evitar fraudes e garantir a segurança dos usuários.
          </p>
        </GrantSection>
      </Section>
    </Form>
  )
}
