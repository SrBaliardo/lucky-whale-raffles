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
