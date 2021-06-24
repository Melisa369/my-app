import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import translationEN from "./shared/assets/en/translation.json";
import translationBG from "./shared/assets/bg/translation.json";


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
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng,
  });

export default i18n;