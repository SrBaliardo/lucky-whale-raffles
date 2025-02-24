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
  max-width: 100%;
  width: 1130px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: linear-gradient(-45deg, #ffffff, #b8e2f4, #6abce2, #46a2da);
  background-size: 400% 400%;
  animation: ${gradientBg} 15s linear infinite;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);
  color: #000000;

  input {
    width: 100%;
    height: 35px;
    border-radius: 5px;
    color: #6c757d;
    padding: 0 10px;
  }

  textarea {
    max-width: 100%;
    height: 75px;
    max-height: 200px;
    border-radius: 5px;
    color: #6c757d;
    padding: 10px;
  }

  .date,
  .price {
    width: 100%;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerPrice = styled.div`
  display: flex;
  gap: 20px;
  width: 225px;
  align-self: center;

  @media (max-width: 430px) {
    width: 165px;
  }
`

export const ContainerImg = styled.div`
  width: 300px !important;
  height: 300px !important;
  border: 1px dashed #e0f5fe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-height: 100%;
    max-width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 430px) {
    height: 110px !important;
  }
`

export const UploadLabel = styled.label`
  width: 300px;
  padding: 5px 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 1px dashed #3982b8;
  color: #3982b8 !important;
  border-radius: 5px;
  height: 40px;
  gap: 10px;
  cursor: pointer;
  &:hover {
    color: #ffffff !important;
    border-color: #ffffff !important;
  }

  input {
    opacity: 0;
    width: 1px;
  }
`

export const ConfirmTermsInfo = styled.div`
  display: flex;
  flex-direction: column;

  input {
    width: fit-content;
  }
`

export const ContainerCheck = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`
