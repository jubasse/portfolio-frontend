import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import common_en from './translations/en/common';
import common_fr from './translations/fr/common';

// the translations
// (tip move them in a JSON file and import them,
// or even better, manage them separated from your code: https://react.i18next.com/guides/multiple-translation-files)
const resources = {
  en: {
    common: common_en
  },
  fr: {
    common: common_fr,
  },
} as const; 

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ns: ['common'],
    defaultNS: 'common',
    resources,
  });

export default i18n;
