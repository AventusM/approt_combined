import { useDispatch } from "react-redux";
import actions from "../store/actions";

export const useLogin = () => {
  const dispatch = useDispatch();

  const login = (credentials) => {
    try {
      dispatch(actions.authActions.login(credentials));
    } catch (error) {
      console.log("LoginScreen onSubmit error", error);
    }
  };

  return [login];
};
