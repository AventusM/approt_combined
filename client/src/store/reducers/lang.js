import { SET_CURRENT_LANGUAGE } from '../../constants';

const INITIAL_STATE = {
  lang: null, // TODO: Check if default value is useful
};

const langReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_LANGUAGE: {
      return {
        ...state,
        lang: action.payload,
      };
    }
    default:
      return state;
  }
};

export default langReducer;
