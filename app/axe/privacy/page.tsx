import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Axe",
  description: "Política de Privacidade do Axe. Saiba como lidamos com seus dados, o uso do Supabase e Firebase, e como protegemos sua privacidade.",
};

const SECTIONS = [
  { id: "introduction", title: "1. Introdução" },
  { id: "data-collection", title: "2. Informações que Coletamos" },
  { id: "data-usage", title: "3. Como Usamos os Dados" },
  { id: "third-party", title: "4. Serviços de Terceiros" },
  { id: "data-security", title: "5. Segurança dos Dados" },
  { id: "user-choices", title: "6. Suas Opções e Controle" },
  { id: "changes", title: "7. Alterações nesta Política" },
  { id: "contact", title: "8. Fale Conosco" },
];

export default function AxePrivacyPolicy() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-rose-500 selection:text-white">
      {/* Top Decorative Border */}
      <div className="h-2 w-full bg-gradient-to-r from-rose-500 via-violet-600 to-indigo-600" />

      {/* Header */}
      <header className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/axe/privacy" className="group flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-rose-500 to-violet-600 text-white shadow-md shadow-rose-500/10 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 9c3 0 5-2 6-5 0 3 2 5 5 6-3 1-5 3-5 6z" />
              </svg>
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text">
                Axe
              </span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 font-medium">Centro Legal</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
            <Link
              href="/axe/terms-of-service"
              className="px-4 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
            >
              Termos de Serviço
            </Link>
            <Link
              href="/axe/privacy"
              className="px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-rose-600 dark:text-rose-400 shadow-sm"
            >
              Política de Privacidade
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="absolute inset-0 bg-grid-zinc-900/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-rose-500/10 dark:bg-rose-500/5 blur-3xl rounded-full -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-400 border border-rose-100 dark:border-rose-900/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
            Última Atualização: 25 de junho de 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
            Política de Privacidade
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Sua privacidade é o nosso valor fundamental. Esta política descreve como o Axe protege, gerencia e respeita seus dados pessoais.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sticky Navigation Sidebar */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 px-3">
                  Tabela de Conteúdo
                </h3>
                <nav className="space-y-1">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150 font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Contact Card Widget */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <h4 className="font-bold text-sm mb-1">Tem dúvidas?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                  Entre em contato diretamente com o desenvolvedor caso precise de esclarecimentos.
                </p>
                <a
                  href="mailto:augusto.dev@proton.me"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline"
                >
                  augusto.dev@proton.me
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Text Area */}
          <article className="lg:col-span-3 bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-10 shadow-sm backdrop-blur-sm space-y-10 prose prose-zinc dark:prose-invert max-w-none">
            
            <section id="introduction" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">1.</span> Introdução
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Bem-vindo ao <strong>Axe</strong> (o &quot;Aplicativo&quot;). Esta Política de Privacidade explica como Carlos Vieira (&quot;nós&quot;, &quot;nos&quot; ou &quot;nosso&quot;) coleta, usa e protege as informações quando você utiliza o nosso aplicativo móvel.
                </p>
                <p>
                  Ao baixar, instalar ou usar o Axe, você concorda com a coleta e uso de informações de acordo com esta Política de Privacidade.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="data-collection" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">2.</span> Informações que Coletamos
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                <p>
                  Temos um forte compromisso com a minimização de dados. Nós apenas coletamos os dados estritamente necessários para fornecer e melhorar os recursos do Aplicativo.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {/* PII Card */}
                  <div className="p-5 rounded-xl border border-emerald-100 dark:border-emerald-950/60 bg-emerald-50/10 dark:bg-emerald-950/5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/10 dark:bg-emerald-400/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-zinc-950 dark:text-white text-sm mb-1">Não Vendemos Dados</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal">
                      Nós **não** vendemos, alugamos, licenciamos ou comercializamos seus dados pessoais. Sua confiança é o mais importante para nós.
                    </p>
                  </div>

                  {/* Purpose Card */}
                  <div className="p-5 rounded-xl border border-rose-100 dark:border-rose-950/60 bg-rose-50/10 dark:bg-rose-950/5">
                    <div className="w-8 h-8 rounded-lg bg-rose-500/10 dark:bg-rose-400/10 text-rose-600 dark:text-rose-400 flex items-center justify-center mb-3">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h4 className="font-bold text-zinc-950 dark:text-white text-sm mb-1">Dados Funcionais</h4>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 font-normal">
                      Coletamos dados mínimos de análises e notificações apenas para garantir que as funções essenciais do Aplicativo operem de forma segura e rápida.
                    </p>
                  </div>
                </div>

                <p>
                  Especificamente, ao usar o Aplicativo:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Contas e Perfis:</strong> Se você se cadastrar ou fizer login, utilizamos bancos de dados de autenticação seguros gerenciados pelo Supabase.</li>
                  <li><strong>Informações do Dispositivo e Uso:</strong> Coletamos parâmetros técnicos (como versão do sistema operacional e dados de desempenho do app) por meio do Firebase.</li>
                  <li><strong>Tokens de Notificação:</strong> Para enviar notificações push, o Firebase gera tokens de dispositivo exclusivos. Eles são usados exclusivamente para a entrega de mensagens.</li>
                </ul>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="data-usage" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">3.</span> Como Usamos os Dados
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Processamos dados apenas para fins legítimos e transparentes, que incluem:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fornecer e gerenciar as funcionalidades principais do aplicativo.</li>
                  <li>Enviar atualizações importantes de sistema e alertas de notificação.</li>
                  <li>Identificar, rastrear e corrigir falhas de sistema ou bugs de desempenho.</li>
                  <li>Prevenir atividades não autorizadas ou proteger os logins de contas.</li>
                </ul>
                <p className="font-medium text-zinc-900 dark:text-white">
                  Nunca utilizaremos seus dados coletados para criar perfis comportamentais ou direcionar anúncios de redes externas a você.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="third-party" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">4.</span> Serviços de Terceiros
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Para operar o Axe de forma eficiente, colaboramos com provedores de infraestrutura de alta confiança. Esses serviços de terceiros processam dados em nosso nome e estão sujeitos a termos de confidencialidade:
                </p>
                
                <div className="space-y-4 my-6">
                  {/* Supabase details */}
                  <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
                    <span className="font-bold text-zinc-900 dark:text-white text-base block mb-1">Supabase</span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                      Utilizamos o Supabase para armazenamento em nuvem seguro, bancos de dados de backend e gerenciamento de autenticação de usuários.
                    </p>
                    <a href="https://supabase.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline">
                      Leia a Política de Privacidade do Supabase &rarr;
                    </a>
                  </div>

                  {/* Firebase details */}
                  <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
                    <span className="font-bold text-zinc-900 dark:text-white text-base block mb-1">Firebase (do Google)</span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed mb-3">
                      Usamos o Firebase para entregar notificações push, gerenciar configurações remotas e coletar relatórios de diagnóstico anônimos e métricas de desempenho/rastreamento.
                    </p>
                    <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-xs font-semibold text-rose-600 dark:text-rose-400 hover:underline">
                      Leia a Política de Privacidade do Google &rarr;
                    </a>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="data-security" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">5.</span> Segurança dos Dados
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  A segurança está integrada em tudo o que desenvolvemos. Todas as comunicações de rede são criptografadas por meio do protocolo SSL/TLS em trânsito.
                </p>
                <p>
                  Os tokens de login dos usuários e as credenciais do banco de dados são criptografados e armazenados em infraestrutura protegida por protocolos de segurança corporativos fornecidos pelo Supabase. Embora nenhum sistema seja 100% infalível, aplicamos as melhores práticas da indústria para defender seus dados.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="user-choices" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">6.</span> Suas Opções e Controle
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Você tem controle total sobre as preferências do seu aplicativo:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li><strong>Notificações Push:</strong> Você pode ativar ou desativar as notificações a qualquer momento diretamente nas configurações do sistema do seu dispositivo móvel.</li>
                  <li><strong>Métricas de Rastreamento:</strong> Caso queira desativar o rastreamento analítico, poderá ajustar as configurações de privacidade do próprio aplicativo ou do dispositivo móvel.</li>
                  <li><strong>Exclusão de Conta:</strong> Caso tenha criado uma conta e deseje excluir permanentemente seu perfil e registros do banco de dados, basta entrar em contato conosco.</li>
                </ul>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="changes" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">7.</span> Alterações nesta Política
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Reservamo-nos o direito de atualizar esta Política de Privacidade. Caso façamos alterações significativas, atualizaremos a data de &quot;Última Atualização&quot; no topo desta página.
                </p>
                <p>
                  Recomendamos que você consulte esta página periodicamente para se manter informado sobre as nossas diretrizes mais recentes.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">8.</span> Fale Conosco
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Caso tenha alguma dúvida ou queira dar feedback sobre esta Política de Privacidade, entre em contato com o desenvolvedor:
                </p>
                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mt-4 space-y-2">
                  <p className="font-semibold text-zinc-900 dark:text-white">Carlos Vieira</p>
                  <p className="text-sm">
                    E-mail: <a href="mailto:augusto.dev@proton.me" className="text-rose-600 dark:text-rose-400 hover:underline">augusto.dev@proton.me</a>
                  </p>
                </div>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900 py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} Carlos Vieira. Todos os direitos reservados.</p>
          <p className="flex justify-center gap-3 text-zinc-400 dark:text-zinc-500">
            <Link href="/axe/terms-of-service" className="hover:text-rose-500 dark:hover:text-rose-400 hover:underline">Termos de Serviço</Link>
            <span>•</span>
            <Link href="/axe/privacy" className="hover:text-rose-500 dark:hover:text-rose-400 hover:underline">Política de Privacidade</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
