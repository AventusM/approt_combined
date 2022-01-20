import i18n from 'i18n-js';

export const Translate = (props) => {
  const {t} = i18n;
  const {term, options = {}} = props;
  return t(term, options);
};