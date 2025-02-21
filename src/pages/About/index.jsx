import {
  Container,
  AboutContent,
  TitleSection,
  Title,
  Text,
  L_W,
  HighFiveImg,
} from './styles'
import HighFive from '../../assets/high-five.png'

export function About() {
  return (
    <Container>
      <AboutContent>
        <TitleSection>Sobre Nós</TitleSection>
        <Title>
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          : Conectando Solidariedade e Tecnologia
        </Title>
        <Text>
          A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          é muito mais do que uma plataforma - somos uma ponte que une pessoas,
          amigos e comunidades em prol de causas que realmente transformam
          vidas. Fundada em 2025, nossa missão é facilitar a arrecadação de
          fundos para projetos beneficentes e iniciativas sem fins lucrativos,
          inspirados na tradicional e genuína prática da rifa brasileira.
        </Text>
        <Text>
          Usamos tecnologia de ponta para tornar o processo de doação simples,
          seguro e dinâmico - afinal, cada contribuição é um passo a mais rumo a
          um futuro melhor.
        </Text>

        <Title>Como Funciona</Title>
        <Text>
          Na{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          , os brindes são a “cereja no bolo”. Embora nossos participantes
          possam receber prêmios de valor simbólico, o verdadeiro destaque está
          no ato de contribuir com quem precisa. Nossa plataforma é oferecida
          como um serviço para facilitar a criação e gestão de campanhas,
          enquanto a organização e a confiança entre amigos e comunidades são
          fundamentais para o sucesso de cada iniciativa.
        </Text>
        <Title>O que Não Somos</Title>
        <Text>
          Queremos deixar claro: a{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          não é uma plataforma de jogos nem um serviço financeiro tradicional.
          Todas as doações são realizadas de forma voluntária, sem qualquer
          relação comercial ou expectativa de retorno financeiro. Nosso foco é
          exclusivamente a arrecadação de fundos para causas solidárias,
          utilizando a rifa como uma ferramenta de mobilização e engajamento.
        </Text>
        <Title>Nossos Valores</Title>
        <Text>
          Acreditamos que a solidariedade é o motor de um futuro mais justo e
          inclusivo. Valorizamos a tradição da rifa como um meio legítimo de
          financiamento coletivo e, com o auxílio da tecnologia, conectamos
          pessoas dispostas a fazer a diferença. Nosso compromisso é com a
          segurança, o sucesso das campanhas e, principalmente, com o
          atendimento personalizado que faz de cada ação um exemplo de
          excelência.
        </Text>
        <Title>Junte-se a Nós!</Title>
        <Text>
          Se você quer potencializar suas campanhas e promover um impacto
          positivo nas comunidades que mais precisam, a{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          é o lugar ideal. Venha fazer parte de uma rede que transforma a
          generosidade em ação e a solidariedade em mudança. Confiar na nossa
          expertise e tecnologia significa investir num futuro melhor - para
          você, para quem precisa e para toda a sociedade.
        </Text>
        <Text>
          Escolha a{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          e descubra como é possível unir inovação e compromisso social em uma
          experiência única. Estamos prontos para apoiar suas iniciativas e
          transformar sonhos em realidade.
        </Text>
      </AboutContent>

      <HighFiveImg src={HighFive} alt='high-five-image' />
    </Container>
  )
}
