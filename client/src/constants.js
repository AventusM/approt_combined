// .env data
import Constants from 'expo-constants';

// Scene routes. URL style remnants of react-router-native
export const MAIN_ROUTE = '/';
export const USERS_ROUTE = '/users';
export const EVENTS_REGISTER_ROUTE = '/eventregister';
export const LOGIN_ROUTE = '/login';
export const SIGN_UP_ROUTE = '/signup';
export const SINGLE_EVENT_GROUP_ROUTE_BASE = '/eventgroups';
export const SINGLE_EVENT_GROUP_ROUTE = '/eventgroups/single';
export const SINGLE_EVENT_GROUP_ROUTE_MAP = '/eventgroups/single/map';
export const EVENT_GROUP_CREATION_ROUTE = '/createapproevent';
export const SETTINGS_SCREEN_ROUTE = '/settings';

// Redux actions / reducers
export const SET_MESSAGE = 'SET_MESSAGE';
export const ERROR_MESSAGE_TYPE = 'ERROR_MESSAGE';
export const SUCCESS_MESSAGE_TYPE = 'SUCCESS_MESSAGE';
export const SET_CURRENT_USER = 'SET_CURRENT_USER';
export const REMOVE_CURRENT_USER = 'REMOVE_CURRENT_USER';
export const SHOW_NAVBAR = 'SHOW_NAVBAR';
export const HIDE_NAVBAR = 'HIDE_NAVBAR';

// React query keys
// ALL
export const GET_ALL_USERS_QUERY_KEY = 'GET_ALL_USERS';
export const GET_ALL_EVENTS_QUERY_KEY = 'GET_ALL_EVENTS';
export const GET_ALL_EVENT_GROUPS_QUERY_KEY = 'GET_ALL_EVENT_GROUPS_QUERY_KEY';
//:id
export const GET_ONE_EVENT_GROUP_QUERY_KEY = 'GET_ONE_EVENT_GROUP_QUERY_KEY';

// Phone storage
export const AUTH_KEY = 'AUTH';

// Development, subject to change
export const EVENTS_API_PATH = 'api/events';
export const USERS_API_PATH = 'api/users';
export const HEALTHCHECK_API_PATH = 'api/healthcheck';
export const LOGIN_API_PATH = 'api/login';
export const EVENT_GROUPS_API_PATH = 'api/eventgroups';

const PROD_BASEURL = 'https://secure-escarpment-94792.herokuapp.com';
export const BASEURL = Constants.manifest.extra.baseurl ?? PROD_BASEURL;

// Options for api to handle (conditionally calling different functions in 1 route to avoid massive amounts of copy/paste)
export const PARTICIPATION_REQUEST_TYPE_ADD = 'add_participation';
export const PARTICIPATION_REQUEST_TYPE_REMOVE = 'remove_participation';
export const PARTICIPATION_REQUEST_TYPE_COMPLETE = 'complete_event';

// Bottom sheet initiation values
export const OPEN_BOTTOM_SHEET_FLAG = 0;
export const CLOSE_BOTTOM_SHEET_FLAG = 1;

// OTHER
// TouchableOpacity press opacity for better visual feedback
// TODO: To be implemented within the application
export const FULL_OPACITY = 1;
export const SUCCESS_VIBRATE_MS = 200;
export const FAILURE_VIBRATE_MS = 800;
