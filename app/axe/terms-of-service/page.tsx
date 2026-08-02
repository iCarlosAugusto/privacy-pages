import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Serviço | Zambi",
  description: "Termos de Serviço do Zambi. Leia nossas regras simples de uso, políticas de dados e contatos do desenvolvedor.",
};

const SECTIONS = [
  { id: "acceptance", title: "1. Aceitação dos Termos" },
  { id: "privacy-summary", title: "2. Privacidade e Integridade dos Dados" },
  { id: "usage-rules", title: "3. Regras de Uso do Aplicativo" },
  { id: "intellectual-property", title: "4. Propriedade Intelectual" },
  { id: "disclaimer", title: "5. Isenção e Limites de Responsabilidade" },
  { id: "contact", title: "6. Informações de Contato" },
];

export default function AxeTermsOfService() {
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
                Zambi
              </span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 font-medium">Centro Legal</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
            <Link
              href="/axe/terms-of-service"
              className="px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-rose-600 dark:text-rose-400 shadow-sm"
            >
              Termos de Serviço
            </Link>
            <Link
              href="/axe/privacy"
              className="px-4 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
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
            Termos de Serviço
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Regras simples e diretas para o uso do Zambi. Sem letras miúdas, sem jargões jurídicos complicados.
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
                <h4 className="font-bold text-sm mb-1">Precisa de ajuda?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                  Tem alguma dúvida sobre estes termos ou sobre o aplicativo?
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
            
            <section id="acceptance" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">1.</span> Aceitação dos Termos
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Ao acessar, baixar ou usar o aplicativo <strong>Zambi</strong>, você concorda em cumprir e estar vinculado a estes simples Termos de Serviço.
                </p>
                <p>
                  Se você não concordar com qualquer parte destes termos, por favor, descontinue o uso do aplicativo e remova-o do seu dispositivo.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="privacy-summary" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">2.</span> Privacidade e Integridade dos Dados
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-4">
                <p>
                  Sua privacidade é extremamente importante para nós. Aqui está a estrutura de dados do Zambi em linguagem simples:
                </p>
                
                {/* Visual Card Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
                  {/* Firebase Card */}
                  <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
                    <span className="font-bold text-zinc-900 dark:text-white text-sm block mb-1">Recursos do Firebase</span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Usamos o Firebase para dar suporte a serviços essenciais do app, como notificações push e métricas básicas de uso e rastreamento.
                    </p>
                  </div>

                  {/* Supabase Card */}
                  <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30">
                    <span className="font-bold text-zinc-900 dark:text-white text-sm block mb-1">Infraestrutura do Supabase</span>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                      Utilizamos o Supabase para armazenar de forma segura as informações de perfis, configurações e dados do aplicativo.
                    </p>
                  </div>
                </div>

                {/* Important Alert Banner */}
                <div className="p-4 rounded-xl border border-emerald-100 dark:border-emerald-950/40 bg-emerald-50/30 dark:bg-emerald-950/10 text-sm">
                  <p className="font-semibold text-emerald-700 dark:text-emerald-400 mb-1 flex items-center gap-1.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                    Garantia de Dados
                  </p>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    <strong>Nós não vendemos, alugamos ou comercializamos nenhuma de suas informações.</strong> Todos os dados coletados são usados exclusivamente para viabilizar as funções do app e o monitoramento de desempenho. Para detalhes completos, consulte a nossa <Link href="/axe/privacy" className="text-rose-600 dark:text-rose-400 font-semibold underline hover:text-rose-800">Política de Privacidade</Link>.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="usage-rules" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">3.</span> Regras de Uso do Aplicativo
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Para manter o Zambi seguro e funcional para todos, você concorda em:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Usar o aplicativo somente em conformidade com as leis locais.</li>
                  <li>Não tentar realizar raspagem de dados (scraping), engenharia reversa ou descompilar o software do aplicativo.</li>
                  <li>Não abusar dos canais de notificações ou criar perfis falsos.</li>
                  <li>Responsabilizar-se pela segurança de suas chaves e credenciais de login.</li>
                </ul>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="intellectual-property" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">4.</span> Propriedade Intelectual
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  A marca, o layout de design, os elementos visuais e o código-fonte do aplicativo Zambi pertencem a <strong>Carlos Vieira</strong>.
                </p>
                <p>
                  Concedemos a você uma licença pessoal, limitada, não exclusiva e revogável para baixar e executar o aplicativo no seu dispositivo móvel. Qualquer redistribuição ou reaproveitamento comercial de nossos recursos é proibido.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="disclaimer" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">5.</span> Isenção e Limites de Responsabilidade
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  O Zambi é fornecido &quot;COMO ESTÁ&quot;, sem garantias de qualquer tipo. Embora nos esforcemos para oferecer a melhor experiência ao usuário, não podemos garantir que o aplicativo estará sempre livre de erros ou interrupções.
                </p>
                <p>
                  Na extensão máxima permitida pela lei aplicável, o desenvolvedor não se responsabiliza por quaisquer danos indiretos ou incidentais resultantes do uso do aplicativo.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            <section id="contact" className="scroll-mt-24">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
                <span className="text-rose-600 dark:text-rose-400">6.</span> Informações de Contato
              </h2>
              <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">
                <p>
                  Se você tiver dúvidas ou quiser enviar comentários sobre estes termos simples, entre em contato com o desenvolvedor:
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
