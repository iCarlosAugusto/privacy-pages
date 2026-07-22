import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Centro de Privacidade & Termos de Serviço",
  description: "Portal central de privacidade, termos de serviço e políticas legais para nossos aplicativos.",
};

const APPS = [
  {
    name: "Tukanos",
    description: "Aplicativo móvel com funcionalidades baseadas em localização, e-mail e notificações push. Dados 100% protegidos e sem venda de informações.",
    gradient: "from-amber-500 via-orange-500 to-emerald-500",
    badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
    privacyUrl: "/tukanos/privacy",
    termsUrl: "/tukanos/terms-of-service",
    hubUrl: "/tukanos",
    isNew: true,
  },
  {
    name: "Axe",
    description: "Ferramenta e serviços com autenticação Supabase e notificações Firebase.",
    gradient: "from-rose-500 via-violet-600 to-indigo-600",
    badgeColor: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
    privacyUrl: "/axe/privacy",
    termsUrl: "/axe/terms-of-service",
    hubUrl: "/axe",
    isNew: false,
  },
  {
    name: "Fast Coin Converter",
    description: "Conversor de moedas rápido, seguro e focado na privacidade do usuário.",
    gradient: "from-blue-500 via-indigo-500 to-cyan-500",
    badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
    privacyUrl: "/fast-coin-converter/privacy",
    termsUrl: "/fast-coin-converter/terms-of-service",
    hubUrl: "/fast-coin-converter/privacy",
    isNew: false,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans flex flex-col justify-between relative overflow-hidden">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-indigo-500/10 blur-3xl rounded-full -z-10" />

      {/* Main Container */}
      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-20 flex flex-col items-center justify-center gap-12">
        
        {/* Header Section */}
        <div className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 mb-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            Portal de Políticas & Termos Oficiais
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            Centro de <span className="bg-gradient-to-r from-amber-500 via-rose-500 to-indigo-500 bg-clip-text text-transparent">Privacidade & Legal</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            Selecione um dos aplicativos abaixo para acessar a Política de Privacidade e os Termos de Serviço correspondentes.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {APPS.map((app) => (
            <div
              key={app.name}
              className="group relative flex flex-col justify-between p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${app.gradient}`} />
                  {app.isNew && (
                    <span className="text-[10px] uppercase tracking-wider font-extrabold px-2 py-0.5 rounded-full bg-amber-500 text-white">
                      Novo
                    </span>
                  )}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-zinc-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                    {app.name}
                  </h2>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-2 leading-relaxed">
                    {app.description}
                  </p>
                </div>
              </div>

              <div className="pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-col gap-2 mt-6">
                <Link
                  href={app.privacyUrl}
                  className="w-full text-center py-2 px-3 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-amber-500 hover:text-white dark:hover:bg-amber-500 text-xs font-semibold text-zinc-700 dark:text-zinc-200 transition-colors"
                >
                  Política de Privacidade
                </Link>
                <Link
                  href={app.termsUrl}
                  className="w-full text-center py-2 px-3 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-xs font-medium text-zinc-600 dark:text-zinc-400 transition-colors"
                >
                  Termos de Serviço
                </Link>
              </div>
            </div>
          ))}
        </div>

      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-8 text-center text-xs text-zinc-400 dark:text-zinc-500 bg-white/20 dark:bg-zinc-900/10">
        <p>© {new Date().getFullYear()} Centro Legal. Todos os direitos reservados.</p>
      </footer>

    </div>
  );
}
