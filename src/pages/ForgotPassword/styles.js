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
  height: 100%;
  width: 500px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  padding: 40px;
  background: linear-gradient(-45deg, #ffffff, #b8e2f4, #6abce2, #46a2da);
  background-size: 400% 400%;
  animation: ${gradientBg} 15s linear infinite;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);
  gap: 10px;
  color: #6c757d;

  a {
    text-decoration: underline;
    font-weight: bold;
  }

  input {
    color: #6c757d;
    background-color: #e0f5fe;
    width: 100%;
    height: 35px;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    padding: 0 10px;
  }

  button {
    font-size: 16px;
    margin: 30px 0;
    align-self: center;
  }

  .div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
  }
`

export const TitleSection = styled.h1`
  margin-bottom: 20px;
  color: #6c757d;
  text-align: center;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #6c757d;
  margin-top: 20px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  width: 100%;
  line-height: 1.5;
`
