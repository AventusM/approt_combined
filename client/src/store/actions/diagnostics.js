import { SET_ERROR_MESSAGE } from "../../constants";

const setErrorMessage = (message) => {
  return {
    type: SET_ERROR_MESSAGE,
    payload: message,
  };
};

export default { setErrorMessage };
