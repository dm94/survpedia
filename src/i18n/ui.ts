import { en } from "./translations/en";
import { es } from "./translations/es";

export const languages = {
  es: 'Español',
  en: 'English',
};

export const defaultLang = 'en';

export const ui = {
  es: es,
  en: en,
} as const;
