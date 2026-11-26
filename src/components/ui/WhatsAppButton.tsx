import { createWhatsAppUrl } from "@/lib/whatsapp";

export function WhatsAppButton() {
  const message =
    "Ola, Wolfart Filmes. Gostaria de conversar sobre um projeto audiovisual.";

  return (
    <a
      href={createWhatsAppUrl(message)}
      aria-label="Conversar com a Wolfart Filmes no WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full border border-linho-macio/20 bg-abeto text-sm font-bold text-linho-macio shadow-brand-depth transition hover:scale-105 hover:bg-solo-argiloso focus:outline-none focus:ring-2 focus:ring-cobre-desbotado focus:ring-offset-2 focus:ring-offset-abeto-deep"
    >
      WA
    </a>
  );
}
