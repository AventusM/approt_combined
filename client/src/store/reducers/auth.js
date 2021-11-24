import { REMOVE_CURRENT_USER, SET_CURRENT_USER } from "../../constants";

const INITIAL_STATE = {
  currentUser: null,
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }
    case REMOVE_CURRENT_USER: {
      return {
        ...state,
        currentUser: null,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
