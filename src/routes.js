import React from 'react';
import loadable from '@loadable/component'
import { Link } from 'react-router-dom';

const MainPage = () => (<>
  <Link to="/one">One</Link><br/>
  <Link to="/two">Two</Link>
</>);
const PageOne = loadable(() => import('./pages/one'))
const PageTwo = loadable(() => import('./pages/two'))


const appRoutes = [
  {
    path: '/',
    exact: true,
    component: MainPage
  },

  {
    path: '/one',
    component: PageOne
  },

  {
    path: '/two',
    component: PageTwo
  }
]


export { appRoutes };
