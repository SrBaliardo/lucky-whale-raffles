import { ContainerButton } from './styles'

export function ButtonBordered({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>
}
