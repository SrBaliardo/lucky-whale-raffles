import {
  Container,
  SubContainer,
  ContainerContent,
  TitleSection,
  PaymentContent,
  PaymentMethods,
  BuyerDetails,
  ContainerRadio,
  PurchaseContainer,
  PurchaseItems,
  Title,
  Subtitle,
  Text,
  L_W,
  DealImg,
} from './styles'
import { ButtonFilled } from '../../components'
import Deal from '../../assets/deal.png'
import { useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { usePayment } from '../../contexts/PaymentContext'
import { useForm } from 'react-hook-form'

export function PaymentPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const { createPix, checkPaymentStatus, createOrderAndGenerateTickets } =
    usePayment()

  const { raffleId, ticketQuantity } = location.state || {
    raffleId: 'Indefinido',
    ticketQuantity: 1,
  }
  const totalPrice = ticketQuantity * 10.0

  const [selectedPayment, setSelectedPayment] = useState(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [qrCode, setQrCode] = useState(null)
  const [pixCode, setPixCode] = useState(null)
  const [showPayment, setShowPayment] = useState(false)
  const [paymentConfirmed, setPaymentConfirmed] = useState(false)
  const [orderId, setOrderId] = useState(null)

  const { register, handleSubmit } = useForm()

  const handlePayment = async (data) => {
    const buyerData = {
      ...data,
      raffleId,
      ticketQuantity,
      totalOrderPrice: totalPrice,
      methodPayment: selectedPayment,
    }

    if (!selectedPayment) {
      alert('Selecione um método de pagamento!')
      return
    }

    if (selectedPayment === 'pix') {
      setIsProcessing(true)

      const pixResponse = await createPix({
        buyerName: buyerData.buyerName,
        buyerId: buyerData.buyerId,
        totalPrice,
      })

      if (pixResponse) {
        console.log('PIX RESPONSE', pixResponse)
        setShowPayment(true)
        setQrCode(pixResponse.imagemQrcode)
        setPixCode(pixResponse.qrcode)
      }

      // const order = await createOrderAndGenerateTickets(buyerData)
      // if (order) {
      //   setOrderId(order.order.id)
      // }

      // const pixResponse = await createPix(buyerData)

      // if (pixResponse) {
      //   setQrCode(pixResponse.imagemQrcode)
      //   setPixCode(pixResponse.qrcode)

      //   const interval = setInterval(async () => {
      //     const status = await checkPaymentStatus(pixResponse.transactionId)
      //     if (status === 'PAID') {
      //       clearInterval(interval)
      //       setPaymentConfirmed(true)

      //       setTimeout(async () => {
      //         const orderResponse = await createOrderAndGenerateTickets({
      //           buyerName: data.buyerName,
      //           buyerEmail: data.buyerEmail,
      //           buyerPhone: data.buyerPhone,
      //           buyerId: data.buyerId,
      //           totalPrice,
      //           ticketQuantity,
      //           raffleId,
      //           methodPayment: 'pix',
      //         })

      //         if (orderResponse) {
      //           setTimeout(() => {
      //             navigate('/completed-payment', {
      //               state: { pix: pixResponse.transactionId, raffleId },
      //             })
      //           }, 2000)
      //         }
      //       }, 2000)
      //     }
      //   }, 5000)
      // }
    } else {
      alert('Método de pagamento ainda não implementado.')
    }
  }

  return (
    <Container>
      <SubContainer>
        <TitleSection>Resumo da Doação</TitleSection>

        <PaymentContent onSubmit={handleSubmit(handlePayment)}>
          {!qrCode && (
            <ContainerContent>
              <Title>Forma de Pagamento</Title>
              <PaymentMethods>
                <ContainerRadio>
                  <label>
                    <input
                      type='radio'
                      name='payment'
                      value='card'
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    Cartão
                  </label>
                </ContainerRadio>

                <ContainerRadio>
                  <label>
                    <input
                      type='radio'
                      name='payment'
                      value='pix'
                      onChange={(e) => setSelectedPayment(e.target.value)}
                    />
                    Pix
                  </label>
                </ContainerRadio>
              </PaymentMethods>

              <Title>Identificação do Comprador</Title>
              <BuyerDetails>
                <div className='break'>
                  <ContainerContent>
                    <label>E-mail</label>
                    <input type='text' {...register('buyerEmail')} />
                  </ContainerContent>

                  <ContainerContent>
                    <label>Nome Completo</label>
                    <input type='text' {...register('buyerName')} />
                  </ContainerContent>
                </div>

                <div className='break'>
                  <ContainerContent>
                    <label>Telefone</label>
                    <input type='text' {...register('buyerPhone')} />
                  </ContainerContent>

                  <ContainerContent>
                    <label>CPF</label>
                    <input type='text' {...register('buyerId')} />
                  </ContainerContent>
                </div>
              </BuyerDetails>

              <ButtonFilled type='submit' disabled={isProcessing}>
                {isProcessing ? 'Processando...' : 'FINALIZAR COMPRA'}
              </ButtonFilled>
            </ContainerContent>
          )}

          {qrCode && (
            <ContainerContent className='payment-codes'>
              <Title>Escaneie o QR Code para pagar:</Title>
              <img src={qrCode} alt='QR Code Pix' />

              <Title>Código Pix:</Title>
              <Text className='pix-code'>{pixCode}</Text>

              <Subtitle>Aguardando pagamento...</Subtitle>
            </ContainerContent>
          )}

          <hr />

          <div>
            <Title>Resumo da Compra</Title>
            <PurchaseContainer>
              <PurchaseItems>
                <Subtitle>Produto</Subtitle>
                <Subtitle> Preço</Subtitle>
              </PurchaseItems>

              <PurchaseItems>
                <Text>Rifa {raffleId}</Text>
                <Text>R$ {totalPrice.toFixed(2)}</Text>
              </PurchaseItems>

              <PurchaseItems>
                <Subtitle>Total</Subtitle>
                <Subtitle>R$ {totalPrice.toFixed(2)}</Subtitle>
              </PurchaseItems>
            </PurchaseContainer>
          </div>

          {!qrCode && (
            <ButtonFilled
              type='submit'
              className='button'
              disabled={isProcessing}
            >
              {isProcessing ? 'Processando...' : 'FINALIZAR COMPRA'}
            </ButtonFilled>
          )}
        </PaymentContent>
      </SubContainer>

      {/* <DealImg src={Deal} alt='high-five-image' /> */}
    </Container>
  )
}
