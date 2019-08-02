import "babel-polyfill";
import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from 'react-router';
import { createBrowserHistory } from 'history';
import App from './app';
import { appRoutes } from './routes';

const history = createBrowserHistory();

const appContainer = document.getElementById('app');


ReactDOM.render(<Router history={history}>
  <App routes={appRoutes}  />
</Router>, appContainer)
