import styled from 'styled-components'

export const Form = styled.form`
  width: 80%;
  height: 90%;
  background: #ffffff;
  border-radius: 15px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.25);
  z-index: 1001;
  gap: 20px;
  overflow: auto;

  input {
    width: 100%;
    height: 35px;
    border-radius: 8px;
    color: #6c757d;
    padding: 0 10px;
  }

  .form {
    background-color: #e9e9e9;
  }

  .prize-title {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f59705;
    margin-top: 50px;

    h2 {
      margin-top: 0;
    }
  }

  .prize-image {
    width: 400px;
    height: 400px;
  }

  .ticket-quantity-buttons {
    display: flex;
    gap: 20px;
    margin-top: 30px;

    button {
      width: 80px;
    }
  }

  .count-ticket-quantity {
    width: 200px;
    display: flex;
    gap: 20px;
    align-items: center;
    justify-content: center;

    button {
      margin-top: 0;
      width: 40px;
    }

    span {
      color: #6c757d;
      background-color: #e0f5fe;
      width: 40px;
      height: 100%;
      text-align: center;
      align-content: center;
      border-radius: 8px;
    }
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
`

export const ContainerInfo = styled.div`
  display: flex;
  gap: 20px;
`

export const Image = styled.img`
  width: 200px;
  height: 200px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  color: #f59705;
  margin-top: 20px;
  text-align: center;
`

export const Description = styled.p`
  font-size: 14px;
  color: #6c757d;
  width: 100%;
  line-height: 1.5;
  margin-bottom: 50px;

  .litle {
    height: 100px;
    overflow: hidden;
  }
`

export const DrawPrice = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #000000;

  span {
    font-weight: normal;
    color: #6c757d;
  }
`

export const Countdown = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: #000000;
  margin: 50px 0;

  span {
    font-weight: normal;
    color: #6c757d;
  }
`
