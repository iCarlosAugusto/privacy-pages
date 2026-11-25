import type { Metadata } from "next";
import Link from "next/link";
import {
  APP_NAME,
  Callout,
  ContactCard,
  Email,
  LegalSection,
  LegalShell,
  List,
  Owner,
  PRIVACY_PATH,
} from "../_components/legal";

export const metadata: Metadata = {
  title: `Termos de Uso | ${APP_NAME}`,
  description:
    "Termos de Uso do Concursos Finder: o que o app faz, origem das informações, notificações, uso permitido e limitações de responsabilidade.",
};

const SECTIONS = [
  { id: "o-que-faz", title: "1. O que o App faz" },
  { id: "origem", title: "2. Origem e precisão" },
  { id: "notificacoes", title: "3. Notificações e lembretes" },
  { id: "uso-permitido", title: "4. Uso permitido" },
  { id: "propriedade", title: "5. Propriedade intelectual" },
  { id: "planos", title: "6. Planos e recursos pagos" },
  { id: "links", title: "7. Links de terceiros" },
  { id: "disponibilidade", title: "8. Disponibilidade e alterações" },
  { id: "responsabilidade", title: "9. Limitação de responsabilidade" },
  { id: "alteracoes", title: "10. Alterações destes Termos" },
  { id: "foro", title: "11. Lei aplicável e foro" },
  { id: "contato", title: "12. Contato" },
];

const linkClass = "font-semibold text-emerald-700 dark:text-emerald-400 hover:underline";

