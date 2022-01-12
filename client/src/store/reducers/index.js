import { combineReducers } from 'redux';
import diagnosticsReducer from './diagnostics';
import authReducer from './auth';

const rootReducer = combineReducers({
  diagnosticsData: diagnosticsReducer,
  authData: authReducer,
});

export default rootReducer;
