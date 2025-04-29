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

export const Container = styled.div`
  min-height: calc(100vh - 190px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`

export const ContainerContent = styled.div`
  height: 450px;
  width: 500px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background: linear-gradient(-45deg, #ffffff, #b8e2f4, #6abce2, #46a2da);
  background-size: 400% 400%;
  animation: ${gradientBg} 15s linear infinite;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);
  gap: 20px;
  color: #6c757d;

  a {
    text-decoration: underline;
    font-weight: bold;
  }

  .div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 20px;
    font-size: 12px;

    @media (max-width: 430px) {
     flex-wrap: wrap;
     justify-content: center;
    }
  }
`

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #6c757d;
  text-align: center;
`
