import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-xhr-backend";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "../public/assets/locales/en/translation.json";
import translationBG from "../public/assets/locales/bg/translation.json";


const fallbackLng = ["en"];
const availableLanguages = ["en", "bg"];

const resources = {
  en: {
    translation: translationEN
  },
  bg: {
    translation: translationBG
  }
};

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,

   
  });

export default i18n;