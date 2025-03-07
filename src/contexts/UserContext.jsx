import React, { createContext, useContext, useState, useEffect } from 'react'
import { jwtDecode } from 'jwt-decode'
import { api } from '../services/api'
import { toast } from 'react-toastify'

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(() => {
    const savedUserData = localStorage.getItem('lucky_whale:userData')
    return savedUserData ? JSON.parse(savedUserData) : {}
  })

  const putUserData = (userInfo) => {
    setUserData(userInfo)
    localStorage.setItem('lucky_whale:userData', JSON.stringify(userInfo))
  }

  const clearUserData = () => {
    setUserData({})
    localStorage.removeItem('lucky_whale:userData')
  }

  const getUserData = () => {
    try {
      const token = userData.token
      if (token) {
        const decodedToken = jwtDecode(token)

        if (decodedToken?.id) {
          setUserData((prevUserData) => ({
            ...prevUserData,
            id: decodedToken.id,
            fullName: decodedToken.fullName,
            email: decodedToken.email,
          }))
        }
      }
    } catch (error) {
      console.error('Erro ao decodificar token:', error)
    }
  }

  useEffect(() => {
    if (userData.token) {
      getUserData()
    }
  }, [userData.token])

  const addNewUser = async (newUserData) => {
    try {
      const response = await toast.promise(
        api.post('/api/auth/register', newUserData),
        {
          pending: '👨🏻‍💻 Verificando servidor...',
          success: 'Usuário criado com sucesso!',
          error: 'Erro ao criar usuário. Tente novamente.',
        },
      )
      return response.data
    } catch (error) {
      console.error('Erro ao adicionar novo usuário:', error)
    }
  }

  const forgotPassword = async (userData) => {
    try {
      const response = await toast.promise(
        api.put('/api/auth/reset-password', userData),
        {
          pending: '👨🏻‍💻 Verificando servidor...',
          success:
            'Tudo certo! sua senha foi resetada. Não vai esquecer de novo!',
          error: 'Erro ao resetar a senha. Tente novamente.',
        },
      )
      return response.data
    } catch (error) {
      console.error('Erro ao resetar a senha:', error)
    }
  }

  const changePassword = async (userData) => {
    try {
      const response = await toast.promise(
        api.put('/api/auth/change-password', userData),
        {
          pending: '👨🏻‍💻 Verificando servidor...',
          success: 'Tudo certo! sua senha foi alterada.',
          error: 'Erro ao alterar a senha. Tente novamente.',
        },
      )
      return response.data
    } catch (error) {
      console.error('Erro ao alterar a senha:', error)
    }
  }

  return (
    <UserContext.Provider
      value={{
        putUserData,
        userData,
        clearUserData,
        userId: userData.id,
        userFullName: userData.fullName,
        userEmail: userData.email,
        userToken: userData.token,
        addNewUser,
        changePassword,
        forgotPassword,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return context
}
