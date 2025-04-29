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
  line-height: 1.5;
  font-size: 14px;

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
    line-height: 1.5;
  }

  .read-only {
    background-color: #e0e0e0;
    cursor: default;
  }

  .acc {
    font-size: 16px;
    font-weight: 500;
    padding-left: 0;
  }

  .content-img {
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
  }

  .char-counter {
    text-align: right;
    color: #6c757d;
    font-size: 11px;
  }
`

export const Subtitle = styled.h2`
  margin-top: 20px;
  color: #6c757d;
  font-size: 14px;
  font-weight: 400;
  padding: 10px;
`

export const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: #000000;

  .span-desc {
    color: #6c757d;
    font-size: 12px;
    font-weight: 500;
  }

  .invisible {
    visibility: hidden;
  }
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: 20px;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

export const ContainerImg = styled.div`
  width: 100%;
  max-width: 300px;
  border: 1px dashed #e0f5fe;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    width: 200px;
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
  margin-top: 20px;
`

export const ContainerCheck = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  input {
    width: fit-content;
  }
`
export const ContainerAddress = styled.div`
  display: flex;
  gap: 20px;

  button {
    align-self: flex-end;
    width: 100px;
    height: 35px;
    font-size: 16px;
  }

  .cep {
    width: 250px;
  }

  .number {
    width: 80px;
  }

  .uf {
    width: 110px;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;
`