export default function ConcursosFinderTermsOfUse() {
  return (
    <LegalShell
      active="terms"
      title="Termos de Uso"
      sections={SECTIONS}
      intro={
        <>
          Estes Termos de Uso regulam o uso do aplicativo <strong>{APP_NAME}</strong> (&quot;App&quot;).
        </>
      }
    >
      <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
        <p>
          O App é disponibilizado por <Owner /> (&quot;nós&quot;). Ao baixar ou usar o App, você
          (&quot;usuário&quot;) concorda com estes Termos e com a nossa{" "}
          <Link href={PRIVACY_PATH} className={linkClass}>Política de Privacidade</Link>. Se não concordar, não utilize
          o App.
        </p>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      <LegalSection id="o-que-faz" number={1} title="O que o App faz">
        <p>
          O App reúne informações públicas sobre concursos públicos e processos seletivos no Brasil e ajuda você a
          acompanhar prazos de inscrição. Entre os recursos estão:
        </p>
        <List>
          <li>lista de concursos com filtros por estado, salário, tipo e esfera;</li>
          <li>contagem regressiva do período de inscrição;</li>
          <li>acompanhamento de concursos e lembretes de prazo;</li>
          <li>alertas de concursos novos nos estados escolhidos;</li>
          <li>atalho para adicionar prazos ao calendário do aparelho.</li>
        </List>
      </LegalSection>

      <LegalSection id="origem" number={2} title="Origem e precisão das informações">
        <p>
          As informações dos concursos são extraídas automaticamente de fontes públicas, como diários oficiais e
          páginas de órgãos e bancas organizadoras. Elas podem conter erros, estar incompletas ou desatualizadas, ou
          mudar depois de publicadas, por exemplo, com retificações e prorrogações de edital.
        </p>
        <Callout>
          <p className="font-medium">
            O App é uma ferramenta de apoio e não substitui o edital. Antes de se inscrever, pagar taxas ou tomar
            qualquer decisão, confira sempre o edital oficial e os canais do órgão ou da banca responsável.
          </p>
        </Callout>
        <p>
          O App não é um serviço oficial e não tem vínculo com governos, órgãos públicos ou bancas organizadoras. O App
          não realiza inscrições.
        </p>
      </LegalSection>

      <LegalSection id="notificacoes" number={3} title="Notificações e lembretes">
        <p>
          Os avisos dependem das permissões e das configurações do seu aparelho, como notificações, atualização em
          segundo plano e modo de economia de bateria, e da disponibilidade da internet e das fontes de dados. Por
          isso, não garantimos que todo aviso será entregue nem que chegará no horário previsto. A responsabilidade de
          acompanhar os prazos é do usuário.
        </p>
      </LegalSection>

      <LegalSection id="uso-permitido" number={4} title="Uso permitido">
        <p>Você se compromete a usar o App apenas para fins pessoais e lícitos. Não é permitido:</p>
        <List>
          <li>
            copiar, modificar, distribuir, vender ou explorar comercialmente o App ou parte dele sem nossa autorização;
          </li>
          <li>
            tentar acessar o código-fonte, fazer engenharia reversa ou contornar mecanismos de segurança, exceto quando
            a lei permitir;
          </li>
          <li>usar o App de forma que prejudique seu funcionamento ou o de serviços de terceiros.</li>
        </List>
      </LegalSection>

      <LegalSection id="propriedade" number={5} title="Propriedade intelectual">
        <p>
          O nome, a marca, o design e o código do App pertencem a nós ou a nossos licenciadores. As informações sobre
          concursos são públicas e pertencem aos respectivos órgãos. Estes Termos concedem a você uma licença pessoal,
          gratuita, não exclusiva e intransferível para usar o App no seu aparelho.
        </p>
      </LegalSection>

      <LegalSection id="planos" number={6} title="Planos e recursos pagos">
        <p>
          O App pode oferecer, agora ou no futuro, um plano pago (Premium) com recursos adicionais. Se oferecido,
          preços, cobrança, renovação e cancelamento seguirão as regras da App Store ou da Google Play, informadas antes
          da compra. Pedidos de reembolso devem ser feitos pela loja em que a compra foi realizada.
        </p>
      </LegalSection>

      <LegalSection id="links" number={7} title="Links de terceiros">
        <p>
          O App pode abrir editais, sites de bancas e outras páginas de terceiros. Não controlamos esses sites e não
          somos responsáveis pelo seu conteúdo, disponibilidade ou práticas de privacidade.
        </p>
      </LegalSection>

      <LegalSection id="disponibilidade" number={8} title="Disponibilidade e alterações do App">
        <p>
          Podemos alterar, suspender ou encerrar o App, ou qualquer recurso dele, a qualquer momento, inclusive para
          manutenção. Também podemos interromper o acesso de quem violar estes Termos.
        </p>
      </LegalSection>

      <LegalSection id="responsabilidade" number={9} title="Limitação de responsabilidade">
        <p>
          O App é fornecido &quot;no estado em que se encontra&quot;. Na extensão máxima permitida pela lei, não nos
          responsabilizamos por perdas decorrentes de informações incorretas ou desatualizadas, de avisos não
          entregues, de prazos perdidos, de inscrições não realizadas ou de indisponibilidade do App ou das fontes de
          dados.
        </p>
        <p>
          Nada nestes Termos limita direitos garantidos ao consumidor pela legislação brasileira, incluindo o Código de
          Defesa do Consumidor.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" number={10} title="Alterações destes Termos">
        <p>
          Podemos atualizar estes Termos. A versão em vigor estará sempre neste endereço, com a data da última
          atualização. Se a mudança for relevante, avisaremos no App. Continuar usando o App depois da atualização
          significa que você concorda com a nova versão.
        </p>
      </LegalSection>

      <LegalSection id="foro" number={11} title="Lei aplicável e foro">
        <p>
          Estes Termos são regidos pelas leis do Brasil. Fica eleito o foro do domicílio do usuário para resolver
          eventuais conflitos.
        </p>
      </LegalSection>

      <LegalSection id="contato" number={12} title="Contato" last>
        <p>
          Dúvidas, sugestões ou problemas: <Email />
        </p>
        <ContactCard />
      </LegalSection>
    </LegalShell>
  );
}
