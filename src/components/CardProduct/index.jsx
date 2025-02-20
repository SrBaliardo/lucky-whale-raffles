import { useState } from 'react'
import {
  ContainerCardProduct,
  ConteinerItems,
  Image,
  ProductName,
  Description,
  ProductPrice,
  Overlay,
  LargeCard,
} from './styles'
import { ButtonBordered } from '../../components'
import { useNavigate } from 'react-router-dom'
import LocalActivityIcon from '@mui/icons-material/LocalActivity'
import DefaultImg from '../../assets/lucky-whale-icon.png'

export function CardProduct({}) {
  const navigate = useNavigate()
  const [isLarge, setIsLarge] = useState(false)

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
      <ContainerCardProduct onClick={handleCardClick}>
        <Image src={DefaultImg} alt='product-offer-image' />
        <ConteinerItems>
          <ProductName>TÍTULO</ProductName>
          <ProductPrice>SORTEIO</ProductPrice>
          <ProductPrice>PREÇO</ProductPrice>
          <ButtonBordered onClick={handleAddToCart}>
            Comprar &nbsp; <LocalActivityIcon />
          </ButtonBordered>
        </ConteinerItems>
      </ContainerCardProduct>

      {isLarge && (
        <Overlay onClick={closeLargeCard}>
          <LargeCard onClick={(e) => e.stopPropagation()}>
            <Image src={DefaultImg} alt='product-large-image' />
            <ProductName>TÍTULO</ProductName>
            <Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              sit officia itaque nesciunt? Blanditiis, vero dignissimos. Iste
              iure cupiditate laboriosam ipsum repellat ex quisquam ipsam sed
              tempore, numquam, commodi nemo!
            </Description>
            <ProductPrice>SORTEIO</ProductPrice>
            <ProductPrice>PREÇO</ProductPrice>
            <ButtonBordered onClick={handleAddToCart}>
              Comprar &nbsp; <LocalActivityIcon />
            </ButtonBordered>
          </LargeCard>
        </Overlay>
      )}
    </>
  )
}
