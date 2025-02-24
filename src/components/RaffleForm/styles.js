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
  width: 500px;
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

  .ticket-type {
    display: flex;
    align-items: center;
    gap: 5px;

    input {
      width: 20px;
    }
  }

  .ticket-type-ex {
    font-size: 12px;
    margin-top: -7px;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

export const ContainerTicketType = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  margin-top: -7px;
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`

export const ContainerDate = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerTicketInfo = styled.div`
  display: flex;
  gap: 20px;
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

export const UploadLabel = styled.label`
  padding: 5px 10px;
  font-weight: bold;
  display: flex;
  align-items: center;
  border: 1px dashed #3982b8;
  color: #3982b8 !important;
  border-radius: 10px;
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
