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

export const ContainerCardRaffle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 300px;
  height: 500px;
  background: linear-gradient(-45deg, #ffffff, #b8e2f4, #6abce2, #46a2da);
  background-size: 400% 400%;
  animation: ${gradientBg} 7s linear infinite;
  border-radius: 10px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  position: relative;

  .litle {
    max-height: 60px;
    overflow: hidden;
    margin-bottom: 0;
  }
`

export const ConteinerItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  justify-content: space-around;
  background-color: #efefef;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  padding: 15px 10px 10px 10px;

  button {
    align-self: center;
    text-transform: uppercase;
    font-size: 14px;
  }
`

export const RaffleImage = styled.img`
  width: 120px;
  height: 120px;
  position: absolute;
  top: 40px;
`

export const PrizeImage = styled.img`
  width: 600px;
  max-width: 100%;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #f59705;
  margin-top: 30px;
  text-align: center;
`

export const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  width: 100%;
  line-height: 1.5;
  margin-bottom: 50px;
`

export const DrawPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  text-align: center;
  line-height: 2;

  span {
    font-weight: normal;
    color: #6c757d;
  }
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 30px;
  z-index: 1000;
`

export const LargeCard = styled.div`
  width: 80%;
  height: 90%;
  background: #ffffff;
  border-radius: 15px;
  padding-top: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  gap: 20px;
  overflow: auto;
  text-align: center;
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

  ${RaffleImage} {
    width: 100%;
    height: 100%;
    max-width: 300px;
    max-height: 300px;
    position: static;

    @media (max-width: 768px) {
      max-width: 200px;
      max-height: 200px;
    }

    @media (max-width: 430px) {
      max-width: 150px;
      max-height: 150px;
    }
  }

  .prize-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f59705;
    margin-top: 50px;

    h2 {
      margin-top: 0;
    }
  }

  .prize-image {
    width: 400px;
    height: 400px;
    position: static;
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
  }

  @media (max-width: 768px) {
    width: 100%;
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

  @media (max-width: 430px) {
    .div-countdown {
      gap: 10px;
    }

    .text {
      font-size: 17px !important;
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
