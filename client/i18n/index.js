import * as Localization from 'expo-localization';
import i18n from 'i18n-js';

import * as enTranslation from './translations/en.json';
import * as fiTranslation from './translations/fi.json';
// TODO: Swedish translations

i18n.translations = {
  en: enTranslation,
  fi: fiTranslation,
};

//i18n.locale = 'fi'; --> Quick testing purposes
i18n.locale = Localization.locale;
i18n.fallbacks = true;

export default i18n;
