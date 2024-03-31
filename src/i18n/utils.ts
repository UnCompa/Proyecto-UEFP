import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL): keyof typeof ui {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]): string {
    return (ui[lang][key] || ui[defaultLang][key]) as string;
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function translatePath(path: string, l: keyof typeof ui = lang): string {
    return !showDefaultLang && l === defaultLang ? path : `/${l}${path}`;
  }
}
