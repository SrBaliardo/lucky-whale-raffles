import {
  Container,
  TermsContent,
  TitleSection,
  Title,
  Subtitle,
  Text,
  L_W,
  DealImg,
} from './styles'
import Deal from '../../assets/deal.png'

export function UseTerms() {
  const eMail = 'contato@luckywhaleraffles.com.br'

  return (
    <Container>
      <TermsContent>
        <TitleSection>
          Termos de Uso
          <Text>
            ~ Antes de utilizar nossa plataforma, leia atentamente os Termos de
            Uso ~
          </Text>
        </TitleSection>
        <Title>1. SOBRE ESTE TERMO DE USO</Title>
        <Subtitle>1.1 Aceitação Automática</Subtitle>
        <Text>
          Ao acessar e utilizar a plataforma{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          , você concorda automaticamente com este Termo de Uso, sem necessidade
          de formalidades adicionais.
        </Text>
        <Subtitle>1.2 Cumprimento da Legislação</Subtitle>
        <Text>
          Ao utilizar nossos serviços, você se compromete a seguir a legislação
          vigente, bem como todas as disposições deste Termo de Uso.
        </Text>
        <Subtitle>1.3 Responsabilidade Pessoal</Subtitle>
        <Text>
          Você é o único responsável por suas ações na plataforma e garante que
          todas as informações fornecidas são verdadeiras e atualizadas.
        </Text>
        <Subtitle>1.4 Medidas em Caso de Descumprimento</Subtitle>
        <Text>
          A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          se reserva o direito de recusar, bloquear ou cancelar o acesso de
          usuários que descumprirem qualquer item deste Termo, a seu exclusivo
          critério.
        </Text>
        <Subtitle>1.5 Dúvidas e Suporte</Subtitle>
        <Text>
          Caso tenha qualquer dúvida sobre este Termo de Uso, entre em contato
          com nossa equipe pelo e-mail: {eMail}.
        </Text>
        <Title>2. SOBRE O SERVIÇO</Title>
        <Subtitle>2.1 Finalidade</Subtitle>
        <Text>
          A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          é uma plataforma tecnológica criada para facilitar a criação de
          campanhas de arrecadação com fins beneficentes ou de apoio a causas
          sem fins lucrativos.
        </Text>
        <Subtitle>2.2 Uso Exclusivo para Causas Solidárias</Subtitle>
        <Text>
          Nosso serviço é destinado exclusivamente à arrecadação de fundos para
          causas beneficentes ou sem fins lucrativos, não sendo permitido seu
          uso para fins comerciais.
        </Text>
        <Subtitle>2.3 Não se Trata de Jogos</Subtitle>
        <Text>
          A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          não é uma plataforma de jogos. Todas as doações são voluntárias e não
          configuram uma relação comercial nem jogos de azar. Assim, ao doar, o
          usuário não espera retorno financeiro na forma de produtos ou
          serviços.
        </Text>
        <Subtitle>2.4 Oferta Opcional de Brindes</Subtitle>
        <Text>
          O organizador da campanha pode, se desejar, oferecer um brinde como
          forma de agradecimento. Se essa opção for escolhida, o brinde será
          sorteado automaticamente, sem intervenção manual.
        </Text>
        <Subtitle>2.5 Compromisso com a Entrega dos Brindes</Subtitle>
        <Text>
          Caso o organizador opte por oferecer brindes, ele se compromete a
          entregá-los conforme as condições informadas aos participantes.
        </Text>
        <Subtitle>2.6 Gestão das Campanhas</Subtitle>
        <Text>
          A criação e administração das campanhas são de responsabilidade
          exclusiva dos organizadores. A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          apenas fornece a ferramenta necessária para facilitar esse processo.
        </Text>
        <Subtitle>2.7 Natureza dos Serviços</Subtitle>
        <Text>
          Nossa plataforma não se assemelha aos serviços financeiros oferecidos
          por bancos ou administradoras de cartão de crédito; ela é uma
          facilitadora de arrecadação de fundos, atuando em nome do organizador.
        </Text>
        <Title>3. CONDIÇÕES GERAIS DE ACESSO E USO</Title>
        <Subtitle>3.1 Aceitação dos Termos</Subtitle>
        <Text>
          Ao usar a{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          , você reconhece e concorda com todos os termos aqui descritos. Se
          houver discordância com qualquer item, o uso da plataforma não deve
          ser efetuado.
        </Text>
        <Subtitle>3.2 Uso sob Responsabilidade</Subtitle>
        <Text>
          Você assume a responsabilidade exclusiva pelo uso da plataforma,
          comprometendo-se a agir conforme a legislação e este Termo, sem
          realizar atividades ilícitas ou que violem direitos de terceiros.
        </Text>
        <Title>4. DA CRIAÇÃO DE CAMPANHAS DE ARRECADAÇÃO</Title>
        <Subtitle>4.1 Informações Verdadeiras</Subtitle>
        <Text>
          Ao criar uma campanha, você declara que todas as informações
          fornecidas - inclusive dados pessoais, bancários e outras informações
          sensíveis - são verdadeiras e se compromete a mantê-las atualizadas.
        </Text>
        <Subtitle>4.2 Requisitos de Idade</Subtitle>
        <Text>
          Somente usuários maiores de 18 anos podem criar campanhas. Toda a
          responsabilidade pelas informações, imagens e vídeos publicados é do
          organizador.
        </Text>
        <Subtitle>4.3 Compromisso com as Promessas</Subtitle>
        <Text>
          O organizador deve criar a campanha em conformidade com este Termo e
          cumprir todas as expectativas geradas.
        </Text>
        <Subtitle>4.4 Possibilidade de Edição</Subtitle>
        <Text>
          Após a criação da campanha, ela não poderá ser editada. Entretanto, se
          não houver nenhum registro de arrecadação, alguns campos poderão ser
          alterados mediante contato com a nossa equipe. A solicitação será
          analisada individualmente, com resposta em até 24 horas.
        </Text>
        <Subtitle>4.5 Brindes</Subtitle>
        <Text>
          Se optar por oferecer brindes, o organizador declara possuir os
          produtos ou serviços informados e se compromete a entregá-los conforme
          o prometido – na quantidade, modelo e prazo acordados.
        </Text>
        <Subtitle>4.6 Legalidade dos Produtos ou Serviços</Subtitle>
        <Text>
          Você se compromete a oferecer apenas produtos ou serviços lícitos, que
          não infrinjam direitos de terceiros (como propriedade intelectual,
          publicidade ou privacidade) e que estejam em conformidade com a
          legislação brasileira.
        </Text>
        <Subtitle>4.7 Valor Simbólico dos Brindes</Subtitle>
        <Text>
          Os brindes devem ter valor simbólico, não ultrapassando R$ 1.000,00,
          já que a principal motivação é apoiar pessoas ou instituições.
        </Text>
        <Subtitle>4.8 Metas de Arrecadação e Sorteio</Subtitle>
        <Text>
          O sorteio ocorrerá ao final da campanha, independentemente do valor do
          brinde.
        </Text>
        <Text>Se o organizador não desejar o sorteio, ele poderá:</Text>
        <Text>
          a) Adiar a data do sorteio, desde que seja solicitado 48 horas antes
          do evento e não ultrapasse 90 dias da criação da campanha;
        </Text>
        <Text>
          b) Solicitar o cancelamento da campanha por e-mail ({eMail}), com pelo
          menos 48 horas de antecedência, o que resultará na devolução dos
          valores arrecadados aos doadores.
        </Text>
        <Subtitle>4.9 Prazos para o Sorteio</Subtitle>
        <Text>
          A data do sorteio deve ocorrer entre 15 e 90 dias após a criação da
          campanha.
        </Text>
        <Subtitle>4.10 Realização Automática do Sorteio</Subtitle>
        <Text>
          O sistema fará o sorteio de forma aleatória na data definida se nenhum
          horário específico for configurado às 23:59 (horário de Brasília).
        </Text>
        <Subtitle>4.11 Funcionamento do Botão “Sortear”</Subtitle>
        <Text>
          Caso seja programado um horário específico, o botão “Sortear” estará
          liberado a partir desse horáro na página da campanha. Após esse
          horário, o contador é zerado e não serão aceitas novas doações, sempre
          seguindo o horário de Brasília.
        </Text>
        <Text>
          Se o botão não for acionado dentro de 24 horas após o prazo definido,
          então o sorteio ocorre automaticamente às 23:59 (horário de Brasília).
        </Text>
        <Title>5. MANUTENÇÃO DE CRÉDITOS DO USUÁRIO ARRECADADOR</Title>
        <Subtitle>5.1 Consulta de Créditos</Subtitle>
        <Text>
          O organizador pode verificar seus créditos a qualquer momento por meio
          das ferramentas disponíveis na plataforma{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          .
        </Text>
        <Subtitle>5.2 Estabilidade dos Créditos</Subtitle>
        <Text>
          Os créditos não serão corrigidos monetariamente nem acrescidos de
          juros, permanecendo inalterados enquanto estiverem na plataforma. A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          não se responsabiliza por eventuais desvalorizações.
        </Text>
        <Title>6. DA PARTICIPAÇÃO NAS CAMPANHAS</Title>
        <Subtitle>6.1 Confiança na Participação</Subtitle>
        <Text>
          Recomendamos que os usuários participem apenas de campanhas promovidas
          por pessoas de sua confiança. A criação e gestão das campanhas são de
          responsabilidade exclusiva dos organizadores.
        </Text>
        <Subtitle>6.2 Responsabilidade pelo Pagamento</Subtitle>
        <Text>
          Ao apoiar uma campanha, você reconhece que a doação foi feita de forma
          livre, consciente e de acordo com as condições negociadas diretamente
          com o organizador. É fundamental confirmar todas as informações antes
          de efetuar a doação.
        </Text>
        <Subtitle>
          6.3 Garantia{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
        </Subtitle>
        <Text>
          Se o organizador fornecer informações falsas ou não entregar os
          brindes conforme prometido, a{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          poderá suspender, reverter ou cancelar os créditos do organizador,
          revertendo os valores aos doadores.
        </Text>
        <Subtitle>6.4 Notificação aos Sorteados</Subtitle>
        <Text>
          Os doadores sorteados para receber brindes serão notificados e terão
          até 7 dias para confirmar o recebimento. Caso contrário, a campanha
          ficará pendente, podendo contar com nossa intermediação.
        </Text>
        <Subtitle>6.5 Disputa Aberta e Cancelamento</Subtitle>
        <Text>
          Campanhas que ficarem pendentes sem resolução por mais de 1 mês
          poderão ser canceladas e os valores devolvidos aos doadores, conforme
          a Garantia{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          .
        </Text>
        <Title>7. DAS PROIBIÇÕES</Title>
        <Subtitle>7.1 Contas Falsas</Subtitle>
        <Text>
          Não é permitido o uso de contas falsas para criar campanhas com o
          intuito de enganar ou gerar falsas expectativas.
        </Text>
        <Subtitle>7.2 Itens Proibidos</Subtitle>
        <Text>Campanhas que prometam itens como:</Text>
        <Text>Dinheiro em espécie;</Text>
        <Text>Serviços, produtos ou conteúdos sexualmente explícitos;</Text>
        <Text>
          Explosivos, armas de fogo, medicamentos ou produtos químicos
          perigosos;
        </Text>
        Ou qualquer outro item que seja considerado inapropriado ou ofensivo,
        estão expressamente proibidas.
        <Subtitle>7.3 Conteúdo Ilegal ou Impróprio</Subtitle>
        <Text>
          Você se compromete a não compartilhar materiais ou informações que
          contrariem a legislação, a moral, a ordem pública ou este Termo de
          Uso.
        </Text>
        <Subtitle>7.4 Linguagem Ofensiva</Subtitle>
        <Text>
          Não serão aceitas descrições de campanhas com conteúdos
          preconceituosos, ofensivos ou violentos.
        </Text>
        <Title>
          8. DIREITOS DA{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
        </Title>
        <Subtitle>8.1 Remoção e Bloqueio</Subtitle>
        <Text>
          A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          pode, a seu exclusivo critério, remover campanhas que não estejam em
          conformidade com este Termo ou com a legislação, podendo ainda
          bloquear ou excluir o acesso do usuário infrator.
        </Text>
        <Subtitle>8.2 Validação de Dados</Subtitle>
        <Text>
          Para garantir a transparência e segurança, podemos verificar a
          validade dos seus dados de contato (como telefone e e-mail), sem
          assumir qualquer responsabilidade pela veracidade das informações
          fornecidas.
        </Text>
        <Subtitle>8.3 Backup e Disponibilidade</Subtitle>
        <Text>
          Não nos obrigamos a manter backups de campanhas cujo prazo de
          disponibilidade expirou ou que tenham sido desativadas.
        </Text>
        <Title>9. CUSTOS DE USO DA PLATAFORMA</Title>
        <Subtitle>9.1 Gratuidade na Criação e Custos de Processamento</Subtitle>
        <Text>
          A utilização da plataforma da{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          para criar campanhas é gratuita. Você será cobrado apenas quando um
          pagamento for processado e aprovado, no valor de R$ 1,50 por cada
          número de bilhete emitido para doações de até R$ 10,00. Para bilhetes
          com valores superiores a R$ 10,00, a cobrança poderá ser alterada
          conforme as condições vigentes.
        </Text>
        <Title>10. TRANSFERÊNCIA DOS VALORES ARRECADADOS</Title>
        <Subtitle>10.1 Confirmação do Brinde e Liberação dos Fundos</Subtitle>
        <Text>
          Após o sorteio, o sorteado receberá um e-mail com um link para
          confirmar o recebimento do brinde. Assim que a confirmação for feita,
          o valor arrecadado será liberado para pagamento.
        </Text>
        <Subtitle>10.2 Prazo para Manifestação</Subtitle>
        <Text>
          O ganhador terá até 7 dias para confirmar o recebimento ou reportar
          alguma irregularidade. Se não houver manifestação, a campanha ficará
          para resolução da divergência.
        </Text>
        <Subtitle>10.3 Cancelamento em Caso de Divergência</Subtitle>
        <Text>
          Se, após 1 mês do sorteio, a pendência não for resolvida, a campanha
          poderá ser cancelada e os valores devolvidos aos doadores.
        </Text>
        <Subtitle>10.4 Prazos para Transferência</Subtitle>
        <Text>
          A transferência dos valores ocorrerá três dias úteis após o sorteio
          (disponível a partir do quarto dia útil), para que o saldo se
          estabilize.
        </Text>
        <Subtitle>10.5 Dados Bancários</Subtitle>
        <Text>
          A transferência será realizada para a conta bancária cadastrada pelo
          organizador, que deverá informar corretamente:
        </Text>
        <Text>Nome do titular;</Text>
        <Text>CPF ou CNPJ;</Text>
        <Text>Nome do banco;</Text>
        <Text>Número da agência;</Text>
        <Text>Número da conta e o dígito.</Text>
        <Subtitle>10.6 Responsabilidade pelos Dados</Subtitle>
        <Text>
          O organizador é responsável por fornecer os dados corretos. A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          não se responsabiliza por problemas decorrentes de informações
          incorretas.
        </Text>
        <Subtitle>10.7 Reenvio em Caso de Devolução</Subtitle>
        <Text>
          Se a transferência for devolvida devido a inconsistências, entraremos
          em contato para que os dados sejam corrigidos e uma nova transferência
          seja realizada.
        </Text>
        <Subtitle>10.8 Uso dos Dados Bancários</Subtitle>
        <Text>
          Os dados do titular da conta serão usados pela{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          para fins tributários, como destinatário final do serviço prestado.
        </Text>
        <Title>11. POLÍTICA DE PRIVACIDADE</Title>
        <Subtitle>11.1 Confidencialidade</Subtitle>
        <Text>
          Garantimos a confidencialidade das informações fornecidas, exceto
          aquelas que você optar por divulgar em suas campanhas ou que sejam
          necessárias para cumprir obrigações legais. Entretanto, conforme a
          legislação, essas informações poderão ser compartilhadas em
          investigações de eventuais ilícitos.
        </Text>
        <Subtitle>11.2 Consulta Completa</Subtitle>
        <Text>
          Para mais detalhes, leia a{' '}
          <a href='/privacy-policy'>Política de Privacidade</a> completa. Ao
          utilizar nossos serviços, você concorda com esta política.
        </Text>
        <Title>12. GARANTIAS E RESPONSABILIDADES</Title>
        <Subtitle>12.1 Disponibilidade dos Serviços</Subtitle>
        <Text>
          A operação da plataforma depende de fatores externos (como qualidade
          da internet, configurações do dispositivo e parceiros técnicos).
          Assim, não garantimos funcionamento ininterrupto, mas asseguramos a
          preservação das informações por meio de backups regulares.
        </Text>
        <Subtitle>12.2 Conduta dos Usuários</Subtitle>
        <Text>
          A{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          não garante que todos os usuários agirão em conformidade com a lei, a
          moral ou os termos deste contrato, nem que as informações publicadas
          nas campanhas sejam totalmente precisas. A responsabilidade por
          quaisquer irregularidades é exclusivamente do usuário.
        </Text>
        <Subtitle>12.3 Relações Entre Usuários</Subtitle>
        <Text>
          Não atuamos como consultores ou intermediadores nas relações entre os
          usuários. Eventuais danos decorrentes de negociações entre partes são
          de responsabilidade exclusiva dos envolvidos.
        </Text>
        <Subtitle>12.4 Obrigações Tributárias</Subtitle>
        <Text>
          Você é responsável pelas obrigações tributárias relacionadas à sua
          campanha, respondendo à{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          apenas pelas atividades por você realizadas, conforme permitido por
          lei.
        </Text>
        <Subtitle>12.5 Proteção de Propriedade Intelectual</Subtitle>
        <Text>
          Todos os elementos, conteúdos, estruturas e programas da plataforma
          são protegidos por direitos de propriedade intelectual da{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          ou de terceiros.
        </Text>
        <Title>13. DISPOSIÇÕES GERAIS</Title>
        <Subtitle>13.1 Alterações nos Termos</Subtitle>
        <Text>
          Este Termo de Uso rege a relação entre você e a{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>
          . Podemos modificá-lo periodicamente para refletir mudanças na
          legislação ou na nossa plataforma. Recomendamos a verificação regular
          dos termos, caso não concorde com as alterações, interrompa o uso da
          plataforma.
        </Text>
        <Subtitle>13.2 Direito de Exclusão e Cancelamento</Subtitle>
        <Text>
          Reservamo-nos o direito de recusar o acesso, inabilitar cadastros ou
          cancelar campanhas de usuários que descumpram este Termo, sem aviso
          prévio. Podemos também solicitar documentos ou informações adicionais
          para a manutenção da conta ou da campanha.
        </Text>
        <Subtitle>13.3 Remoção e Consequências</Subtitle>
        <Text>
          Em caso de remoção de conteúdo ou suspensão de cadastro por
          descumprimento deste Termo, a campanha será cancelada e os valores
          arrecadados devolvidos aos doadores.
        </Text>
        <Subtitle>13.4 Uso por Menores de Idade</Subtitle>
        <Text>
          O uso da plataforma por menores só é permitido com autorização e
          supervisão dos responsáveis legais. Em alguns casos, o acesso é
          restrito a maiores de 18 anos. Se houver restrições devido à
          capacidade civil, as mesmas condições se aplicam aos menores.
        </Text>
        <Subtitle>13.5 Duração e Término dos Serviços</Subtitle>
        <Text>
          As ferramentas da{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          estarão disponíveis por tempo indeterminado, salvo disposição em
          contrário para funcionalidades específicas. Nos reservamos o direito
          de encerrar ou suspender funcionalidades a qualquer momento, sem aviso
          prévio - exceto quando houver contraprestação financeira, caso em que
          notificaremos com pelo menos 5 dias de antecedência.
        </Text>
        <Subtitle>13.6 Comunicações</Subtitle>
        <Text>
          Podemos enviar informações e notificações via e-mail, push ou
          correspondência física para o endereço cadastrado. Avisos enviados por
          e-mail serão considerados entregues na data de envio. Todas as
          comunicações devem ser encaminhadas para: {eMail}. Também poderemos
          enviar novidades sobre a{' '}
          <L_W>
            <span>LUCKY</span> WHALE
          </L_W>{' '}
          e empresas do mesmo grupo.
        </Text>
        <Subtitle>13.7 Renúncia e Autonomia</Subtitle>
        <Text>
          A tolerância ou omissão no cumprimento deste Termo não implicará
          renúncia de direitos. Qualquer renúncia só terá validade se
          formalizada por escrito. Se qualquer disposição for considerada
          inválida, as demais permanecerão em vigor.
        </Text>
        <Subtitle>13.8 Exclusão de Conta</Subtitle>
        <Text>
          Para solicitar a exclusão de sua conta, entre em contato com nossa
          equipe ({eMail}). Por motivos de segurança e conformidade, sua
          solicitação será analisada individualmente e poderá levar até 24 horas
          para que você receba uma resposta.
        </Text>
        <Text>
          Se você não realizou nenhuma arrecadação, a conta poderá ser excluída
          conforme solicitado.
        </Text>
        <Text>
          Se já houver campanhas com arrecadação, as informações serão mantidas
          para cumprir obrigações legais (tributárias, civis e criminais).
        </Text>
        <Text>
          Em caso de ordem administrativa ou judicial, as informações poderão
          ser compartilhadas, sempre respeitando o devido processo legal.
        </Text>
      </TermsContent>

      <DealImg src={Deal} alt='high-five-image' />
    </Container>
  )
}
