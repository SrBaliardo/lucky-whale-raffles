import { useState } from 'react'
import {
  ContainerCardRaffle,
  ConteinerItems,
  Image,
  Title,
  Description,
  DrawPrice,
  Overlay,
  LargeCard,
} from './styles'
import { ButtonBordered } from '../../components'
import { useNavigate } from 'react-router-dom'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import DefaultImg from '../../assets/default-user.png'
import DefaultImg2 from '../../assets/default-prize.png'

export function RaffleCard({}) {
  const navigate = useNavigate()
  const [isLarge, setIsLarge] = useState(false)
  const [counter, setCounter] = useState(0)

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

  const handleAddToCart = (e) => {
    e.stopPropagation()
    navigate('/admin/order-resume')
  }

  return (
    <>
      <ContainerCardRaffle>
        <Image src={DefaultImg} alt='product-offer-image' />
        <ConteinerItems>
          <Title>*título da rifa*</Title>
          <Description className='litle'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere,
            incidunt voluptatibus dignissimos ex commodi repellendus eius
            repellat exercitationem voluptate, culpa facilis numquam eaque, nam
            cum ducimus magnam porro? Necessitatibus, ea!
          </Description>
          <DrawPrice>
            Sorteio <span>10/10/2025</span> - <span>15:30</span>
          </DrawPrice>
          <DrawPrice>
            Preço <span>R$10,00</span>
          </DrawPrice>
          <ButtonBordered onClick={handleCardClick}>
            Ver mais &nbsp; <ZoomOutMapIcon />
          </ButtonBordered>
        </ConteinerItems>
      </ContainerCardRaffle>

      {isLarge && (
        <Overlay onClick={closeLargeCard}>
          <LargeCard onClick={(e) => e.stopPropagation()}>
            <Image src={DefaultImg} alt='product-large-image' />
            <DrawPrice>
              Até o sorteio <span>*regressiva em dias e horas*</span>
            </DrawPrice>

            <Title>*título da rifa*</Title>

            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              sit officia itaque nesciunt? Blanditiis, vero dignissimos. Iste
              iure cupiditate laboriosam ipsum repellat ex quisquam ipsam sed
              tempore, numquam, commodi nemo! Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Deleniti sit officia itaque
              nesciunt? Blanditiis, vero dignissimos. Iste iure cupiditate
              laboriosam ipsum repellat ex quisquam ipsam sed tempore, numquam,
              commodi nemo! Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti sit officia itaque nesciunt? Blanditiis, vero
              dignissimos. Iste iure cupiditate laboriosam ipsum repellat ex
              quisquam ipsam sed tempore, numquam, commodi nemo! Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Deleniti sit officia
              itaque nesciunt? Blanditiis, vero dignissimos. Iste iure
              cupiditate laboriosam ipsum repellat ex quisquam ipsam sed
              tempore, numquam, commodi nemo!
            </Description>

            <div className='prize-title'>
              <EmojiEventsIcon />
              <Title> Prêmio</Title>
            </div>

            <Description>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Accusantium quas nesciunt iure obcaecati facere eum non ea hic,
              cum officiis fugit, officia debitis expedita libero architecto!
              Itaque unde distinctio iusto?
            </Description>
            <Image
              className='prize-image'
              src={DefaultImg2}
              alt='product-large-image'
            />

            <DrawPrice>
              Sorteio <span>10/10/2025</span> - <span>15:30</span>
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
              <ButtonBordered onClick={handleDecrement}>-</ButtonBordered>
              <span>{counter}</span>
              <ButtonBordered onClick={handleIncrement}>+</ButtonBordered>
            </div>

            <ButtonBordered onClick={handleAddToCart}>
              Comprar &nbsp; <LocalActivityIcon />
            </ButtonBordered>
          </LargeCard>
        </Overlay>
      )}
    </>
  )
}
