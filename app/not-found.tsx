import type { Metadata } from "next";
import Link from "next/link";
import NotFoundReticle from "../components/NotFoundReticle";

export const metadata: Metadata = {
  title: "404 — Sinal perdido · João Rodrigo",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="nf-page">
      <div className="nf-frame">
        <span className="nf-corner nf-corner-tl" />
        <span className="nf-corner nf-corner-tr" />
        <span className="nf-corner nf-corner-bl" />
        <span className="nf-corner nf-corner-br" />

        <NotFoundReticle text="[ NÃO ENCONTRADO · 0.00 ]" />

        <p className="nf-numeral">404</p>

        <p className="nf-sub">Sinal perdido. Esta página não está no quadro.</p>

        <Link href="/" className="nf-link">
          ←&nbsp;&nbsp;Voltar ao início
        </Link>
      </div>
    </main>
  );
}
