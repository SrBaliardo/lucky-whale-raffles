import styled, { keyframes } from 'styled-components'
import VisibilityIcon from '@mui/icons-material/Visibility'
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet'

const slide = keyframes`
  0% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(-10px); }
`

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  position: relative;

  .table-head {
    font-size: 16px;
    font-weight: bold;
    color: #3982b8;
    background-color: #fafafa;
  }

  .break {
    overflow-wrap: break-word;
  }

  .size-collumn {
    min-width: 150px !important;
  }
`

export const ViewIcon = styled(VisibilityIcon)`
  cursor: pointer;
  color: #3982b8;

  &:hover {
    color: #ccff33;
  }
`

export const Slide = styled(SettingsEthernetIcon)`
  display: none !important;
  position: absolute;
  top: -10px;
  right: 30px;
  transform: translateX(-50%);
  animation: ${slide} 3s ease-in-out infinite;
  z-index: 3;
  color: #6c757d;
  opacity: 0.5;

  @media (max-width: 768px) {
    display: block !important;
  }
`
