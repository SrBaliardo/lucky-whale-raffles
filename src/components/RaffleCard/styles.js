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
  }
`

export const Image = styled.img`
  width: 100px;
  height: 100px;
  position: absolute;
  top: 20px;
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
  margin-bottom: 50px;

  .litle {
    height: 100px;
    overflow: hidden;
  }
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
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  gap: 20px;
  overflow: auto;

  ${Image} {
    width: 200px;
    height: 200px;
    position: static;
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

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Countdown = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 50px 0;

  span {
    font-weight: normal;
    color: #6c757d;
  }
`
