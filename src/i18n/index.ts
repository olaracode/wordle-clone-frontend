import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { landingTranslations } from "./landing";
const resources = {
  es: {
    translation: {
      landing: landingTranslations.en,
    },
  },
  en: {
    translation: {
      landing: landingTranslations.es,
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },

    // Other options
    supportedLngs: ["en", "es"], // Languages you support
    load: "languageOnly", // Will strip region code from language (e.g., 'en-US' becomes 'en')
  });

export default i18n;
