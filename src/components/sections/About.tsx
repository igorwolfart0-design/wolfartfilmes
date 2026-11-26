import { Section } from "@/components/ui/Section";

export function About() {
  return (
    <Section
      id="manifesto"
      eyebrow="Manifesto"
      title="Forca para observar. Arte para fazer sentir."
      description="A Wolfart Filmes une o instinto do WOLF a sensibilidade do ART: presenca, foco e linguagem visual para transformar registro em memoria."
    >
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div className="border-l border-cobre-desbotado/70 pl-6">
          <p className="font-display text-3xl leading-tight text-linho-macio sm:text-4xl">
            A marca existe para capturar, sentir e eternizar momentos que merecem permanecer.
          </p>
        </div>
        <div className="grid gap-6 text-base leading-8 text-fog/75 sm:grid-cols-2">
          <p>
            A referencia ao lobo aparece como percepcao, intensidade e antecipacao, sem leitura
            agressiva ou literal. O olhar encontra significado antes que a cena desapareca.
          </p>
          <p>
            A direcao visual deve ser elegante, organica e cinematografica: tecnica precisa,
            emocao contida e acabamento de alto valor percebido.
          </p>
        </div>
      </div>
    </Section>
  );
}
