import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 100px 230px;
  background-color: #ffffff;

  @media (max-width: 1440px) {
    padding: 20px 130px;
  }

  @media (max-width: 1024px) {
    padding: 20px 80px;
  }

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #6c757d;
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const ContainerFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 50px 20px;
  background-color: #ffffff;

  button {
    width: 80px;
    background-color: #cf3057;
    border-color: #cf3057 !important;
    font-size: 13px;
    border-radius: 20px;
    align-self: flex-end;
    &:hover {
      background-color: #ffffff !important;
      color: #cf3057 !important;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    width: 200px;
  }

  label {
    color: #6c757d;
    font-weight: bold;
  }

  input {
    background-color: #e0f5fe;
    height: 35px;
    border-radius: 8px;
    padding: 0 10px;
  }

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      align-self: center;
    }
  }
`
