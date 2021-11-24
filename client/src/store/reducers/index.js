import { combineReducers } from "redux";
import diagnosticsReducer from "./diagnostics";
import authReducer from "./auth";
import navbarReducer from "./navbar";

const rootReducer = combineReducers({
  diagnosticsData: diagnosticsReducer,
  authData: authReducer,
  navbarData: navbarReducer,
});

export default rootReducer;
