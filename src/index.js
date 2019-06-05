import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'connected-react-router';
import axios from 'axios';
import * as serviceWorker from './serviceWorker';
import App from './App';
import store from './store/index';
import history from './config/history';
import { initializePreviousToken } from './services/get_local_token';

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;
initializePreviousToken(store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>,

  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
