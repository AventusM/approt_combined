import { SHOW_NAVBAR, HIDE_NAVBAR } from "../../constants";

const INITIAL_STATE = {
  navbarVisible: true,
};

const navbarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_NAVBAR: {
      return {
        ...state,
        navbarVisible: true,
      };
    }
    case HIDE_NAVBAR: {
      return {
        ...state,
        navbarVisible: false,
      };
    }
    default:
      return state;
  }
};

export default navbarReducer;
