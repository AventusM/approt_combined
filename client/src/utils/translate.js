// Wrapper for i18n.t(...)
// Used in places where <Translate /> jsx doesn't work
// Does the same thing, though.
// --> Set language if set in redux/memory, otherwise use device locale
import i18n from 'i18n-js';
import { useSelector } from 'react-redux';

export const translate = (term) => {
  const { lang } = useSelector((state) => state.langData);

  return i18n.t(term, {
    locale: lang,
  });
};
