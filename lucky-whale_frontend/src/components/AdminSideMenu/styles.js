import styled from 'styled-components'
import BG from '../../assets/lucky-whale-waves-bg.png'

export const Container = styled.div`
  min-width: 260px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  background-color: #e9e9e9;
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 20px;
    left: 0;
    background: url(${BG}) no-repeat;
    background-size: content;
    opacity: 0.4;
    z-index: -1;
  }
`

export const ContainerContent = styled.div`
  height: 100%;
  width: 100%;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
  align-items: center;
  padding: 50px 0;

  img {
    width: 100px;
    position: relative;
    left: -10px;
  }
`

export const MenuItems = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`

export const MenuLink = styled.a`
  cursor: pointer;
  height: 40px;
  padding: 8px 8px 8px 30px;
  font-weight: 500;
  display: flex;
  align-items: end;
  gap: 5px;
  color: ${({ $isActive }) => ($isActive ? '#ffffff' : '#000000')};
  background-color: ${({ $isActive }) =>
    $isActive ? '#3982b8' : 'transparent'};

  &:hover {
    background-color: #3982b8;
    color: #ffffff;
  }

  &.unshow {
    cursor: default;
    background-color: transparent;

    &:hover {
      background-color: transparent;
    }
  }
`
