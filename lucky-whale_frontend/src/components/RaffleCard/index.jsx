import { useEffect, useState } from 'react'
import {
  ContainerCardRaffle,
  ConteinerItems,
  RaffleImage,
  PrizeImage,
  Title,
  Description,
  DrawPrice,
  Overlay,
  LargeCard,
  Countdown,
  GrantSection,
  WhaleShieldImage,
  L_W,
  W_S,
  Section,
} from './styles'
import { ButtonBordered } from '../../components'
import { useNavigate } from 'react-router-dom'
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

export function RaffleCard({ raffle }) {
  const navigate = useNavigate()
  const [isLarge, setIsLarge] = useState(false)
  const [counter, setCounter] = useState(1)
  const [ticketQuantity, setTicketQuantity] = useState(1)

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
    calculateCountdown(raffle.drawDate),
  )

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCountdown(calculateCountdown(raffle.drawDate))
    }, 1000)
    return () => clearInterval(interval)
  }, [raffle.drawDate])

  const handleIncrement = () => {
    if (counter !== 99) {
      setCounter(counter + 1)
    } else {
      return
    }
  }

  const handleDecrement = () => {
    if (counter !== 0) {
      setCounter(counter - 1)
    } else {
      return
    }
  }

  const handleCardClick = () => {
    setIsLarge(true)
  }

  const closeLargeCard = () => {
    setIsLarge(false)
  }

  const handleBuy = (quantity) => {
    setTicketQuantity(quantity)
    navigate('/payment-page', {
      state: { raffleId: raffle.id, ticketQuantity: quantity },
    })
  }

  return (
    <>
      <ContainerCardRaffle>
        <RaffleImage
          src={raffle.raffleImageURL || DefaultImg}
          alt='product-offer-image'
        />
        <ConteinerItems>
          <Title>{raffle.title}</Title>
          <Description className='litle'>
            {raffle.raffleDescription}
          </Description>
          <DrawPrice>
            Sorteio <span>{formatDate(raffle.drawDate)}</span>
            <br />
            Preço <span>R$10,00</span>
          </DrawPrice>
          <ButtonBordered onClick={handleCardClick}>
            Mais detalhes &nbsp; <ZoomOutMapIcon />
          </ButtonBordered>
        </ConteinerItems>
      </ContainerCardRaffle>

      {isLarge && (
        <Overlay onClick={closeLargeCard}>
          <LargeCard onClick={(e) => e.stopPropagation()}>
            <RaffleImage
              src={raffle.raffleImageURL || DefaultImg}
              alt='beneficiary-large-image'
            />

            <Section className='section'>
              <Title>{raffle.title}</Title>

              <Description>{raffle.raffleDescription}</Description>
            </Section>

            <DrawPrice>
              Sorteio <span>{formatDate(raffle.drawDate) || ''}</span>
              <br />
              Preço <span>R$10,00</span>
            </DrawPrice>

            <div className='ticket-quantity-buttons'>
              {[3, 5, 10].map((qty) => (
                <ButtonBordered key={qty} onClick={() => handleBuy(qty)}>
                  {qty} &nbsp; <LocalActivityIcon />
                </ButtonBordered>
              ))}
            </div>

            <div className='count-ticket-quantity'>
              <ButtonBordered onClick={handleDecrement}>-</ButtonBordered>
              <span>{counter}</span>
              <ButtonBordered onClick={handleIncrement}>+</ButtonBordered>
            </div>

            <ButtonBordered type='button' onClick={() => handleBuy(counter)}>
              Comprar &nbsp; <LocalActivityIcon />
            </ButtonBordered>

            <Section className='section'>
              <div className='prize-title'>
                <EmojiEventsIcon />
                <Title>Prêmio</Title>
              </div>

              <Description>{raffle.prizeDescription}</Description>
              <PrizeImage
                src={raffle.prizeImageURL || DefaultImg2}
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
                  Acompanhamos todo o processo de cada rifa para garantir a
                  segurança e credibilidade. O resultado das rifas e a devida
                  entrega dos prêmios aos ganhadores também são monitorados de
                  perto. Se for identificada fraude por parte do organizador ou
                  se a campanha estiver em desacordo com os Termos de Uso e
                  Privacidade, Tomamos as devidas providências e a campanha pode
                  ser cancelada e os doadores receberão de volta o valor doado.
                  Estamos em constante monitoramento para evitar fraudes e
                  garantir a segurança dos usuários.
                </p>
              </GrantSection>
            </Section>
          </LargeCard>
        </Overlay>
      )}
    </>
  )
}
