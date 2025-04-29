import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px;
  background-color: #ffffff;

  input {
    color: #6c757d;
    background-color: #e0f5fe;
    width: 100%;
    height: 35px;
    border: 1px solid #e9e9e9;
    border-radius: 8px;
    padding: 0 10px;
  }

  button {
    font-size: 16px;
    margin-top: 30px;
  }
`

export const TitleSection = styled.h1`
  color: #6c757d;
  font-size: 24px;
  padding: 10px;
  font-weight: 500;
`

export const Title = styled.h2`
  font-size: 14px;
  font-weight: bold;
  color: #f59705;
  margin-top: 20px;
`

export const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  width: 100%;
  line-height: 1.5;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
  padding: 20px;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
`
