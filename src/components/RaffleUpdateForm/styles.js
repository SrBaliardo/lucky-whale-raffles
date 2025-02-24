import styled, { keyframes } from 'styled-components'
import WavesImg from '../../assets/waves-white.png'

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
  max-width: 100%;
  width: 800px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(-45deg, #ffffff, #b8e2f4, #6abce2, #46a2da);
  background-size: 400% 400%;
  animation: ${gradientBg} 15s linear infinite;
  margin-top: 20px;
  border-radius: 10px;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);
  color: #000000;

  input {
    width: 100%;
    height: 35px;
    border-radius: 8px;
    color: #6c757d;
    padding: 0 10px;
  }

  .form {
    background-color: #e9e9e9;
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
  margin-top: 20px;
  text-align: center;
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerImg = styled.div`
  width: 80% !important;
  height: 180px !important;
  border: 1px dashed #e0f5fe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    height: auto;
    width: 100%;
  }

  @media (max-width: 430px) {
    height: 110px !important;
  }
`

export const Waves = styled.img`
  border: none;
  width: 100%;
  height: 42px;
  background: url(${WavesImg}) center;
  background-size: 300px;
  opacity: 0.3;
  margin: 25px 0 15px 0;
`
