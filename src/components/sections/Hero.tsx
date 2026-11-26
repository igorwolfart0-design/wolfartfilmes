import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-[92svh] overflow-hidden pt-20">
      <Image
        src="/images/hero-cinematic.png"
        alt="Producao audiovisual cinematografica em evento premium"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-abeto-deep via-abeto-deep/78 to-abeto/18" />
      <div className="absolute inset-0 bg-gradient-to-t from-abeto-deep via-transparent to-abeto-deep/30" />
      <div className="absolute inset-y-0 right-0 hidden w-1/3 bg-[url('/brand/backgrounds/solo-argiloso-743c30-1920x1080.jpg')] opacity-20 mix-blend-soft-light lg:block" />

      <div className="container-pad relative flex min-h-[calc(92svh-5rem)] items-center py-16">
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Fotografia e cinema autoral</p>
          <Image
            src="/brand/svg/wordmark-linho-macio.svg"
            alt="Wolfart Filmes"
            width={620}
            height={176}
            priority
            className="brand-logo-light h-auto w-full max-w-[34rem]"
          />
          <p className="mt-7 max-w-2xl text-lg leading-8 text-fog/80 sm:text-xl">
            Forca, presenca e sensibilidade artistica para transformar momentos reais em
            narrativas visuais que permanecem no tempo.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button href="#orcamento">Iniciar conversa</Button>
            <Button href="#portfolio" variant="secondary">
              Ver portfolio
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
