import styled from 'styled-components'
import VisibilityIcon from '@mui/icons-material/Visibility'

export const Container = styled.div`
  .css-y2ff7i-MuiPaper-root-MuiTableContainer-root {
    border-radius: 10px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);

    .MuiTableCell-head {
      background-color: #e0f5fe;
      font-size: 16px;
      font-weight: bold;
      color: #3982b8;
    }

    .MuiTableCell-body {
      background-color: #ffffff;
      font-size: 14px;
      font-weight: bold;
      color: #6c757d;
    }

    .size-collumn {
      width: 500px !important;
      max-width: 100% !important;
      overflow-wrap: break-word;
    }

    @media (max-width: 430px) {
      .unshow {
        display: none;
      }

      .size-collumn {
        max-width: 250px !important;
      }
    }
  }
`

export const ViewIcon = styled(VisibilityIcon)`
  cursor: pointer;
  color: #3982b8;

  &:hover {
    color: #ccff33;
  }
`
