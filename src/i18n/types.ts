// Types for nested translation structure
interface ButtonTranslations {
  login: string;
  register: string;
  playNow: string;
}

interface AboutTranslations {
  title: string;
  description: string;
  techStack: {
    title: string;
    items: string[];
  };
  projectDescription: string;
  portfolio: string;
}

interface HeroTranslations {
  welcome: string;
  subtitle: string;
}

export interface LandingTranslations {
  hero: HeroTranslations;
  buttons: ButtonTranslations;
  about: AboutTranslations;
  footer: string;
}

export type SupportedLanguagesT = "es" | "en";

export type TranslationSection<T> = Record<SupportedLanguagesT, T>;
