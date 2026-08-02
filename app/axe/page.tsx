import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Zambi | Centro Legal",
  description: "Documentos legais oficiais, termos de serviço e políticas de privacidade para o aplicativo Zambi.",
};

export default function AxePortal() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-rose-500 selection:text-white flex flex-col justify-between relative overflow-hidden">
      
      {/* Background decorations */}
      <div className="absolute inset-0 bg-grid-zinc-900/[0.02] dark:bg-grid-white/[0.02] -z-10" />
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-rose-500/10 dark:bg-rose-500/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-violet-500/10 dark:bg-violet-500/5 blur-3xl rounded-full -z-10" />

      {/* Top Border Accent */}
      <div className="h-2 w-full bg-gradient-to-r from-rose-500 via-violet-600 to-indigo-600" />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 flex flex-col justify-center items-center gap-12">
        
        {/* Portal Header */}
        <div className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-rose-500 to-violet-600 text-white shadow-xl shadow-rose-500/20 mb-2 scale-105 hover:scale-110 transition-transform duration-300">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 9c3 0 5-2 6-5 0 3 2 5 5 6-3 1-5 3-5 6z" />
            </svg>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            Zambi <span className="bg-gradient-to-r from-rose-500 to-violet-600 bg-clip-text text-transparent">Centro Legal</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Selecione um dos documentos abaixo para revisar os termos de serviço ou as políticas de privacidade oficiais que regem o uso do Zambi.
          </p>
        </div>

        {/* Selection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          
          {/* Terms Card */}
          <Link href="/axe/terms-of-service" className="group block relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-violet-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-300" />
            <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex flex-col justify-between items-start gap-6 group-hover:translate-y-[-4px] transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-rose-500/10 dark:bg-rose-500/20 text-rose-600 dark:text-rose-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-rose-500 dark:group-hover:text-rose-400 transition-colors">
                  Termos de Serviço &rarr;
                </h2>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Um resumo simples e claro das regras de uso do aplicativo, termos de licenciamento e condições operacionais gerais.
                </p>
              </div>
              <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-rose-500 group-hover:text-white transition-colors duration-200">
                Ver Termos
              </span>
            </div>
          </Link>

          {/* Privacy Policy Card */}
          <Link href="/axe/privacy" className="group block relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-300" />
            <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex flex-col justify-between items-start gap-6 group-hover:translate-y-[-4px] transition-all duration-300">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 dark:bg-violet-500/20 text-violet-600 dark:text-violet-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-violet-500 dark:group-hover:text-violet-400 transition-colors">
                  Política de Privacidade &rarr;
                </h2>
                <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">
                  Detalhes sobre segurança dos dados, infraestrutura do Supabase, rastreamento do Firebase e nossa política rígida contra a venda de dados.
                </p>
              </div>
              <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-violet-500 group-hover:text-white transition-colors duration-200">
                Ver Privacidade
              </span>
            </div>
          </Link>

        </div>

        {/* Highlight Summary Info */}
        <div className="w-full max-w-4xl p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          
          <div className="space-y-1">
            <span className="text-xs uppercase tracking-wider font-extrabold text-rose-500 dark:text-rose-400 block">Banco & Autenticação</span>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Parceria com Supabase</p>
            <p className="text-xs text-zinc-400">Todas as operações do banco de dados e perfis rodam de forma criptografada.</p>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 sm:border-x border-zinc-200/80 dark:border-zinc-800/80 pt-6 sm:pt-0 sm:px-6">
            <span className="text-xs uppercase tracking-wider font-extrabold text-violet-500 dark:text-violet-400 block">Notificações</span>
            <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">Suporte pelo Firebase</p>
            <p className="text-xs text-zinc-400">Alertas de push e telemetria básica de desempenho são processados com segurança.</p>
          </div>

          <div className="space-y-1 border-t sm:border-t-0 pt-6 sm:pt-0">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-500 dark:text-emerald-400 block">Venda de Dados</span>
            <p className="text-sm font-semibold text-emerald-600 dark:text-emerald-400">100% Proibida</p>
            <p className="text-xs text-zinc-400">Garantimos que nenhuma de suas informações pessoais ou de telemetria é vendida.</p>
          </div>

        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-8 text-center text-xs text-zinc-400 dark:text-zinc-500 bg-white/20 dark:bg-zinc-900/10">
        <p>© {new Date().getFullYear()} Carlos Vieira. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
