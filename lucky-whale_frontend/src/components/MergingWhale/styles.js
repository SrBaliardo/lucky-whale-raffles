import styled, { keyframes } from 'styled-components'
import Waves1Img from '../../assets/waves-blue.png'
import Waves2Img from '../../assets/waves-blue.png'
import LuckyWhaleImg from '../../assets/lucky_whale.png'
import SplashImg from '../../assets/splash.gif'

const swingWave1 = keyframes`
  0% { transform: translateX(-10px); }
  50% { transform: translateX(10px); }
  100% { transform: translateX(-10px); }
`

const swingWave2 = keyframes`
  0% { transform: translateX(10px); }
  50% { transform: translateX(-10px); }
  100% { transform: translateX(10px); }
`

const appearLucky = keyframes`
  0% {
    opacity: 0;
    transform: translateY(150px);
  }
  5% {
    opacity: 1;
    transform: translateY(0);
  }
  50% {
    transform: translateY(-40px);
  }
  30% {
    transform: translateY(10px);
  }
  50% {
    transform: translateY(-30px);
  }
  43.33% {
    opacity: 1;
    transform: translateY(0);
  }
  45% {
    opacity: 0;
    transform: translateY(150px);
  }
  100% {
    opacity: 0;
    transform: translateY(150px);
  }
`

const splashAnimation = keyframes`
  0%, 5% {
    opacity: 0;
  }
  5%, 8.33% {
    opacity: 1;
  }
  8.33%, 100% {
    opacity: 0;
  }
`

export const Container = styled.div`
  width: 320px;
  height: 300px;
  overflow: hidden;
`

export const ContainerContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`

export const Waves1 = styled.img.attrs({
  src: Waves1Img,
})`
  width: 300px;
  position: absolute;
  bottom: 5%;
  left: 3%;
  transform: translateX(-50%);
  animation: ${swingWave1} 3s ease-in-out infinite;
  z-index: 3;
`

export const Waves2 = styled.img.attrs({
  src: Waves2Img,
})`
  width: 300px;
  position: absolute;
  bottom: 20%;
  left: 3%;
  transform: translateX(-50%);
  animation: ${swingWave2} 3s ease-in-out infinite;
  z-index: 1;
`

export const LuckyWhale = styled.img.attrs({
  src: LuckyWhaleImg,
})`
  width: 200px;
  position: absolute;
  left: 15%;
  bottom: 7%;
  transform: translate(0, 50%);
  animation: ${appearLucky} 15s infinite;
  z-index: 2;
`

export const Splash = styled.img.attrs({
  src: SplashImg,
})`
  width: 450px;
  position: absolute;
  left: -20%;
  bottom: 35%;
  transform: translate(0, 50%);
  animation: ${splashAnimation} 15s infinite;
  z-index: 1;
`
