export type PortfolioCategory = "Casamentos" | "15 anos" | "Ensaios" | "Comercial";

export type PortfolioItem = {
  category: PortfolioCategory;
  title: string;
  description: string;
  detail: string;
};
