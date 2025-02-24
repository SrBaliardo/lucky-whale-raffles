import styled from 'styled-components'
import BG from '../../assets/lucky-whale-waves-bg.png'

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 30px;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(233, 233, 233, 1) 78%
  );
  position: relative;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 20px;
    left: 0;
    background: url(${BG}) no-repeat;
    background-size: content;
    opacity: 0.4;
    z-index: -1;
  }
`

export const ContainerContent = styled.div`
  height: 100%;
  width: 800px;
  max-width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;

  li {
    margin: 5px 0;
    cursor: pointer;
    &:hover {
      color: #ccff33;
    }
  }

  @media (max-width: 430px) {
    gap: 0;
    justify-content: space-around;
  }
`
