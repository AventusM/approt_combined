import { combineReducers } from 'redux';
import diagnosticsReducer from './diagnostics';
import authReducer from './auth';
import langReducer from './lang';

const rootReducer = combineReducers({
  diagnosticsData: diagnosticsReducer,
  authData: authReducer,
  langData: langReducer,
});

export default rootReducer;
