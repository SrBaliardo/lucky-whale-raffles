import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 70px;
  width: 100%;
  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(57, 130, 184, 1) 78%
  );
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  a {
    color: #ffffff;
    &:hover {
      color: #ccff33;
    }
  }
`
