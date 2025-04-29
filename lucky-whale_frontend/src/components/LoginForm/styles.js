import styled from 'styled-components'
import KeyIcon from '@mui/icons-material/Key'

export const Form = styled.form`
  height: 450px;
  width: 500px;
  max-width: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  gap: 20px;
  color: #000000;

  label {
    padding-left: 3px;
  }

  button {
    margin-top: 20px;
  }
`

export const Key = styled(KeyIcon)`
  font-size: 50px !important;
  color: #6c757d;
`

export const ContainerLoginInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    height: 35px;
    width: 100%;
    border-radius: 8px;
    padding: 0 10px;
    color: #6c757d;
  }
`

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    height: 35px;
    width: 100%;
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
