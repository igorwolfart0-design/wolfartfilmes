import { faqItems } from "@/data/faq";
import { Section } from "@/components/ui/Section";

export function FAQ() {
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title="Perguntas frequentes antes do primeiro contato."
    >
      <div className="divide-y divide-linho-macio/10 border-y border-linho-macio/10">
        {faqItems.map((item) => (
          <details key={item.question} className="group py-6">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 text-left font-display text-2xl text-linho-macio">
              {item.question}
              <span className="grid h-8 w-8 shrink-0 place-items-center border border-linho-macio/15 text-sm text-cobre-desbotado transition-transform duration-150 group-open:rotate-45">
                +
              </span>
            </summary>
            <p className="mt-4 max-w-3xl text-base leading-8 text-fog/75">{item.answer}</p>
          </details>
        ))}
      </div>
    </Section>
  );
}
