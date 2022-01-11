import { SET_MESSAGE, SUCCESS_MESSAGE_TYPE } from '../../constants';

const INITIAL_STATE = {
  message: null,
  status: SUCCESS_MESSAGE_TYPE, // Just a default
};

const diagnosticsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_MESSAGE: {
      return {
        ...state,
        message: action.payload.message,
        status: action.payload.status,
      };
    }
    default:
      return state;
  }
};

export default diagnosticsReducer;
