import https from 'https'
import axios from 'axios'
import fs from 'fs'
import dotenv from 'dotenv'

dotenv.config({ path: '../.env.homologacao' })

const apiProduction = 'https://pix.api.efipay.com.br'
const apiStaging = 'https://pix-h.api.efipay.com.br'

const baseURL = process.env.EFI_ENV === 'producao' ? apiProduction : apiStaging

const getToken = async () => {
  const certificado = fs.readFileSync('../' + process.env.EFI_CERTIFICADO)
  const credenciais = {
    client_id: process.env.EFI_CLIENT_ID,
    client_secret: process.env.EFI_CLIENT_SECRET,
  }
  const data = JSON.stringify({ grant_type: 'client_credentials' })
  const dataCredenciais =
    credenciais.client_id + ':' + credenciais.client_secret
  const auth = Buffer.from(dataCredenciais).toString('base64')

  const agent = new https.Agent({
    pfx: certificado,
    passphrase: '',
  })

  const config = {
    method: 'POST',
    url: baseURL + '/oauth/token',
    headers: {
      Authorization: 'Basic ' + auth,
      'Content-type': 'application/json',
    },
    httpsAgent: agent,
    data: data,
  }
  const result = await axios(config)
  return result.data
}

const createCharge = async (accessToken, chargeData) => {
  const certificado = fs.readFileSync('../' + process.env.EFI_CERTIFICADO)
  const data = JSON.stringify(chargeData)

  const agent = new https.Agent({
    pfx: certificado,
    passphrase: '',
  })

  const config = {
    method: 'POST',
    url: baseURL + '/v2/cob',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-type': 'application/json',
    },
    httpsAgent: agent,
    data: data,
  }
  const result = await axios(config)
  return result.data
}

const getLoc = async (accessToken, locID) => {
  const certificado = fs.readFileSync('../' + process.env.EFI_CERTIFICADO)

  const agent = new https.Agent({
    pfx: certificado,
    passphrase: '',
  })

  const config = {
    method: 'GET',
    url: baseURL + '/v2/loc/' + locID + '/qrcode',
    headers: {
      Authorization: 'Bearer ' + accessToken,
      'Content-type': 'application/json',
    },
    httpsAgent: agent,
  }
  const result = await axios(config)
  return result.data
}

// export const createPayment = async () => {
export const createPayment = async (req, res) => {
  const { buyerName, buyerId, totalPrice } = req.body
  console.log('CHEGUEI EM CREATE PAYMENT', buyerName, buyerId, totalPrice)
  const totalPriceString = parseFloat(totalPrice).toFixed(2)

  const chave = process.env.CHAVE_PIX
  const token = await getToken()
  const accessToken = token.access_token

  const cob = {
    calendario: {
      expiracao: 3600,
    },
    devedor: {
      cpf: buyerId,
      nome: buyerName,
    },
    valor: {
      original: totalPriceString,
    },
    chave,
    solicitacaoPagador: 'Cobrança de serviços JHAB',
  }

  console.log('VIREI COB', cob)

  const cobranca = await createCharge(accessToken, cob)
  console.log('AGORA SO COBRANÇA', cobranca)

  // const qrcode = await getLoc(accessToken, cobranca.loc.id)
  // console.log(qrcode)

  if (cobranca && cobranca.loc && cobranca.loc.id) {
    const qrcode = await getLoc(accessToken, cobranca.loc.id)
    console.log(qrcode)
    res.json(qrcode)
  } else {
    console.error('Erro: A resposta da cobrança não contém o loc.id esperado.')
    res
      .status(400)
      .json({
        error: 'Erro ao obter QR Code. A cobrança não foi criada corretamente.',
      })
  }
}
