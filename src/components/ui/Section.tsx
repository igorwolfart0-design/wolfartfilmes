import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  eyebrow?: string;
  title: string;
  description?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, description, children }: SectionProps) {
  return (
    <section id={id} className="py-20 sm:py-24 lg:py-28">
      <div className="container-pad">
        <div className="mb-10 max-w-3xl sm:mb-14">
          {eyebrow ? <p className="eyebrow mb-4">{eyebrow}</p> : null}
          <h2 className="font-display text-4xl leading-tight text-linho-macio sm:text-5xl lg:text-6xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-5 text-base leading-8 text-fog/78 sm:text-lg">{description}</p>
          ) : null}
        </div>
        {children}
      </div>
    </section>
  );
}
