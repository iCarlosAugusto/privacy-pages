import type { Metadata } from "next";
import Link from "next/link";
import { APP_NAME, AppIcon, OWNER_NAME, PRIVACY_PATH, TERMS_PATH } from "./_components/legal";

export const metadata: Metadata = {
  title: `${APP_NAME} | Centro Legal`,
  description: "Política de Privacidade e Termos de Uso do aplicativo Concursos Finder.",
};

const CARDS = [
  {
    href: TERMS_PATH,
    title: "Termos de Uso",
    cta: "Ver Termos",
    text: "Regras de uso, origem das informações dos concursos, notificações e limites de responsabilidade.",
  },
  {
    href: PRIVACY_PATH,
    title: "Política de Privacidade",
    cta: "Ver Privacidade",
    text: "Sem cadastro, sem rastreamento e sem coleta de dados pessoais. Tudo fica salvo só no seu aparelho.",
  },
];

const HIGHLIGHTS = [
  { label: "Cadastro", value: "Não exigido", text: "Sem login, nome, e-mail ou telefone." },
  { label: "Rastreamento", value: "Nenhum", text: "Sem publicidade, analytics ou rastreadores." },
  { label: "Seus dados", value: "Só no aparelho", text: "Concursos e alertas ficam no seu celular." },
];

export default function ConcursosFinderPortal() {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-emerald-500 selection:text-white flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl rounded-full -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] bg-sky-500/10 dark:bg-sky-500/5 blur-3xl rounded-full -z-10" />
      <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-600" />

      <main className="flex-1 max-w-5xl w-full mx-auto px-6 py-16 flex flex-col justify-center items-center gap-12">
        <div className="text-center space-y-4 max-w-2xl">
          <div className="inline-flex p-3.5 rounded-2xl bg-gradient-to-br from-emerald-500 to-sky-600 text-white shadow-xl shadow-emerald-500/20 mb-2">
            <AppIcon className="w-8 h-8" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white">
            {APP_NAME}{" "}
            <span className="bg-gradient-to-r from-emerald-500 to-sky-600 bg-clip-text text-transparent">Centro Legal</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400">
            Selecione um dos documentos abaixo para ler os Termos de Uso ou a Política de Privacidade do {APP_NAME}.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
          {CARDS.map((card) => (
            <Link key={card.href} href={card.href} className="group block relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500 to-sky-500 rounded-2xl blur opacity-25 group-hover:opacity-60 transition duration-300" />
              <div className="relative h-full p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm flex flex-col justify-between items-start gap-6 group-hover:-translate-y-1 transition-all duration-300">
                <div className="space-y-4">
                  <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {card.title} &rarr;
                  </h2>
                  <p className="text-sm leading-relaxed text-zinc-500 dark:text-zinc-400">{card.text}</p>
                </div>
                <span className="text-xs font-semibold px-3.5 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-200">
                  {card.cta}
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="w-full max-w-4xl p-6 sm:p-8 rounded-2xl border border-zinc-200/60 dark:border-zinc-800/60 bg-white/50 dark:bg-zinc-900/30 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center sm:text-left">
          {HIGHLIGHTS.map((h) => (
            <div key={h.label} className="space-y-1">
              <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-600 dark:text-emerald-400 block">{h.label}</span>
              <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200">{h.value}</p>
              <p className="text-xs text-zinc-400">{h.text}</p>
            </div>
          ))}
        </div>
      </main>

      <footer className="border-t border-zinc-200/80 dark:border-zinc-800/80 py-8 text-center text-xs text-zinc-400 dark:text-zinc-500">
        <p>© {new Date().getFullYear()} {OWNER_NAME}. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
