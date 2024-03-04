import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import zh from './locales/zh.json'
import de from './locales/de.json'
import es from './locales/es.json'

function loadLocaleMessages() {
  return {
    en,
    fr,
    zh,
    de,
    es,
  };
}

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "en",
  fallbackLocale: "zh",
  fallbackLocale: "de",
  fallbackLocale: "es",
  messages: loadLocaleMessages(),
});

export default i18n;
