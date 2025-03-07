import styled from 'styled-components'

export const Form = styled.form`
  max-width: 100%;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  background: transparent;
  border-radius: 10px;
  color: #000000;

  input {
    width: 100%;
    height: 35px;
    border-radius: 8px;
    color: #6c757d;
    padding: 0 10px;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

export const Sub = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;

  @media (max-width: 430px) {
    flex-direction: column;

    .born {
      width: 165px;
    }
  }
`

export const ContainerButtons = styled.div`
  align-self: center;
  margin-top: 30px;
`

export const ContainerPassword = styled.div`
  display: flex;
  gap: 20px;
`

export const ContainerAddress = styled.div`
  display: flex;
  gap: 20px;

  button {
    align-self: flex-end;
  }

  .number {
    width: 80px;
  }

  .uf {
    width: 110px;
  }
`

export const TItle = styled.h2`
  margin-bottom: 20px;
  font-size: 24px !important;
  text-align: center;
  font-weight: 500;
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    height: 35px;
    width: 100%;
    border-radius: 0;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 0 10px;
    color: #6c757d;
  }
`

export const InputPassword = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;

  input {
    color: #6c757d;
    width: 100%;
  }

  button {
    margin: 0;
    padding: 5px 10px 0 0;
    color: #6c757d;
    height: 35px;
    background-color: #ffffff;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }
`
