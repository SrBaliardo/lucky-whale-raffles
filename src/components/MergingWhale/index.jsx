import {
  Container,
  ContainerContent,
  Waves1,
  Waves2,
  LuckyWhale,
  Splash,
} from './styles'

export function MergingWhale() {
  return (
    <Container>
      <ContainerContent>
        <Waves1 />
        <LuckyWhale />
        <Splash />
        <Waves2 />
      </ContainerContent>
    </Container>
  )
}
