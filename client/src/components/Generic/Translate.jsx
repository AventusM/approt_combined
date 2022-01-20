import i18n from 'i18n-js';
import {useSelector} from "react-redux";

export const Translate = (props) => {
  const {t} = i18n;
  const {lang} = useSelector(state => state.langData);
  const {term, options = {}} = props;
  
  return t(term, {locale: lang, ...options});
};