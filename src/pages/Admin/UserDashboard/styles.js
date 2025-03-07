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
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 40px;
  background: linear-gradient(-45deg, #ffffff, #b8e2f4, #6abce2, #46a2da);
  background-size: 400% 400%;
  animation: ${gradientBg} 15s linear infinite;
`

export const Title = styled.h1`
  color: #3982b8;
`

export const Subtitle = styled.h2`
  font-size: 28px;
  color: #b8e2f4;
  text-align: center;

  span {
    font-size: 14px;
    color: #b8e2f4;
  }
`

export const Image = styled.img`
  width: 100%;
  max-width: 600px;
`
