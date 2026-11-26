import { brand, navItems } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-linho-macio/10 bg-abeto-deep/70 py-12">
      <div className="container-pad grid gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div>
          <p className="font-display text-3xl text-linho-macio">{brand.name}</p>
          <p className="mt-4 max-w-md text-sm leading-7 text-fog/70">
            Fotografia e cinema autoral para historias com presenca, atmosfera e memoria.
          </p>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cobre-desbotado">
            Navegacao
          </p>
          <div className="grid gap-3">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="text-sm text-fog/70 hover:text-linho-macio">
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-cobre-desbotado">
            Contato
          </p>
          <div className="grid gap-3 text-sm text-fog/70">
            <a href={`mailto:${brand.email}`} className="hover:text-linho-macio">
              {brand.email}
            </a>
            <a href={`tel:${brand.phone.replace(/\D/g, "")}`} className="hover:text-linho-macio">
              {brand.phone}
            </a>
            <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-linho-macio">
              Instagram
            </a>
            <span>{brand.city}</span>
          </div>
        </div>
      </div>

      <div className="container-pad mt-10 border-t border-linho-macio/10 pt-6 text-xs text-fog/45">
        &copy; {new Date().getFullYear()} Wolfart Filmes. Todos os direitos reservados.
      </div>
    </footer>
  );
}
