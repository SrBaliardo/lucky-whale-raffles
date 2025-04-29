import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 190px);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px;
  background-color: #ffffff;
  line-height: 1.5;

  hr {
    padding: 0.5px;
    background-color: #ffffff;
  }

  .payment-codes {
    align-items: center;

    img {
      width: 230px;
      margin: 10px 0 20px;
    }

    .pix-code {
      width: 100%;
      font-size: 12px;
      text-align: center;
      word-break: break-all;
    }
  }

  .break {
    display: flex;
    gap: 20px;

    @media (max-width: 768px) {
      flex-wrap: wrap;
      padding: 0;
    }
  }

  @media (max-width: 430px) {
    padding: 0;
  }
`

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  button {
    margin-top: 30px;
    font-size: 15px;

    @media (max-width: 430px) {
      display: none;
    }
  }
`

export const PaymentContent = styled.form`
  display: flex;
  justify-content: space-between;
  gap: 30px;
  padding: 20px;
  width: 100%;
  max-width: 1100px;
  background-color: #e0f5fe;
  border-radius: 10px;

  .button {
    width: 100%;
    margin: 30px;
    font-size: 15px;
    justify-self: center;
    display: none;

    @media (max-width: 430px) {
      display: block;
    }
  }

  @media (max-width: 430px) {
    flex-wrap: wrap;
    border-radius: 0;
  }
`

export const PaymentMethods = styled.div`
  width: 200px;
  display: flex;
  gap: 20px;
  padding: 10px 0 20px 0;
`

export const PurchaseContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
  gap: 10px;
`

export const PurchaseItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 430px) {
    gap: 60px;
  }
`

export const ContainerRadio = styled.div`
  display: flex;
  gap: 20px;
  font-size: 14px;

  label {
    display: flex;
    gap: 5px;
  }
`

export const BuyerDetails = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px 0 20px 0;
  font-size: 14px;

  input {
    height: 35px;
    width: 100%;
    border-radius: 8px;
    padding: 0 10px;
    color: #6c757d;
  }
`

export const TitleSection = styled.h1`
  color: #6c757d;
  font-size: 24px;
`

export const Title = styled.h2`
  font-size: 14px;
`

export const Subtitle = styled.h3`
  font-size: 14px;
  margin: 10px 0;
`

export const Text = styled.p``

export const DealImg = styled.img`
  width: 300px;
`

export const L_W = styled.span`
  font-family: 'Sour Gummy', serif;
  color: #000000 !important;

  span {
    font-family: 'Sour Gummy', serif;
    color: #01cc01;
  }
`
