import styled, { keyframes } from 'styled-components'

const gradientBg = keyframes`
  0% {
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% {
    background-position: 0% 50%;
  }
  75% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`

export const Form = styled.form`
  width: 80%;
  height: 90%;
  background: #ffffff;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 90px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  gap: 20px;
  overflow: auto;
  position: relative;

  &::before {
    content: '';
    width: 100%;
    height: 200px;
    background: linear-gradient(-45deg, #ffffff, #b8e2f4, #6abce2, #46a2da);
    background-size: 400% 400%;
    animation: ${gradientBg} 15s linear infinite;
    top: 0;
    left: 0;
    position: absolute;
    z-index: -1;
  }

  input {
    width: 100%;
    height: 35px;
    border-radius: 8px;
    color: #6c757d;
    padding: 0 10px;
  }

  .form {
    background-color: #e0f5fe;
  }

  .prize-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f59705;
    margin-top: 20px;

    h2 {
      margin-top: 0;
    }
  }

  .ticket-quantity-buttons {
    display: flex;
    gap: 20px;
    margin-top: 30px;

    button {
      width: 80px;
    }
  }

  .count-ticket-quantity {
    width: 200px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 0;
      width: 40px;
    }

    span {
      color: #6c757d;
      background-color: #e0f5fe;
      width: 40px;
      height: 100%;
      text-align: center;
      align-content: center;
      border-radius: 8px;
    }
  }

  .section {
    background-color: #fafafa;
    margin-top: 20px;
  }

  .drawn-data {
    background-color: #ffffff;
    gap: 30px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`

export const RaffleImage = styled.img`
  height: 300px;
  max-width: 250px;
`

export const PrizeImage = styled.img`
  width: 600px;
  max-width: 100%;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #f59705;
  margin-top: 20px;
  text-align: center;
`

export const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  width: 100%;
  line-height: 1.5;
  margin: 20px 0 50px 0;
  text-align: center;
`

export const DrawPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #000000;

  span {
    font-weight: normal;
    color: #6c757d;
  }
`

export const Countdown = styled.div`
  font-size: 14px;
  font-weight: bold;
  color: #6c757d;
  margin: 50px 0;
  text-align: center;

  span {
    font-weight: normal;
    color: #6c757d;
    font-size: 32px;
  }

  .div-countdown {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
  }

  .countdown {
    display: flex;
    flex-direction: column;

    .count {
      font-family: 'Train One', serif;
      font-weight: 500;
      color: #01cc01;
    }

    .text {
      font-family: 'Sour Gummy', serif;
      font-size: 20px;
    }
  }

  @media (max-width: 768px) {
    .div-countdown {
      gap: 20px;
    }
  }

  @media (max-width: 768px) {
    .div-countdown {
      gap: 10px;
    }

    .text {
      font-size: 16px !important;
    }
  }
`

export const GrantSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  font-size: 28px;
  font-weight: 500;

  p {
    font-size: 14px;
    color: #6c757d;
    width: 100%;
    line-height: 1.5;
    text-align: center;
    margin-top: 20px;
    font-weight: normal;
  }
`

export const WhaleShieldImage = styled.img`
  width: 150px;
`

export const L_W = styled.span`
  font-family: 'Sour Gummy', serif;
  color: #000000 !important;

  span {
    font-family: 'Sour Gummy', serif;
    color: #01cc01;
  }
`

export const W_S = styled.span`
  font-family: 'Sour Gummy', serif;
  color: #00afef !important;

  span {
    font-family: 'Sour Gummy', serif;
    color: #000000;
  }
`

export const Section = styled.section`
  background-color: #caecf4;
  padding: 20px 20px 50px 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`
