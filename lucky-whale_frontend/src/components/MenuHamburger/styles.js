import styled, { css, keyframes } from 'styled-components'

const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`

export const MenuContainer = styled.div`
  padding-bottom: 30px;
`

export const Hamburger = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  width: 40px;
  height: 50px;

  div {
    width: 100%;
    height: 4px;
    background-color: #fff;
    border-radius: 7px;
    margin: 4px 0;
    transition: all 0.3s ease;

    &:nth-child(1) {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(45deg) translate(8px, 8px)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
    }
    &:nth-child(3) {
      transform: ${({ $isOpen }) =>
        $isOpen ? 'rotate(-45deg) translate(8px, -8px)' : 'rotate(0)'};
    }
  }
`

export const MenuList = styled.ul`
  position: absolute;
  right: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const MenuItem = styled.li`
  position: relative;
  width: 100%;
  padding: 10px;
  background-color: #3982b8;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 0.8rem;
  font-weight: 500;
  opacity: 0;
  ${({ $isOpen, $delay }) =>
    $isOpen &&
    css`
      animation: ${fadeIn} 0.3s ease-out ${$delay}s forwards;
    `}

  transition: all 0.3s ease;
  z-index: 3;

  &:hover {
    font-weight: bold;
    background-color: #ffffff;
    color: #3982b8;
  }

  &:first-child {
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }

  &:not(:last-child) {
    border-bottom: 0.5px solid #bfbfbf;
  }

  &:last-child {
    border-bottom-right-radius: 5px;
    border-bottom-left-radius: 5px;
  }
`
