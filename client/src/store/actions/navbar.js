import { SHOW_NAVBAR, HIDE_NAVBAR } from "../../constants";

const showNavbar = () => {
  return {
    type: SHOW_NAVBAR,
  };
};

const hideNavbar = () => {
  return {
    type: HIDE_NAVBAR,
  };
};

export default { showNavbar, hideNavbar };
