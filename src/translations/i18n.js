import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
 
import { TRANSLATIONS_EN } from "./en/translations";
 
i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
     resources: {
        en: {
          translation: TRANSLATIONS_EN
        }
     },
     lng: "en",
     interpolation: {
       escapeValue: false // react already safes from xss
     }
  });
 
 export default i18n;