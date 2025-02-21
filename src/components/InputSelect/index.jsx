import React, { useState } from 'react'
import { MenuContainer, Select, MenuList, MenuItem } from './styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export function InputSelect({ options }) {
  const [isOpen, setIsOpen] = useState(false)
  const [selectOption, setSelectOption] = useState('Todas')

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    setSelectOption(option.label)
  }

  return (
    <MenuContainer>
      <Select $isOpen={isOpen} onClick={toggleMenu}>
        <label>
          {selectOption} {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </label>
      </Select>
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
