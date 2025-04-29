import styled from 'styled-components'

export const Container = styled.div`
  min-height: calc(100vh - 190px);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 0 20px;
  background-color: #ffffff;
  line-height: 1.5;
`

export const TermsContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
  width: 1100px;
  max-width: 100%;
`

export const TitleSection = styled.h1`
  text-align: center;
  background-color: #e0f5fe;
  border-top-right-radius: 3px;
  border-bottom-left-radius: 3px;
  border-top-left-radius: 60px;
  border-bottom-right-radius: 60px;

  p {
    font-size: 12px;

    @media (max-width: 430px) {
      width: 290px;
      justify-self: center;
    }
  }
`

export const Title = styled.h2`
  margin-top: 30px;
`

export const Subtitle = styled.h3`
  margin-top: 15px;
`

export const Text = styled.p``

export const DealImg = styled.img`
  width: 300px;
`

export const L_W = styled.span`
  font-family: 'Sour Gummy', serif;
  color: #000000 !important;

  span {
    font-family: 'Sour Gummy', serif;
    color: #01cc01;
  }
`
