import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 190px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;
`

export const ContainerFilter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;

  button {
    width: 80px;
    background-color: #cf3057;
    border-color: #cf3057 !important;
    font-size: 14px;
    border-radius: 20px;
    &:hover {
      background-color: #ffffff !important;
      color: #cf3057 !important;
    }
  }

  input {
    background-color: #3982b8;
  }

  @media (max-width: 430px) {
    flex-direction: column;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  margin-bottom: 20px;
  color: #6c757d;
`
