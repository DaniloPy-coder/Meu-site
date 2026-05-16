import type { Metadata } from "next";
import "./globals.css";
import "bootstrap-icons/font/bootstrap-icons.css";

export const metadata: Metadata = {
  title: "DevDan | Portfolio",
  description: "Portfólio de Danilo José, Desenvolvedor Web",
  icons: {
    icon: "/favicon-48x48.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className="antialiased bg-dark text-ofcourse">{children}</body>
    </html>
  );
}
