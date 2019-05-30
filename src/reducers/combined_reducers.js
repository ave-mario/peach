import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import loginReducer from './auth.reducer';

const history = createBrowserHistory();
const rootReducer = combineReducers({
  router: connectRouter(history),
  login: loginReducer,
});

export default rootReducer;
