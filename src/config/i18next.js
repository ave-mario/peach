import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from 'locale/en';
import ru from 'locale/ru';

i18n.use(initReactI18next).init({
  resources: {
    ru,
    en,
  },
  fallbackLng: 'en',
  debug: true,
  ns: ['errors', 'lables', 'buttons'],
  defaultNS: 'lables',
  interpolation: {
    escapeValue: false,
    formatSeparator: ',',
  },
  react: {
    wait: true,
  },
});

export default i18n;
