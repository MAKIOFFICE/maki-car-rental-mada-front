import { createI18n } from "vue-i18n";
import en from "./locales/en.json";
import fr from "./locales/fr.json";

function loadLocaleMessages() {
  return {
    en,
    fr,
  };
}

const i18n = createI18n({
  legacy: false,
  locale: "fr",
  fallbackLocale: "en",
  messages: loadLocaleMessages(),
});

export default i18n;
