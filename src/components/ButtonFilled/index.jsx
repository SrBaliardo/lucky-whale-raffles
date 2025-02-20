import { ContainerButton } from './styles'

export function ButtonFilled({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>
}
