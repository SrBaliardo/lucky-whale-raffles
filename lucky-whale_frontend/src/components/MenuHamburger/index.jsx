import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { MenuContainer, Hamburger, MenuList, MenuItem } from './styles'

export function MenuHamburger({ options }) {
  const [isOpen, setIsOpen] = useState(false)
  const navigate = useNavigate()

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    navigate(option.pathname)
    setIsOpen(false)
  }

  return (
    <MenuContainer>
      <Hamburger $isOpen={isOpen} onClick={toggleMenu}>
        <div />
        <div />
        <div />
      </Hamburger>
      {isOpen && (
        <MenuList>
          {options.map((option, index) => (
            <MenuItem
              key={index}
              $isOpen={isOpen}
              $delay={index * 0.1}
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </MenuItem>
          ))}
        </MenuList>
      )}
    </MenuContainer>
  )
}
