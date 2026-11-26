import Image from "next/image";
import { brand, navItems } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-40 border-b border-linho-macio/10 bg-abeto-deep/80 backdrop-blur-xl">
      <div className="container-pad flex h-20 items-center justify-between gap-6">
        <a href="#" className="group flex items-center gap-3" aria-label="Wolfart Filmes inicio">
          <Image
            src="/brand/svg/primary-lockup-linho-macio.svg"
            alt={brand.name}
            width={150}
            height={88}
            priority
            className="brand-logo-light h-12 w-auto transition opacity-95 group-hover:opacity-100"
          />
        </a>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Navegacao principal">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.16em] text-fog/75 transition hover:text-cobre-desbotado"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <Button href="#orcamento" variant="secondary" className="hidden sm:inline-flex">
          Contato
        </Button>
      </div>
    </header>
  );
}
