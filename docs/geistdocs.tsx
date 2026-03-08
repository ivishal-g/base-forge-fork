export const Logo = () => (
  <p className="font-semibold text-xl tracking-tight">base-forge</p>
);

export const github = {
  owner: "vercel",
  repo: "base-forge",
};

export const nav = [
  {
    label: "Docs",
    href: "/docs",
  },
  {
    label: "Source",
    href: `https://github.com/${github.owner}/${github.repo}/`,
  },
];

export const suggestions = [
  "What is base-forge?",
  "What can I build with base-forge?",
  "How do packages and apps work?",
  "What is a monorepo?",
];

export const title = "base-forge Documentation";

export const prompt =
  "You are a helpful assistant specializing in answering questions about base-forge, a production-grade Turborepo template for Next.js apps";

export const translations = {
  en: {
    displayName: "English",
  },
};
