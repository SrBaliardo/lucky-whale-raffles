import styled, { keyframes } from 'styled-components'
import BG from '../../assets/lucky-whale-waves-bg.png'

const evidenceCard = keyframes`
  0%, 24.99% {
    transform: scale(1.2);
  }
  25%, 100% {
    transform: scale(1);
  }
`

export const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
  overflow-y: auto;

  .div {
    position: relative !important;
    display: flex;
    justify-content: center;
  }

  .span-title {
    color: #01cc01;
    font-family: 'Sour Gummy', serif !important;
  }

  .icon {
    font-size: 80px !important;
  }

  .second-container-buttons {
    margin-top: 0;
    margin: 50px;
  }

  .card-title {
    font-weight: bold;
    text-transform: uppercase;
    font-size: 22px;
    font-family: 'Sour Gummy', serif;
  }

  .advantage-title {
    display: flex;
    gap: 15px;
    margin: 0 30px;
    align-items: center;
    text-align: center;
    justify-content: center;
    color: #ffffff;

    @media (max-width: 430px) {
      flex-wrap: wrap;
    }
  }

  @media (max-width: 430px) {
    .div {
      transform: scale(0.5);
      height: 150px;
    }
  }
`

export const Title = styled.h2`
  font-family: 'Sour Gummy', serif;
  font-size: 55px;

  @media (max-width: 430px) {
    font-size: 45px;
  }
`

export const TopSection = styled.section`
  min-height: 600px;
  width: 100%;
  background: url(${BG}) no-repeat;
  background-size: content;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 150px;
  justify-content: center;
  position: relative;
  z-index: 1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #ffffff;
    opacity: 0.7;
    z-index: -1;
  }

  @media (max-width: 430px) {
    padding-top: 0px;
  }
`

export const TopContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 20px;

  p {
    font-family: 'Sour Gummy', serif;
    font-size: 28px;
  }

  @media (max-width: 430px) {
    padding-top: 5px;

    p {
      font-size: 20px;
    }
  }
`

export const ContainerButtons = styled.div`
  margin-top: 150px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;

  @media (max-width: 430px) {
    margin-top: 50px;
  }
`

export const AdvantageSection = styled.section`
  min-height: 650px;
  width: 100%;
  background-color: #3982b8;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  padding-top: 50px;
  justify-content: center;
`

export const AdvantageContent = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: space-evenly;

  @media (max-width: 430px) {
    flex-wrap: wrap;
  }
`

export const AdvantageCard = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 25px;
  justify-content: center;
  text-align: center;
  align-items: center;
  color: #ffffff;
  line-height: 1.5;
`

export const EBookTitle = styled.h3`
  font-size: 28px;
`

export const EBookSection = styled.section`
  min-height: 650px;
  width: 100%;
  display: flex;
  gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 1024px) {
    padding: 50px;
  }

  @media (max-width: 430px) {
    padding: 65px 30px;
    flex-wrap: wrap;
  }
`

export const EBookContainer = styled.div`
  display: flex;
  width: 500px;
`

export const EBookContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  line-height: 1.5;

  .div-eBook {
    display: flex;
    gap: 20px;

    input {
      width: 100%;
      height: 35px;
      border-radius: 8px;
      padding: 0 5px;
      background-color: #e0f5fe;
    }

    button {
      font-size: 14px;
      height: 35px;
    }
  }

  @media (max-width: 430px) {
    text-align: center;

    .div-eBook {
      align-self: center;
      flex-wrap: wrap;
      width: 80%;

      button {
        width: 100%;
      }
    }
  }
`

export const CapaEBook = styled.img`
  height: 400px;
`

export const CreateProcessTitle = styled.h2`
  font-family: 'Sour Gummy', serif;
  font-size: 55px;
  display: flex;
  gap: 15px;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: #3982b8;

  @media (max-width: 430px) {
    font-size: 45px;
  }
`

export const CreateProcessSection = styled.section`
  min-height: 650px;
  max-height: 100%;
  width: 100%;
  background-color: #e9e9e9;
  display: flex;
  flex-wrap: wrap;
  padding-top: 50px;
  justify-content: center;

  .create-process-content {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
`

export const CreateProcessCard = styled.div`
  height: 250px;
  width: 300px;
  display: flex;
  gap: 20px;
  flex-direction: column;
  padding: 25px;
  justify-content: center;
  text-align: center;
  align-items: center;
  animation: ${evidenceCard} 4s infinite;
  animation-fill-mode: forwards;
  color: #3982b8;
  line-height: 1.5;
`

export const CreateProcessContent = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding-top: 50px;
  justify-items: center;
  overflow-x: hidden;

  & > ${CreateProcessCard}:nth-child(1) {
    animation-delay: 0s;
  }
  & > ${CreateProcessCard}:nth-child(2) {
    animation-delay: -3s;
  }
  & > ${CreateProcessCard}:nth-child(3) {
    animation-delay: -2s;
  }
  & > ${CreateProcessCard}:nth-child(4) {
    animation-delay: -1s;
  }

  .icon {
    color: #01cc01;
  }

  @media (max-width: 1280px) {
    height: 700px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 430px) {
    height: 1200px;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const FAQSectionTitle = styled.h2`
  font-family: 'Sour Gummy', serif;
  font-size: 55px;
  text-align: center;
  color: #ffffff;
  position: relative;

  .faq-title1 {
    position: absolute;
    top: 15px;
    left: -40px;
    transform: rotate(-35deg);
  }

  .faq-title2 {
    position: absolute;
    bottom: 15px;
    right: -40px;
    transform: rotate(25deg);
  }

  @media (max-width: 430px) {
    font-size: 45px;

    .faq-title1 {
      top: 0px;
      left: 20px;
    }

    .faq-title2 {
      bottom: 0px;
      right: 20px;
    }
  }
`

export const FAQSection = styled.section`
  min-height: 650px;
  width: 100%;
  background-color: #3982b8;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 30px;
  justify-content: center;
  align-items: center;
`

export const FAQContent = styled.div`
  height: 100%;
  width: 800px;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 50px;
  line-height: 1.5;

  .faq {
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #ffffff;
  }

  .faq-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: bold;
    min-height: 60px;
    height: 100%;
    cursor: pointer;
    color: #ffffff;
    font-size: 22px !important;

    .span {
      font-size: 36px !important;
    }
  }

  .faq-answer {
    padding: 0 15px 20px;
    color: #ffffff;
    max-height: 0;
    opacity: 0;
    overflow: hidden;
    transition: max-height 0.3s ease, opacity 0.4s ease !important;
  }

  .faq-answer.open {
    max-height: 500px;
    opacity: 1;
  }
`
