import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | Tukanos",
  description: "Política de Privacidade oficial do aplicativo Tukanos. Saiba como gerenciamos seus dados de localização, e-mail e notificações, nosso compromisso de não vender dados e como solicitar a exclusão ou alteração de suas informações.",
};

const SECTIONS = [
  { id: "introduction", title: "1. Introdução" },
  { id: "data-collection", title: "2. Informações que Coletamos" },
  { id: "data-usage", title: "3. Como Utilizamos os Dados" },
  { id: "no-data-sale", title: "4. Não Venda de Dados" },
  { id: "user-rights", title: "5. Direitos do Usuário (Exclusão e Alteração)" },
  { id: "data-security", title: "6. Segurança e Armazenamento" },
  { id: "third-party", title: "7. Compartilhamento Necessário com Provedores" },
  { id: "changes", title: "8. Alterações nesta Política" },
  { id: "contact", title: "9. Suporte Humanizado e Atendimento" },
];

export default function TukanosPrivacyPolicy() {
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
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 font-medium">Centro Legal & Privacidade</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
            <Link
              href="/tukanos/terms-of-service"
              className="px-4 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150"
            >
              Termos de Serviço
            </Link>
            <Link
              href="/tukanos/privacy"
              className="px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-amber-600 dark:text-amber-400 shadow-sm font-semibold"
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
            Política de Privacidade
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            No Tukanos, levamos a proteção dos seus dados pessoais a sério. Esta política detalha de forma transparente quais informações coletamos, como as usamos e como garante a proteção total da sua privacidade.
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
                  Navegação no Documento
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
                  Precisa alterar ou excluir seus dados? Fale diretamente com nossa equipe de suporte humanizado.
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
            
            {/* Quick Summary Cards Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 not-prose mb-8">
              
              <div className="p-4 rounded-xl border border-amber-200/80 dark:border-amber-900/40 bg-amber-50/30 dark:bg-amber-950/10">
                <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">Dados Coletados</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Localização, e-mail e permissão de notificações necessários para o uso do aplicativo.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-emerald-200/80 dark:border-emerald-900/40 bg-emerald-50/30 dark:bg-emerald-950/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">Sem Venda de Dados</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Seus dados não são vendidos para nenhuma outra empresa ou terceiro comercial sob nenhuma circunstância.
                </p>
              </div>

              <div className="p-4 rounded-xl border border-orange-200/80 dark:border-orange-900/40 bg-orange-50/30 dark:bg-orange-950/10">
                <div className="w-8 h-8 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-2">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h4 className="font-bold text-zinc-900 dark:text-white text-sm mb-1">Alteração & Exclusão</h4>
                <p className="text-xs text-zinc-600 dark:text-zinc-400">
                  Solicite a alteração ou exclusão total a qualquer hora via aplicativo ou suporte humanizado: <strong className="whitespace-nowrap">+55 (62) 98239-9800</strong>.
                </p>
              </div>

            </div>

            {/* Section 1 */}
            <section id="introduction" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">1.</span> Introdução
              </h2>
              <p>
                Esta Política de Privacidade descreve como a equipe do aplicativo <strong>Tukanos</strong> (&quot;nós&quot;, &quot;nosso&quot; ou &quot;Aplicativo&quot;) coleta, utiliza, armazena e protege as suas informações pessoais quando você instala, acessa ou utiliza nossos serviços.
              </p>
              <p>
                Ao utilizar o Tukanos, você aceita as práticas descritas nesta política. Operamos em estrita conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018) e com os padrões internacionais de segurança da informação.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 2 */}
            <section id="data-collection" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">2.</span> Informações que Coletamos
              </h2>
              <p>
                Para disponibilizar as funcionalidades essenciais do aplicativo Tukanos e garantir a melhor experiência possível, coletamos apenas os dados estritamente necessários:
              </p>
              
              <div className="space-y-4 my-4">
                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Informações de Localização</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      Coletamos dados precisos ou aproximados de localização do seu dispositivo quando o aplicativo está em uso (ou em segundo plano, se devidamente autorizado), exclusivamente para fornecer funcionalidades baseadas em geolocalização e contextualização geográfica no app.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-orange-500/10 text-orange-600 dark:text-orange-400 shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Endereço de E-mail</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      Coletamos seu e-mail no momento da criação da conta para identificação do usuário, autenticação segura, recuperação de acesso e envio de comunicações essenciais sobre a sua conta.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 shrink-0 mt-1">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-zinc-900 dark:text-white text-base">Tokens de Notificação (Push Notifications)</h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-1">
                      Coletamos e armazenamos o token de notificação gerado pelo seu dispositivo móvel para permitir o envio de alertas importantes, lembretes e atualizações relativas ao serviço.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 3 */}
            <section id="data-usage" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">3.</span> Como Utilizamos os Dados
              </h2>
              <p>
                As informações coletadas são utilizadas exclusivamente para os seguintes propósitos legítimos:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li>Permitir o funcionamento regular e eficiente do aplicativo Tukanos no seu dispositivo.</li>
                <li>Autenticar o acesso do usuário e proteger sua conta contra invasões ou acessos não autorizados.</li>
                <li>Fornecer recursos e funcionalidades personalizadas de acordo com a sua localização.</li>
                <li>Enviar notificações push operacionais, alertas de sistema e atualizações de serviço.</li>
                <li>Atender às solicitações de suporte e prestar assistência técnica humanizada.</li>
              </ul>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 4 */}
            <section id="no-data-sale" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">4.</span> Compromisso Absoluto: Não Venda de Dados
              </h2>
              <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 space-y-3">
                <div className="flex items-center gap-3">
                  <span className="p-2 rounded-lg bg-emerald-500 text-white">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  <h3 className="font-extrabold text-lg text-emerald-900 dark:text-emerald-300">
                    Os seus dados NÃO são vendidos para nenhuma outra empresa.
                  </h3>
                </div>
                <p className="text-sm text-emerald-800 dark:text-emerald-400 leading-relaxed">
                  Garantimos categoricamente que o Tukanos <strong>não vende, aluga, comercializa ou repassa</strong> seus dados pessoais (incluindo e-mail, histórico de localização ou registros de notificação) para nenhuma empresa, anunciante, corretor de dados ou parceiro comercial.
                </p>
                <p className="text-sm text-emerald-800 dark:text-emerald-400 leading-relaxed">
                  Sua privacidade não é um produto negociável. Todo o processamento de dados serve unicamente para entregar a experiência do aplicativo a você.
                </p>
              </div>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 5 */}
            <section id="user-rights" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">5.</span> Direitos do Usuário: Exclusão e Alteração
              </h2>
              <p>
                Você é o titular dos seus dados pessoais e possui pleno direito de controlar como suas informações são tratadas. De acordo com a legislação aplicável (LGPD), você pode solicitar a <strong>alteração</strong> ou <strong>exclusão definitiva</strong> dos seus dados a qualquer momento.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-4 not-prose">
                {/* Method 1: App */}
                <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base">Via Aplicativo Tukanos</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Acesse a aba <strong>Configurações / Perfil</strong> no próprio aplicativo para editar suas informações ou solicitar a exclusão direta da sua conta e dados armazenados.
                  </p>
                </div>

                {/* Method 2: Human Support */}
                <div className="p-5 rounded-xl border border-amber-500/30 bg-amber-500/5 dark:bg-amber-950/20 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-zinc-900 dark:text-white text-base">Suporte Humanizado</h3>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    Prefere falar com um atendente humano? Entre em contato a qualquer momento pelo suporte via telefone ou WhatsApp:
                  </p>
                  <a
                    href="tel:+5562982399800"
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500 text-white font-bold text-xs hover:bg-amber-600 transition-colors shadow-sm mt-1"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    +55 (62) 98239-9800
                  </a>
                </div>
              </div>

              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                Ao receber uma solicitação de exclusão, todos os seus dados pessoais associados serão removidos permanentemente dos nossos servidores em até 5 (cinco) dias úteis, respeitadas apenas eventuais obrigações legais de guarda.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 6 */}
            <section id="data-security" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">6.</span> Segurança e Armazenamento
              </h2>
              <p>
                Adotamos medidas técnicas, físicas e administrativas rigorosas para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição imprevista:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-sm">
                <li><strong>Criptografia em Trânsito:</strong> Toda comunicação entre o seu aplicativo e nossos servidores é protegida pelo protocolo HTTPS (TLS/SSL) com padrões modernos de criptografia.</li>
                <li><strong>Controle de Acesso Rígido:</strong> Apenas sistemas autorizados possuem acesso aos servidores de dados.</li>
                <li><strong>Armazenamento Seguro:</strong> Credenciais e senhas são tratadas com hashes criptográficos irreversíveis.</li>
              </ul>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 7 */}
            <section id="third-party" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">7.</span> Compartilhamento Restrito com Provedores
              </h2>
              <p>
                Não compartilhamos dados com terceiros para fins comerciais. O compartilhamento ocorre estritamente com provedores de infraestrutura de tecnologia essenciais à operação (por exemplo, serviços de hospedagem na nuvem e entrega de mensagens push), sob acordos estritos de confidencialidade e conformidade legal.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 8 */}
            <section id="changes" className="scroll-mt-28 space-y-3">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">8.</span> Alterações nesta Política
              </h2>
              <p>
                Podemos atualizar esta Política de Privacidade periodicamente para refletir melhorias no aplicativo ou mudanças regulatórias. Notificaremos os usuários sobre alterações relevantes através do próprio aplicativo ou por e-mail antes que entrem em vigor.
              </p>
              <p className="text-sm text-zinc-500">
                Data da última revisão: 21 de julho de 2026.
              </p>
            </section>

            <hr className="border-zinc-200 dark:border-zinc-800" />

            {/* Section 9 */}
            <section id="contact" className="scroll-mt-28 space-y-4">
              <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2">
                <span className="text-amber-500">9.</span> Suporte Humanizado e Atendimento
              </h2>
              <p>
                Se você tiver qualquer dúvida sobre esta política, desejar exercitar seus direitos de titular de dados ou requerer a alteração ou exclusão do seu cadastro, entre em contato através dos nossos canais oficiais:
              </p>

              <div className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-amber-500 text-white shadow-md">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-extrabold text-zinc-900 dark:text-white text-base">Suporte Humanizado Tukanos</h3>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400">Atendimento direto com nossos especialistas</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm pt-2 border-t border-zinc-200 dark:border-zinc-800">
                  <div>
                    <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">Telefone & WhatsApp Suporte</span>
                    <a href="tel:+5562982399800" className="font-bold text-amber-600 dark:text-amber-400 hover:underline text-base">
                      +55 (62) 98239-9800
                    </a>
                  </div>
                  <div>
                    <span className="text-xs uppercase font-bold text-zinc-400 block mb-1">Canais de Solicitação</span>
                    <span className="font-medium text-zinc-800 dark:text-zinc-200">
                      Disponível no app Tukanos e via suporte por telefone/mensagem
                    </span>
                  </div>
                </div>
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
