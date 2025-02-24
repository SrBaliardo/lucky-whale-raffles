import React, {
  useState,
  useRef,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from 'react'
import { MenuContainer, Select, MenuList, MenuItem } from './styles'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import ExpandLessIcon from '@mui/icons-material/ExpandLess'

export const InputSelect = forwardRef(({ options }, ref) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectOption, setSelectOption] = useState('Todas')
  const containerRef = useRef(null)

  useImperativeHandle(ref, () => ({
    reset: () => {
      setSelectOption('Todas')
    },
  }))

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const handleOptionClick = (option) => {
    setIsOpen(false)
    setSelectOption(option.label)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <MenuContainer ref={containerRef}>
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
})
