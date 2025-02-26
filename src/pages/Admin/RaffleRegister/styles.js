import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 250px;
  background-color: #ffffff;

  @media (max-width: 1440px) {
    padding: 20px 150px;
  }

  @media (max-width: 1024px) {
    padding: 20px 100px;
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`

export const Title = styled.h1`
  width: 100%;
  color: #6c757d;
  font-size: 24px;
  padding: 10px;
  text-align: left;
  font-weight: 500;
`
