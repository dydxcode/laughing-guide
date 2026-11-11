import en from "@/dictionaries/en.json";
import id from "@/dictionaries/id.json";
import type { Locale } from "@/lib/locales";

export interface ArticleSection {
  title: string;
  paragraphs: string[];
  subsections: { title: string; text: string }[];
}

export interface LegalSection {
  title: string;
  paragraphs: string[];
}

export interface LegalDoc {
  metaTitle: string;
  metaDescription: string;
  title: string;
  updated: string;
  sections: LegalSection[];
}

export interface Dictionary {
  meta: {
    title: string;
    description: string;
    ogAlt: string;
    ogTagline: string;
  };
  common: {
    skip: string;
    navGuide: string;
    headerNavLabel: string;
    footerNavLabel: string;
    languageLabel: string;
    privacy: string;
    terms: string;
    rights: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  sponsor: {
    label: string;
    note: string;
    button: string;
  };
  article: {
    intro: string;
    sections: ArticleSection[];
  };
  privacy: LegalDoc;
  terms: LegalDoc;
}

const dictionaries: Record<Locale, Dictionary> = { en, id };

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale];
}
