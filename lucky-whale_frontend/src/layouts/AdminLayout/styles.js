import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  display: flex;
  position: relative;

  @media (max-width: 430px) {
    flex-direction: column;
  }
`

export const DesktopMenu = styled.div`
  @media (max-width: 430px) {
    display: none;
  }
`

export const MobileMenu = styled.div`
  display: none;

  @media (max-width: 430px) {
    width: 100%;
    display: block;
    background-color: #e9e9e9;
  }
`
