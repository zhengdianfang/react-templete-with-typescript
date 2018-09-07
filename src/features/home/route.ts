import {
  Main,
} from './';
import Login from './containers/Login';
import { Route } from '../../common/types';

const route: Route = {
  path: '/',
  name: 'Home',
  childRoutes: [
    {
      path: 'main',
      name: 'Main Page',
      component: Main,
      isIndex: true,
    },
    {
      path: 'login',
      name: 'Login Page',
      component: Login,
      isIndex: true,
    },
  ],
};

export default route;
