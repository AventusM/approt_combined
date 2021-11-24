import { SET_ERROR_MESSAGE } from "../../constants";

const INITIAL_STATE = {
  message: null,
};

const diagnosticsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_ERROR_MESSAGE: {
      return {
        ...state,
        message: action.payload,
      };
    }
    default:
      return state;
  }
};

export default diagnosticsReducer;
