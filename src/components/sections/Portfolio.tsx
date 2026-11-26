import { portfolioItems } from "@/data/portfolio";
import { Section } from "@/components/ui/Section";

export function Portfolio() {
  return (
    <Section
      id="portfolio"
      eyebrow="Portfolio"
      title="Um territorio visual para filmes que carregam presenca."
      description="A area esta preparada para receber galerias, videos incorporados e estudos de caso sem perder a sobriedade da identidade."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        {portfolioItems.map((item, index) => (
          <article
            key={item.category}
            className="group relative min-h-80 overflow-hidden border border-linho-macio/10 bg-abeto-deep/35 p-7 transition hover:border-cobre-desbotado/60"
          >
            <div
              className="absolute inset-0 opacity-0 transition group-hover:opacity-100"
              style={{
                background:
                  index % 2 === 0
                    ? "linear-gradient(135deg, rgba(116,60,48,0.28), transparent 60%)"
                    : "linear-gradient(135deg, rgba(132,120,95,0.26), transparent 60%)"
              }}
            />
            <div className="absolute right-5 top-5 font-display text-7xl text-linho-macio/[0.04]">
              0{index + 1}
            </div>
            <div className="relative">
              <p className="eyebrow mb-8">{item.category}</p>
              <h3 className="max-w-md font-display text-3xl leading-tight text-linho-macio sm:text-4xl">
                {item.title}
              </h3>
              <p className="mt-5 max-w-xl text-sm leading-7 text-fog/75">{item.description}</p>
              <p className="mt-10 border-t border-linho-macio/10 pt-5 text-xs font-semibold uppercase tracking-[0.16em] text-cobre-desbotado/90">
                Em breve: filme, galeria e estudo de caso.
              </p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
