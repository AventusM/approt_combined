import { SET_CURRENT_LANGUAGE, LANG_KEY } from '../../constants';
import securestorage from '../../securestorage';

const setLang = (language) => {
  return {
    type: SET_CURRENT_LANGUAGE,
    payload: language,
  };
};

const setLanguage = (language) => {
  return async (dispatch) => {
    await securestorage.setData(language, LANG_KEY);
    dispatch(setLang(language));
  };
};

export default { setLanguage };
