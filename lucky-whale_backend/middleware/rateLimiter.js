import rateLimit from 'express-rate-limit'

export const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: 'Muitas tentativas de login. Tente novamente mais tarde.',
  headers: true,
  standardHeaders: true,
  legacyHeaders: false,
})

export const resetPasswordLimiter = rateLimit({
  windowMs: 30 * 60 * 1000,
  max: 3,
  message:
    'Muitas tentativas de redefinição de senha. Aguarde um pouco e tente novamente.',
  headers: true,
  standardHeaders: true,
  legacyHeaders: false,
})
