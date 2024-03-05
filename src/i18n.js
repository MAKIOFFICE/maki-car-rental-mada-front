import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import de from './locales/de.json'

function loadLocaleMessages() {
  return {
    en,
    fr,
    de,
  };
}

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "en",
  fallbackLocale: "de",
  messages: loadLocaleMessages(),
});

export default i18n;
