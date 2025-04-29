import {
  Container,
  StepsContent,
  TitleSection,
  Title,
  Text,
  L_W,
  StepsImg,
} from './styles'
import Steps from '../../assets/steps.png'

export function StepByStep() {
  return (
    <Container>
      <StepsContent>
        <TitleSection>
          Passo a Passo{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          <Text>~ Como nadar em nosso mar ~</Text>
        </TitleSection>

        <StepsImg src={Steps} alt='high-five-image' />

        <Title>Passo 1: Cadastro de Usuário</Title>
        <Text>
          Comece criando seu cadastro. Se você já possui cadastro, vá direto
          para o Passo 2. Para se cadastrar, acesse o menu (no canto superior
          direito do site ou, no celular, clique nas três barras) e selecione
          “Área Restrita”. Em seguida, abaixo da opção “Entrar”, escolha
          “Cadastre-se”.
        </Text>

        <Text>
          Preencha o formulário: Informe seu e-mail (que servirá como chave de
          acesso e para receber notificações), data de nascimento (uso restrito
          a maiores de 18 anos), endereço e crie uma senha.
        </Text>
        {/* <Text>
          Cadastrar com Google: Ao clicar nesta opção, seu cadastro será
          completado automaticamente.
        </Text> */}
        <Text>
          Após clicar em “Cadastrar” você receberá um e-mail para confirmar e
          ativar seu cadastro. Com o cadastro confirmado, você já pode
          prosseguir para o Passo 2.
        </Text>

        <Title>Passo 2: Criação da Campanha</Title>
        <Text>
          Na área restrita (área do administrador), clique em “Criar rifa” ou
          acesse essa opção pelo menu (no celular, clique nas três barras).
        </Text>

        <Text>
          Faça login (caso não esteja logado). Em seguida, será aberto um
          formulário para criar sua rifa. As informações fornecidas serão
          utilizadas para construir o RifaCard da sua campanha, então capriche!
          Lembre-se: a rifa deve ser uma ação entre amigos com objetivo
          beneficente e sem fins lucrativos.
        </Text>

        <br />
        <Text>
          <b>Campos Obrigatórios</b>
        </Text>

        <Text>
          <b>Título da rifa:</b> Dê um título, pode ser um nome da pessoa ou
          instituição que está organizando ou que será benefiada pela rifa.
        </Text>
        <Text>
          <b>Celular para contato:</b> Para que possamos entrar em contato, se
          necessário.
        </Text>
        <Text>
          <b>Descrição da Rifa:</b> Descreva, de forma sucinta e autêntica, o
          propósito da campanha e por que ela é beneficente.
        </Text>
        <Text>
          <b>Quem será o beneficiado pela rifa:</b> Informe quem será
          beneficiado com a arrecadação (pessoa, projeto ou instituição).
        </Text>
        <Text>
          <b>Capa da Rifa:</b> Esta imagem será a capa da campanha.
        </Text>
        <Text>
          <b>Descrição do Prêmio:</b> Explique o que é o brinde e detalhe as
          condições para sua entrega (quando, como e onde).
        </Text>
        <Text>
          <b>Foto do Prêmio:</b> Faça o upload de uma imagem representativa do
          prêmio.
        </Text>
        <Text>
          <b>Data do Sorteio (Horário de Brasília):</b> Informe a data, que
          também será o encerramento da campanha. Esta data deve ser entre 15 e
          90 dias após a criação da rifa. No horário definido, o botão “Sortear”
          será liberado na sua rifa, entre na área “Minhas Rifas” e clique no
          ícone apra visualizar a rifa. Se não houver horário configurado, o
          sorteio ocorrerá automaticamente às 23:59 da data escolhida.
        </Text>
        <Text>
          <b>Dados Bancários:</b> Forneça as informações necessárias para o
          recebimento da arrecadação (nome do titular, chave Pix, banco,
          agência, conta e dígito, tipo de conta e CPF/CNPJ). O valor arrecadado
          será liberado em até três dias úteis após o doador vencedor confirmar
          o recebimento do brinde.
        </Text>
        <Text>
          <b>Dados de Endereço:</b> Informe os dados do titular da conta (CEP,
          logradouro, número, bairro, cidade e estado) para fins tributários.
        </Text>
        {/* <Text>Campos opcionais:</Text>
        <Text>
          Inclua links para os perfis do organizador ou beneficiário no Facebook
          e Instagram. Esses links serão conectados aos ícones correspondentes
          na página da campanha, permitindo que os doadores conheçam mais sobre
          sua iniciativa.
        </Text> */}

        <Text>
          Ao final do formulário, marque a caixa confirmando que você leu e
          aceita o Termo de Uso da LUCKY WHALE e que a rifa tem um objetivo
          beneficente e sem fins lucrativos.
        </Text>

        <Title>Passo 3: Revisão e Envio</Title>
        <Text>
          Antes de enviar sua solicitação, clique em “Pré-visualização” para
          conferir como ficará seu RifaCard. Se necessário, faça ajustes
          diretamente no formulário. Quando estiver satisfeito, clique em
          “Registrar”.
        </Text>

        <Text>
          Você receberá uma resposta sobre a criação da campanha. Fique atento
          também à caixa de spam, pois nosso e-mail pode ser direcionado para
          lá. Após a aprovação, você receberá instruções adicionais e o link da
          sua campanha, que poderá ser compartilhado imediatamente via WhatsApp
          e redes sociais.
        </Text>
      </StepsContent>
    </Container>
  )
}
