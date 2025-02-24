import styled from 'styled-components'

export const HeaderContainer = styled.header`
  height: 120px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(57, 130, 184, 1) 78%
  );
  color: #ffffff;

  .hamburger {
    display: none;
  }

  @media (max-width: 430px) {
    .hamburger {
      display: block;
      margin: 25px 25px 0 0;
    }
  }
`

export const Logo = styled.img`
  width: 90px;

  @media (max-width: 430px) {
    width: 70px;
  }
`

export const NavContainer = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 430px) {
    display: none;
  }
`

export const NavName = styled.a`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.$isActive ? '#ccff33' : '#ffffff')};
  transform: ${(props) => (props.$isActive ? 'scale(1.1)' : 'scale(1)')};
  transition: all 0.3s ease;
  &:hover {
    color: #ccff33;
    transform: scale(1.1);
  }
`

export const Span = styled.span`
  font-size: 18px;
  font-weight: bold;
  color: #ffffff;
`
