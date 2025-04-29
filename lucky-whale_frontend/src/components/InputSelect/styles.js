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
  position: relative !important;
`

export const Select = styled.div`
  width: 100%;
  height: 35px;
  background-color: #e0f5fe;
  border-radius: 8px;

  label {
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: space-between;
    padding: 7px 5px 0 5px;
    font-weight: normal !important;
    color: #bfbfbf;
  }
`

export const MenuList = styled.ul`
  position: absolute;
  top: 38px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 200px;
`

export const MenuItem = styled.li`
  position: relative;
  width: 100%;
  padding: 10px;
  background-color: #3982b8;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
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
    background-color: #efefef;
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
