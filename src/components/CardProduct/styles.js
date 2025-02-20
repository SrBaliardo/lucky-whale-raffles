import styled from 'styled-components'

export const ContainerCardProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  width: 250px;
  height: 350px;
  position: relative;
  cursor: pointer;
`

export const ConteinerItems = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 85%;
  justify-content: space-around;
  background-color: #efefef;
  border-radius: 15px;
  padding: 15px;
  box-shadow: 2px 3px 3px rgba(0, 0, 0, 0.3);

  button {
    align-self: center;
  }
`

export const Image = styled.img`
  width: 70px;
  height: 70px;
  position: absolute;
  top: 15px;
`

export const ProductName = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: #f59705;
  margin-top: 15px;
`

export const ProductPrice = styled.p`
  font-size: 18px;
  font-weight: bold;
  color: #000000;
`

export const Description = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #bebebf;
`

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`

export const LargeCard = styled.div`
  width: 400px;
  height: auto;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  gap: 20px;

  ${Image} {
    width: 250px;
    height: 250px;
    position: static;
  }
`
