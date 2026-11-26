import { testimonials } from "@/data/testimonials";
import { Section } from "@/components/ui/Section";

export function Testimonials() {
  return (
    <Section
      id="depoimentos"
      eyebrow="Depoimentos"
      title="Quando o filme volta, a memoria tambem volta."
    >
      <div className="grid gap-4 lg:grid-cols-3">
        {testimonials.map((testimonial) => (
          <figure
            key={testimonial.author}
            className="border border-linho-macio/10 bg-linho-macio/[0.04] p-7"
          >
            <blockquote className="text-lg leading-8 text-fog/80">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-linho-macio/10 pt-5">
              <p className="font-semibold text-linho-macio">{testimonial.author}</p>
              <p className="mt-1 text-sm text-cobre-desbotado">{testimonial.context}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
