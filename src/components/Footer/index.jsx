import { FooterContainer } from './styles'

export function Footer() {
  const devSite = 'https://srbaliardo.github.io/sitePortfolio'

  return (
    <FooterContainer>
      <p>
        Desenvolvido por{' '}
        <a href={devSite} target='_blank'>
          JHAB-Dev
        </a>{' '}
        - 2025 - Todos os direitos reservados
      </p>
    </FooterContainer>
  )
}
