import { portfolioItems } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Servicos"
      title="Narrativas visuais para pessoas, eventos e marcas."
      description="Cada frente de atuacao preserva o mesmo criterio: olhar documental, direcao sensivel e acabamento cinematografico."
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {portfolioItems.map((item) => (
          <article key={item.category} className="brand-panel min-h-72 p-6">
            <p className="eyebrow mb-8">{item.category}</p>
            <h3 className="font-display text-3xl leading-tight text-linho-macio">
              {item.title}
            </h3>
            <p className="mt-5 text-sm leading-7 text-fog/75">{item.description}</p>
            <p className="mt-8 border-t border-linho-macio/10 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-cobre-desbotado">
              {item.detail}
            </p>
          </article>
        ))}
      </div>
    </Section>
  );
}
