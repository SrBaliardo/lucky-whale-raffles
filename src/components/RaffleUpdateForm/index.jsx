import { useEffect, useState } from 'react'
import {
  Form,
  ContainerContent,
  ContainerInfo,
  Title,
  Image,
  DrawPrice,
  Countdown,
  Description,
} from './styles'
import { ButtonFilled, ButtonBordered } from '../../components'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import ZoomOutMapIcon from '@mui/icons-material/ZoomOutMap'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import DefaultImg from '../../assets/lucky-whale-icon.png'
import DefaultImg2 from '../../assets/default-prize.png'

export function RaffleUpdateForm() {
  const [disabled, setDisabled] = useState(true)
  const [drawn, setDrawn] = useState(false)

  useEffect(() => {
    setDisabled(disabled)
  }, [])

  return (
    <Form>
      <Image src={DefaultImg} alt='beneficiary-large-image' />

      <Title>*título da rifa*</Title>

      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit
        officia itaque nesciunt? Blanditiis, vero dignissimos. Iste iure
        cupiditate laboriosam ipsum repellat ex quisquam ipsam sed tempore,
        numquam, commodi nemo! Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Deleniti sit officia itaque nesciunt? Blanditiis, vero
        dignissimos. Iste iure cupiditate laboriosam ipsum repellat ex quisquam
        ipsam sed tempore, numquam, commodi nemo! Lorem ipsum dolor sit amet
        consectetur adipisicing elit. Deleniti sit officia itaque nesciunt?
        Blanditiis, vero dignissimos. Iste iure cupiditate laboriosam ipsum
        repellat ex quisquam ipsam sed tempore, numquam, commodi nemo! Lorem
        ipsum dolor sit amet consectetur adipisicing elit. Deleniti sit officia
        itaque nesciunt? Blanditiis, vero dignissimos. Iste iure cupiditate
        laboriosam ipsum repellat ex quisquam ipsam sed tempore, numquam,
        commodi nemo!
      </Description>

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
        <ButtonBordered type='button'>-</ButtonBordered>
        <span>1</span>
        <ButtonBordered type='button'>+</ButtonBordered>
      </div>

      <ButtonBordered type='button'>
        Comprar &nbsp; <LocalActivityIcon />
      </ButtonBordered>

      <div className='prize-title'>
        <EmojiEventsIcon />
        <Title> Prêmio</Title>
      </div>

      <Description>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium
        quas nesciunt iure obcaecati facere eum non ea hic, cum officiis fugit,
        officia debitis expedita libero architecto! Itaque unde distinctio
        iusto?
      </Description>
      <Image
        className='prize-image'
        src={DefaultImg2}
        alt='prize-large-image'
      />

      <Countdown>
        Até o sorteio <span>*regressiva em dias e horas*</span>
      </Countdown>

      <ButtonFilled
        type='button'
        $disabled={disabled}
        onClick={() => setDrawn(true)}
      >
        Sortear
      </ButtonFilled>

      {drawn && (
        <ContainerInfo>
          <ContainerContent>
            <label>
              Bilhete Sorteado <span>*</span>
            </label>
            <input type='text' />
          </ContainerContent>

          <ContainerContent>
            <label>
              Ganhador <span>*</span>
            </label>
            <input type='text' />
          </ContainerContent>
        </ContainerInfo>
      )}
    </Form>
  )
}
