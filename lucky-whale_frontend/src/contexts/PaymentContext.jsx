import { createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

const PaymentContext = createContext()

export const usePayment = () => useContext(PaymentContext)

export const PaymentProvider = ({ children }) => {
  const createPix = async ({ buyerName, buyerId, totalPrice }) => {
    try {
      const response = await api.post('/api/pix/create-payment', {
        buyerName,
        buyerId,
        totalPrice,
      })
      return response.data
    } catch (error) {
      console.error('Erro ao criar PIX:', error)
    }
  }

  const checkPaymentStatus = async (transactionId) => {
    try {
      const response = await api.get(`/api/pix/status/${transactionId}`)
      return response.data.status
    } catch (error) {
      console.error('Erro ao verificar status do pagamento:', error)
    }
  }

  const createOrderAndGenerateTickets = async (newOrderData) => {
    try {
      const response = await api.post('/api/orders/register', newOrderData)
      return response.data
    } catch (error) {
      console.error('Erro ao criar ordem e gerar tickets:', error)
    }
  }

  return (
    <PaymentContext.Provider
      value={{ createPix, checkPaymentStatus, createOrderAndGenerateTickets }}
    >
      {children}
    </PaymentContext.Provider>
  )
}
