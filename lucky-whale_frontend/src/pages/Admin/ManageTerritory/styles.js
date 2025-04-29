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

  img {
    width: 100px;
  }

  p {
    color: #6c757d;
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
  width: 100%;
  text-align: left;
`

export const Title = styled.h3`
  color: #ff8c05;
  font-size: 20px;
  font-weight: 500;
  margin-top: 20px;
`

export const Option = styled.label`
  font-size: 16px;
  cursor: pointer;
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  position: relative;
  z-index: 1;

  input {
    margin-right: 5px;
  }

  img {
    width: 200px;
    position: absolute;
    opacity: 0.15;
    bottom: 20px;
    right: 20px;
    z-index: -1;
  }
`

export const Content = styled.div`
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
`

export const ContainerUFs = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: fit-content;
  gap: 15px;
`
