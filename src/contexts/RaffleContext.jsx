import React, { createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

const RaffleContext = createContext()

export const useRaffle = () => {
  return useContext(RaffleContext)
}

export const RaffleProvider = ({ children }) => {
  const [allRaffles, setAllRaffles] = useState([])
  const [rafflesByUser, setRafflesByUser] = useState([])

  const listAllRaffles = async () => {
    try {
      const response = await api.get('/api/raffles/list-raffles')
      setAllRaffles(response.data)
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    }
  }

  const createNewRaffle = async (newRaffleData) => {
    try {
      const response = await toast.promise(
        api.post('/api/raffles/register', newRaffleData),
        {
          pending: '👨🏻‍💻 Verificando servidor...',
          success: 'Rifa criada com sucesso!',
          error: 'Erro ao criar rifa. Tente novamente.',
        },
      )
      listAllRaffles()
      return response.data
    } catch (error) {
      console.error('Erro ao criar nova rifa:', error)
    }
  }

  const getRafflesByUser = async (userId) => {
    try {
      const response = await api.get(`/api/raffles/list-user-raffles/${userId}`)
      setRafflesByUser(response.data)
    } catch (error) {
      console.error('Erro ao buscar usuários:', error)
    }
  }

  return (
    <RaffleContext.Provider
      value={{
        allRaffles,
        listAllRaffles,
        createNewRaffle,
        getRafflesByUser,
        rafflesByUser,
        setRafflesByUser,
      }}
    >
      {children}
    </RaffleContext.Provider>
  )
}
