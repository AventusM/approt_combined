import { SET_MESSAGE } from '../../constants';

const setMessage = (message) => {
  return {
    type: SET_MESSAGE,
    payload: message,
  };
};

export default { setMessage };
