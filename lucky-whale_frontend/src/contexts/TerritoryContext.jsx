import React, { createContext, useContext, useState } from 'react'
import { api } from '../services/api'
import { toast } from 'react-toastify'

const TerritoryContext = createContext()

export const useTerritory = () => {
  return useContext(TerritoryContext)
}

export const TerritoryProvider = ({ children }) => {
  const updateTerritory = async (territoryData) => {
    try {
      const response = await toast.promise(
        api.put('/api/territory/update', territoryData),
        {
          pending: '👨🏻‍💻 Verificando servidor...',
          success: 'Território atualizado com sucesso!',
          error: 'Erro ao atualizar território. Tente novamente.',
        },
      )
      return response.data
    } catch (error) {
      console.error('Erro ao editar território:', error)
    }
  }

  return (
    <TerritoryContext.Provider
      value={{
        updateTerritory,
      }}
    >
      {children}
    </TerritoryContext.Provider>
  )
}
