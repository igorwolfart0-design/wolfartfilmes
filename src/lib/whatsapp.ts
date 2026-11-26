import { brand } from "@/lib/constants";
import type { QuoteFormValues } from "@/types/form";

export function createWhatsAppUrl(message: string) {
  return `https://wa.me/${brand.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function createQuoteMessage(values: QuoteFormValues) {
  return [
    "Ola, Wolfart Filmes. Gostaria de solicitar um orcamento.",
    "",
    `Nome: ${values.name}`,
    `Telefone: ${values.phone}`,
    `Email: ${values.email}`,
    `Tipo de evento: ${values.eventType}`,
    `Data: ${values.date}`,
    `Cidade: ${values.city}`,
    `Mensagem: ${values.message}`
  ].join("\n");
}
