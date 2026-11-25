import Link from "next/link";
import type { ReactNode } from "react";

export const APP_NAME = "Concursos Finder";
export const OWNER_NAME = "Carlos Vieira";
// Preencha com o CPF ou CNPJ para exibi-lo nos documentos. Vazio = não exibido.
export const OWNER_DOCUMENT = "";
export const CONTACT_EMAIL = "augusto.dev@proton.me";
export const LAST_UPDATED = "25 de novembro de 2026";

export const BASE_PATH = "/concursos-finder";
export const PRIVACY_PATH = `${BASE_PATH}/privacy`;
export const TERMS_PATH = `${BASE_PATH}/terms-of-service`;

export function Owner() {
  return (
    <>
      <strong>{OWNER_NAME}</strong>
      {OWNER_DOCUMENT ? `, ${OWNER_DOCUMENT}` : null}
    </>
  );
}

export function Email() {
  return (
    <a
      href={`mailto:${CONTACT_EMAIL}`}
      className="font-semibold text-emerald-700 dark:text-emerald-400 hover:underline"
    >
      {CONTACT_EMAIL}
    </a>
  );
}

export function AppIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 100-15 7.5 7.5 0 000 15z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7.5 10.5l2 2 3.5-3.5" />
    </svg>
  );
}

type Section = { id: string; title: string };

export function LegalShell({
  active,
  title,
  intro,
  sections,
  children,
}: {
  active: "privacy" | "terms";
  title: string;
  intro: ReactNode;
  sections: Section[];
  children: ReactNode;
}) {
  const tab = (isActive: boolean) =>
    isActive
      ? "px-4 py-1.5 rounded-md bg-white dark:bg-zinc-700 text-emerald-700 dark:text-emerald-400 shadow-sm"
      : "px-4 py-1.5 rounded-md text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors duration-150";

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100 font-sans selection:bg-emerald-500 selection:text-white">
      <div className="h-2 w-full bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-600" />

      <header className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/70 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Link href={BASE_PATH} className="group flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-gradient-to-br from-emerald-500 to-sky-600 text-white shadow-md shadow-emerald-500/10 group-hover:scale-105 transition-transform duration-200">
              <AppIcon />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">{APP_NAME}</span>
              <span className="block text-xs text-zinc-500 dark:text-zinc-400 font-medium">Centro Legal</span>
            </div>
          </Link>
          <nav className="flex items-center gap-1.5 p-1 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-sm font-medium">
            <Link href={TERMS_PATH} className={tab(active === "terms")}>
              Termos de Uso
            </Link>
            <Link href={PRIVACY_PATH} className={tab(active === "privacy")}>
              Política de Privacidade
            </Link>
          </nav>
        </div>
      </header>

      <section className="relative overflow-hidden py-16 sm:py-20 border-b border-zinc-100 dark:border-zinc-900">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl rounded-full -z-10" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Última atualização: {LAST_UPDATED}
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-zinc-900 dark:text-white mb-6">
            {title}
          </h1>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">{intro}</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-6 py-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <aside className="lg:col-span-1 hidden lg:block">
            <div className="sticky top-28 space-y-6">
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3 px-3">
                  Conteúdo
                </h3>
                <nav className="space-y-1">
                  {sections.map((sec) => (
                    <a
                      key={sec.id}
                      href={`#${sec.id}`}
                      className="block px-3 py-2 rounded-lg text-sm text-zinc-600 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-400 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-all duration-150 font-medium"
                    >
                      {sec.title}
                    </a>
                  ))}
                </nav>
              </div>

              <div className="p-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50">
                <h4 className="font-bold text-sm mb-1">Tem dúvidas?</h4>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 mb-3">
                  Fale diretamente com o desenvolvedor.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 dark:text-emerald-400 hover:underline break-all"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
            </div>
          </aside>

          <article className="lg:col-span-3 bg-white dark:bg-zinc-900/40 border border-zinc-200/60 dark:border-zinc-800/40 rounded-2xl p-6 sm:p-10 shadow-sm space-y-10">
            {children}
          </article>
        </div>
      </main>

      <footer className="mt-auto border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
        <div className="max-w-6xl mx-auto px-6 space-y-2">
          <p>© {new Date().getFullYear()} {OWNER_NAME}. Todos os direitos reservados.</p>
          <p className="flex justify-center gap-3 text-zinc-400 dark:text-zinc-500">
            <Link href={TERMS_PATH} className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">Termos de Uso</Link>
            <span>•</span>
            <Link href={PRIVACY_PATH} className="hover:text-emerald-600 dark:hover:text-emerald-400 hover:underline">Política de Privacidade</Link>
          </p>
        </div>
      </footer>
    </div>
  );
}

export function LegalSection({
  id,
  number,
  title,
  children,
  last = false,
}: {
  id: string;
  number: number;
  title: string;
  children: ReactNode;
  last?: boolean;
}) {
  return (
    <>
      <section id={id} className="scroll-mt-24">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white flex items-center gap-2 mb-4">
          <span className="text-emerald-600 dark:text-emerald-400">{number}.</span> {title}
        </h2>
        <div className="text-zinc-600 dark:text-zinc-400 leading-relaxed space-y-3">{children}</div>
      </section>
      {!last && <hr className="border-zinc-200 dark:border-zinc-800" />}
    </>
  );
}

export function List({ children }: { children: ReactNode }) {
  return <ul className="list-disc pl-5 space-y-2">{children}</ul>;
}

export function Callout({ children }: { children: ReactNode }) {
  return (
    <div className="p-5 rounded-xl border border-emerald-100 dark:border-emerald-950/60 bg-emerald-50/40 dark:bg-emerald-950/10 text-zinc-700 dark:text-zinc-300">
      {children}
    </div>
  );
}

export function ContactCard() {
  return (
    <div className="p-5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 mt-4 space-y-2">
      <p className="font-semibold text-zinc-900 dark:text-white">
        {OWNER_NAME}
        {OWNER_DOCUMENT ? ` — ${OWNER_DOCUMENT}` : null}
      </p>
      <p className="text-sm">
        E-mail: <Email />
      </p>
    </div>
  );
}
