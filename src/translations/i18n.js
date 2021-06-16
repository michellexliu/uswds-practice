import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_FR } from "./fr/translations";
import { TRANSLATIONS_ES } from "./es/translations";
import { TRANSLATIONS_DE } from "./de/translations";
import { TRANSLATIONS_ZH } from "./zh/translations";
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
     resources: {
        en: {
          translation: TRANSLATIONS_EN
        },
        fr: {
          translation: TRANSLATIONS_FR
        },
        es: {
          translation: TRANSLATIONS_ES
        },
        de: {
          translation: TRANSLATIONS_DE
        },
        zh: {
          translation: TRANSLATIONS_ZH
        },
     },
     lng: "zh",
     interpolation: {
       escapeValue: false // react already safes from xss
     }
  });
 
 export default i18n;