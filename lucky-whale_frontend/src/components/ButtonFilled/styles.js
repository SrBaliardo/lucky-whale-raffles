import styled from 'styled-components'

export const ContainerButton = styled.button`
  font-size: 18px;
  font-weight: bold;
  color: ${({ $disabled }) => ($disabled ? '#bebebf' : '#ffffff')};
  background-color: ${({ $disabled }) => ($disabled ? '#e9e9e9' : '#3982b8')};
  border: 1px solid;
  border-color: ${({ $disabled }) => ($disabled ? '#bebebf' : '#3982b8')};
  padding: 10px;
  border-radius: 10px;
  width: 200px;
  height: 40px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: ${({ $disabled }) => ($disabled ? 'default' : 'pointer')};
  &&:hover {
    background-color: ${({ $disabled }) =>
      $disabled ? '#e9e9e9' : 'transparent'};
    color: ${({ $disabled }) => ($disabled ? '#bebebf' : '#3982b8')};
    border: 1px solid;
    border-color: ${({ $disabled }) => ($disabled ? '#bebebf' : '#3982b8')};
  }
`
