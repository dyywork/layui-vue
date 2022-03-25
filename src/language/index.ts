import { createI18n } from "vue-i18n";
import zh_CN from "./locales/zh_CN";
import en_US from "./locales/en_US";

const i18n = createI18n({
  legacy: false,
  locale: "en_US",
  messages: {
    zh_CN: zh_CN,
    en_US: en_US,
  },
});

export default i18n;
