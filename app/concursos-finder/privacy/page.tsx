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
  TERMS_PATH,
} from "../_components/legal";

export const metadata: Metadata = {
  title: `Política de Privacidade | ${APP_NAME}`,
  description:
    "Política de Privacidade do Concursos Finder. O app não exige cadastro, não coleta dados pessoais e guarda tudo apenas no seu aparelho.",
};

const SECTIONS = [
  { id: "resumo", title: "1. Resumo" },
  { id: "armazenamento-local", title: "2. Informações no seu aparelho" },
  { id: "internet", title: "3. Conexão com a internet" },
  { id: "permissoes", title: "4. Permissões do aparelho" },
  { id: "recursos-terceiros", title: "5. Recursos do sistema e de terceiros" },
  { id: "criancas", title: "6. Crianças e adolescentes" },
  { id: "lgpd", title: "7. Seus direitos (LGPD)" },
  { id: "seguranca", title: "8. Segurança" },
  { id: "alteracoes", title: "9. Alterações nesta Política" },
  { id: "contato", title: "10. Contato" },
];

export default function ConcursosFinderPrivacyPolicy() {
  return (
    <LegalShell
      active="privacy"
      title="Política de Privacidade"
      sections={SECTIONS}
      intro={
        <>
          Esta Política de Privacidade explica como o aplicativo <strong>{APP_NAME}</strong> (&quot;App&quot;) trata
          as informações de quem o utiliza (&quot;você&quot;).
        </>
      }
    >
      <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
        <p>
          O App é disponibilizado por <Owner />, doravante &quot;nós&quot;.
        </p>
        <p>
          Ao usar o App, você concorda com esta Política. Se não concordar, não utilize o App.
        </p>
      </div>

      <hr className="border-zinc-200 dark:border-zinc-800" />

      <LegalSection id="resumo" number={1} title="Resumo">
        <Callout>
          <List>
            <li>O App não exige cadastro, login, nome, e-mail ou telefone.</li>
            <li>Não coletamos, vendemos nem compartilhamos dados pessoais.</li>
            <li>O App não usa ferramentas de publicidade, rastreamento ou análise de uso.</li>
            <li>
              Tudo o que você salva no App (concursos acompanhados, preferências de alerta, histórico) fica guardado
              apenas no seu aparelho.
            </li>
          </List>
        </Callout>
      </LegalSection>

      <LegalSection id="armazenamento-local" number={2} title="Informações armazenadas no seu aparelho">
        <p>Para funcionar, o App guarda localmente, no armazenamento interno do seu celular:</p>
        <List>
          <li>os concursos que você escolhe acompanhar;</li>
          <li>se você marcou &quot;Já me inscrevi&quot; e a data da prova que informou;</li>
          <li>os concursos vistos recentemente;</li>
          <li>suas preferências de alerta, como os estados escolhidos e os tipos de aviso ligados;</li>
          <li>a lista de concursos já verificados, para avisar apenas sobre os novos.</li>
        </List>
        <p>
          Essas informações não são enviadas para nós nem para terceiros. Você pode apagá-las a qualquer momento
          removendo os concursos acompanhados no App ou desinstalando o App.
        </p>
      </LegalSection>

      <LegalSection id="internet" number={3} title="Conexão com a internet">
        <p>
          O App baixa periodicamente uma lista pública de concursos, hospedada em um serviço de terceiros (GitHub
          Pages). Essa consulta apenas recebe dados e não envia nenhuma informação sua. Como em qualquer acesso à
          internet, o servidor que hospeda a lista pode registrar dados técnicos da conexão, como endereço IP e data e
          hora do acesso, conforme a política de privacidade do próprio provedor. Não temos acesso a esses registros.
        </p>
        <p>
          Os dados dos concursos vêm de publicações oficiais, como diários oficiais, e de páginas públicas de órgãos e
          bancas organizadoras. São informações públicas, que não se referem a você.
        </p>
      </LegalSection>

      <LegalSection id="permissoes" number={4} title="Permissões do aparelho">
        <p>
          O App pode pedir as permissões abaixo. Todas são opcionais, e o App continua funcionando se você recusar.
        </p>
        <List>
          <li>
            <strong>Notificações:</strong> para avisar sobre prazos dos concursos que você acompanha e sobre concursos
            novos nos estados que você escolheu. Os avisos são criados no próprio aparelho, sem servidor de
            notificações.
          </li>
          <li>
            <strong>Atualização em segundo plano:</strong> para conferir a lista de concursos algumas vezes por dia,
            mesmo com o App fechado, e avisar quando sair concurso novo.
          </li>
          <li>
            <strong>Calendário:</strong> ao tocar em &quot;Adicionar ao calendário&quot;, o App abre a tela do sistema
            com o evento já preenchido. Você decide se salva. O App não lê os eventos da sua agenda.
          </li>
        </List>
        <p>Você pode mudar essas permissões a qualquer momento nos ajustes do aparelho.</p>
      </LegalSection>

      <LegalSection id="recursos-terceiros" number={5} title="Recursos do sistema e de terceiros">
        <p>
          Alguns recursos usam funções do próprio sistema operacional ou de outros aplicativos, que têm suas próprias
          políticas de privacidade:
        </p>
        <List>
          <li>
            <strong>Compartilhar:</strong> abre a tela de compartilhamento do sistema. Você escolhe com quem e por qual
            app compartilha.
          </li>
          <li>
            <strong>Enviar sugestão ou problema:</strong> abre o seu app de e-mail com uma mensagem pronta, que inclui a
            versão do App e do sistema operacional. Só recebemos o e-mail se você decidir enviá-lo, e usaremos o
            conteúdo apenas para responder e melhorar o App.
          </li>
          <li>
            <strong>Avaliar o app:</strong> usa a janela de avaliação da App Store ou da Google Play.
          </li>
          <li>
            <strong>Abrir edital ou site da banca:</strong> abre páginas de terceiros no navegador. Não somos
            responsáveis pelas práticas de privacidade desses sites.
          </li>
        </List>
      </LegalSection>

      <LegalSection id="criancas" number={6} title="Crianças e adolescentes">
        <p>
          O App não é direcionado a menores de 13 anos e não coleta dados de nenhum usuário, incluindo crianças e
          adolescentes.
        </p>
      </LegalSection>

      <LegalSection id="lgpd" number={7} title="Seus direitos (LGPD)">
        <p>
          A Lei Geral de Proteção de Dados (Lei nº 13.709/2018) garante a você direitos como confirmação, acesso,
          correção e eliminação de dados pessoais. Como não coletamos dados pessoais, não mantemos informações suas em
          nossos sistemas. Se você nos enviar um e-mail, pode pedir a exclusão dessa mensagem a qualquer momento pelo
          contato abaixo.
        </p>
      </LegalSection>

      <LegalSection id="seguranca" number={8} title="Segurança">
        <p>
          As informações do App ficam no armazenamento do seu aparelho, protegidas pelos mecanismos de segurança do
          sistema operacional. Recomendamos manter o aparelho com bloqueio de tela e o sistema atualizado.
        </p>
      </LegalSection>

      <LegalSection id="alteracoes" number={9} title="Alterações nesta Política">
        <p>
          Podemos atualizar esta Política quando o App mudar, por exemplo, se passarmos a oferecer assinatura ou contas
          de usuário. A versão em vigor estará sempre neste endereço, com a data da última atualização. Se houver
          mudança relevante na forma como tratamos dados, avisaremos no App antes de ela valer.
        </p>
      </LegalSection>

      <LegalSection id="contato" number={10} title="Contato" last>
        <p>
          Dúvidas sobre esta Política ou sobre privacidade: <Email />
        </p>
        <ContactCard />
        <p className="text-sm">
          Veja também os <Link href={TERMS_PATH} className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline">Termos de Uso</Link>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
