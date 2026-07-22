import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Serviço | Tukanos",
  description: "Termos de Serviço oficiais do aplicativo Tukanos. Entenda as regras de uso, permissões de localização e notificações, garantias de privacidade e canais de suporte humanizado.",
};

const SECTIONS = [
  { id: "acceptance", title: "1. Aceitação dos Termos" },
  { id: "description", title: "2. Descrição do Serviço" },
  { id: "account", title: "3. Cadastro e Conta" },
  { id: "permissions", title: "4. Permissões (Localização e Notificações)" },
  { id: "acceptable-use", title: "5. Uso Aceitável" },
  { id: "intellectual-property", title: "6. Propriedade Intelectual" },
  { id: "privacy-data", title: "7. Privacidade e Proteção de Dados" },
  { id: "cancellation-deletion", title: "8. Cancelamento e Exclusão" },
  { id: "liability", title: "9. Limitação de Responsabilidade" },
  { id: "changes", title: "10. Alterações dos Termos" },
  { id: "jurisdiction", title: "11. Legislação e Foro" },
  { id: "contact", title: "12. Suporte Humanizado" },
];

export default function TukanosTermsOfService() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-amber-500 selection:text-white">
      {/* Top Decorative Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-amber-500 via-orange-500 to-emerald-500" />

      {/* Sticky Navigation Header */}
      <header className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href="/tukanos" className="group flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-amber-500 via-orange-500 to-emerald-600 text-white shadow-md shadow-amber-500/10 group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-zinc-900 to-zinc-700 dark:from-zinc-100 dark:to-zinc-300 bg-clip-text">
                Tukanos
              </span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 font-medium">Centro Legal</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
            <Link
              href="/tukanos/terms-of-service"
              className="px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-amber-600 dark:text-amber-400 shadow-sm font-semibold"
            >
              Termos de Serviço
            </Link>
            <Link
              href="/tukanos/privacy"
              className="px-4 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
            >
              Política de Privacidade
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-zinc-200/60 dark:border-zinc-800/60">
        <div className="absolute inset-0 bg-grid-zinc-900/[0.02] dark:bg-grid-white/[0.02] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/10 dark:bg-amber-500/5 blur-3xl rounded-full -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-400 border border-amber-200/80 dark:border-amber-900/50 mb-4">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            Última Atualização: 21 de julho de 2026
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
            Termos de Serviço
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Bem-vindo aos Termos de Serviço do Tukanos. Este documento rege o uso de nossos aplicativos e serviços. Por favor, leia com atenção.
          </p>
        </div>
      </section>

      {/* Main Content Layout */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          
          {/* Sidebar Navigation */}
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 px-3">
                  Índice dos Termos
                </h3>
                <nav className="space-y-1">
                  {SECTIONS.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150 font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              {/* Support Card */}
              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 shadow-sm space-y-2">
                <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Suporte Humanizado
                </div>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  Tem dúvidas ou precisa de ajuda direta sobre os termos?
                </p>
                <a
                  href="tel:+5562982399800"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-600 dark:text-amber-400 hover:underline pt-1"
                >
                  +55 (62) 98239-9800
                </a>
              </div>
            </div>
          </aside>

          {/* Legal Article Body */}
          <article className="lg:col-span-3 bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-10 shadow-sm backdrop-blur-sm space-y-10 text-zinc-700 dark:text-zinc-300 leading-relaxed">
            
            {/* Section 1 */}
            <section id="acceptance" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">1.</span> Aceitação dos Termos
              </h2>
              <p>
                Ao baixar, instalar, acessar ou utilizar o aplicativo móvel <strong>Tukanos</strong>, você declara ter lido, compreendido e concordado com a integralidade destes Termos de Serviço. Se você não concordar com qualquer condição aqui disposta, não deve utilizar o aplicativo.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 2 */}
            <section id="description" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">2.</span> Descrição do Serviço
              </h2>
              <p>
                O Tukanos é uma plataforma desenvolvida para proporcionar aos seus usuários ferramentas inteligentes e interativas. O aplicativo oferece funcionalidades baseadas em contexto e localização, alertas em tempo real e gerenciamento de perfil individual.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 3 */}
            <section id="account" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">3.</span> Cadastro e Conta do Usuário
              </h2>
              <p>
                Para utilizar os recursos completos do aplicativo, é necessário efetuar um cadastro fornecendo um endereço de <strong>e-mail válido</strong>.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Você é o único responsável por manter a confidencialidade do seu e-mail e credenciais de acesso.</li>
                <li>Todas as atividades realizadas na sua conta são de sua inteira responsabilidade.</li>
                <li>É proibido utilizar e-mails de terceiros sem autorização prévia.</li>
              </ul>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 4 */}
            <section id="permissions" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">4.</span> Permissões de Dispositivo
              </h2>
              <p>
                O funcionamento ideal do Tukanos depende de duas permissões essenciais no seu dispositivo:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 not-prose">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-base">
                    <span className="p-1.5 rounded bg-amber-500/10 text-amber-600 dark:text-amber-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      </svg>
                    </span>
                    Informações de Localização
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Utilizadas para contextualizar dados geográficos. Você pode conceder ou revogar a permissão de localização nas configurações do seu sistema operacional a qualquer momento.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 space-y-2">
                  <div className="flex items-center gap-2 font-bold text-zinc-900 dark:text-white text-base">
                    <span className="p-1.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                    </span>
                    Notificações Push
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Utilizadas para enviar avisos operacionais, alertas importantes e comunicados de serviço. O recebimento pode ser ajustado a qualquer tempo pelo usuário.
                  </p>
                </div>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 5 */}
            <section id="acceptable-use" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">5.</span> Uso Aceitável
              </h2>
              <p>Você se compromete a não utilizar o Tukanos para:</p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Qualquer atividade ilegal, fraudulenta ou não autorizada pela legislação.</li>
                <li>Tentar violar a segurança, praticar engenharia reversa ou descompilar qualquer código do aplicativo.</li>
                <li>Transmitir vírus, códigos maliciosos ou praticar ataques de negação de serviço.</li>
              </ul>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 6 */}
            <section id="intellectual-property" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">6.</span> Propriedade Intelectual
              </h2>
              <p>
                Todos os direitos de propriedade intelectual referentes ao Tukanos (design, marca, código-fonte, elementos visuais e conteúdos) pertencem exclusivamente aos desenvolvedores do aplicativo e estão protegidos pelas leis de propriedade intelectual vigentes.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 7 */}
            <section id="privacy-data" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">7.</span> Privacidade de Dados e Não Comercialização
              </h2>
              <p>
                A segurança e privacidade dos seus dados são fundamentais. Reafirmamos expressamente nestes Termos que:
              </p>
              <div className="p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 text-sm font-semibold text-emerald-900 dark:text-emerald-300">
                Os seus dados (localização, e-mail e dados de notificação) NÃO são vendidos, alugados ou comercializados para nenhuma outra empresa sob nenhuma circunstância.
              </div>
              <p className="text-sm">
                Para detalhes completos sobre o tratamento de dados, consulte nossa{" "}
                <Link href="/tukanos/privacy" className="text-amber-600 dark:text-amber-400 underline font-semibold">
                  Política de Privacidade
                </Link>.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 8 */}
            <section id="cancellation-deletion" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">8.</span> Cancelamento, Alteração e Exclusão de Conta
              </h2>
              <p>
                O usuário possui o direito de alterar dados ou cancelar sua conta e solicitar a exclusão de suas informações a qualquer tempo.
              </p>

              <div className="p-5 rounded-2xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-500/30 space-y-3">
                <h3 className="font-bold text-zinc-900 dark:text-white text-base">Canais de Solicitação</h3>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                  A solicitação de alteração ou exclusão de dados pode ser feita diretamente nas telas de perfil do aplicativo Tukanos ou pelo nosso <strong>suporte humanizado</strong> dedicado:
                </p>
                <div className="flex items-center gap-3 pt-1">
                  <a
                    href="tel:+5562982399800"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition-colors shadow-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    Suporte Humanizado: +55 (62) 98239-9800
                  </a>
                </div>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 9 */}
            <section id="liability" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">9.</span> Limitação de Responsabilidade
              </h2>
              <p>
                O aplicativo Tukanos é fornecido &quot;como está&quot; e &quot;conforme disponível&quot;. Embora nos esforcemos para garantir a máxima disponibilidade e precisão dos serviços, não garantimos a ausência ininterrupta de erros ou indisponibilidades temporárias decorrentes de manutenções ou fatores externos.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 10 */}
            <section id="changes" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">10.</span> Alterações dos Termos
              </h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. Quaisquer atualizações serão devidamente divulgadas nesta página com a atualização da data da revisão.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 11 */}
            <section id="jurisdiction" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">11.</span> Legislação e Foro
              </h2>
              <p>
                Estes Termos são regidos e interpretados de acordo com a legislação da República Federativa do Brasil, em especial pelo Código de Defesa do Consumidor e pela Lei Geral de Proteção de Dados (LGPD).
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 12 */}
            <section id="contact" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">12.</span> Suporte Humanizado
              </h2>
              <p>
                Fique à vontade para entrar em contato conosco para esclarecer qualquer dúvida sobre estes Termos de Serviço ou sobre o funcionamento do aplicativo:
              </p>

              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-3">
                <p className="font-extrabold text-zinc-900 dark:text-white text-base">Atendimento ao Usuário Tukanos</p>
                <p className="text-sm">
                  <strong>Telefone / WhatsApp:</strong>{" "}
                  <a href="tel:+5562982399800" className="text-amber-600 dark:text-amber-400 font-bold hover:underline">
                    +55 (62) 98239-9800
                  </a>
                </p>
              </div>
            </section>

          </article>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-850 bg-white dark:bg-zinc-900 py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} Tukanos. Todos os direitos reservados.</p>
          <p className="flex justify-center gap-3 text-zinc-400 dark:text-zinc-500">
            <Link href="/tukanos/terms-of-service" className="hover:text-amber-500 dark:hover:text-amber-400 hover:underline">Termos de Serviço</Link>
            <span>•</span>
            <Link href="/tukanos/privacy" className="hover:text-amber-500 dark:hover:text-amber-400 hover:underline">Política de Privacidade</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}
