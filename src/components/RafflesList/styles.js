import styled from 'styled-components'
import VisibilityIcon from '@mui/icons-material/Visibility'

export const Container = styled.div`
  .css-y2ff7i-MuiPaper-root-MuiTableContainer-root {
    border-radius: 10px;
    box-shadow: 3px 3px 5px 1px rgba(0, 0, 0, 0.3);

    .MuiTableCell-head {
      background-color: #3982b8;
      font-size: 16px;
      font-weight: bold;
      color: #ffffff;
    }

    .MuiTableCell-body {
      background-color: aliceblue;
      font-size: 14px;
      font-weight: bold;
      color: #6c757d;
    }

    @media (max-width: 430px) {
      .unshow {
        display: none;
      }
    }
  }
`

export const ViewIcon = styled(VisibilityIcon)`
  cursor: pointer;
  &:hover {
    color: #ccff33;
  }
`
