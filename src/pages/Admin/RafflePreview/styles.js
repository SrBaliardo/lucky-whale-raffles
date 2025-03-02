import styled from 'styled-components'
import { ButtonFilled } from '../../../components'

export const Container = styled.div`
  min-height: calc(100vh - 190px);
  width: 100%;
  overflow: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffffff;
`

export const Title = styled.h1`
  margin-top: 20px;
  color: #6c757d;
`

export const Back = styled(ButtonFilled)`
  width: 110px;
  margin-bottom: 20px;
`
