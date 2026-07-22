import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Centro Legal & Privacidade",
  description: "Políticas de Privacidade e Termos de Serviço oficiais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="h-full font-sans antialiased"
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

