import { hot } from 'react-hot-loader/root';
import React from 'react';
import { renderRoutes } from 'react-router-config';

function App({ routes }) {
  return renderRoutes(routes);
}

export default hot(App);
