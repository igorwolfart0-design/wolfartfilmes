import Link from "next/link";
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: never;
  };

type ButtonAsLink = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variants = {
  primary:
    "border-cobre-desbotado bg-cobre-desbotado text-abeto-deep hover:border-linho-macio hover:bg-linho-macio",
  secondary:
    "border-linho-macio/20 bg-linho-macio/[0.06] text-linho-macio hover:border-cobre-desbotado/75 hover:bg-linho-macio/[0.1]",
  ghost: "border-transparent bg-transparent text-linho-macio hover:text-cobre-desbotado"
};

export function Button({
  children,
  variant = "primary",
  className = "",
  ...props
}: ButtonProps) {
  const classes = `inline-flex min-h-12 items-center justify-center border px-6 text-sm font-semibold uppercase tracking-[0.16em] transition ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    const { href, ...anchorProps } = props;
    return (
      <Link href={href} className={classes} {...anchorProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
