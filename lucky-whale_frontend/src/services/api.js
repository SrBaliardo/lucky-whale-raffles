import axios from 'axios'

const isTokenExpired = (token) => {
  if (!token) return true

  try {
    const decodedToken = JSON.parse(atob(token.split('.')[1]))
    const exp = decodedToken.exp * 1000
    const now = Date.now()

    return now > exp
  } catch (error) {
    console.error('Error decoding token:', error)
    return true
  }
}

export const api = axios.create({
  baseURL: 'http://localhost:3000',
})

// export const api = axios.create({
//   baseURL: 'https://neon.tech',
// })

api.interceptors.request.use(
  async (config) => {
    try {
      const userData = localStorage.getItem('lucky_whale:userData')
      if (userData) {
        const token = JSON.parse(userData).token

        if (token) {
          if (isTokenExpired(token)) {
            localStorage.removeItem('lucky_whale:userData')
            window.location.href = '/'
            return Promise.reject(
              new Error('Token expirado. Redirecionando para login.'),
            )
          }

          config.headers.authorization = `Bearer ${token}`
        }
      }
    } catch (error) {
      console.error('Error reading userData from localStorage:', error)
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  },
)
