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
  padding: 20px 20px 50px 20px;
  background-color: #ffffff;

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
`

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 50px;
  align-items: center;
  justify-items: center;

  @media (max-width: 1280px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Title = styled.h1`
  width: 74.5%;
  text-align: center;
  margin: 30px 20px 50px 20px;
  background-color: #e0f5fe;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 40px;
  border-bottom-right-radius: 40px;
  padding: 5px;

  @media (max-width: 768px) {
    width: 92%;
  }

  @media (max-width: 430px) {
    width: 85%;
  }
`
