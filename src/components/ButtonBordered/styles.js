import styled from 'styled-components'

export const ContainerButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: #3982b8;
  background-color: transparent;
  padding: 10px;
  border: 1px solid #3982b8;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  &&:hover {
    background-color: #3982b8;
    color: #ffffff;
  }
`
