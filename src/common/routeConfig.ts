import {
  chain,
  find,
  isEmpty,
} from 'lodash';

import App from '../App';
import PageNotFound from '../features/common/containers/PageNotFound';
import homeRoute from '../features/home/route';
import { Route } from './types';

const childrenRoutes: Route[] = chain<Route[]>([])
  .concat(homeRoute)
  .concat({ path: '*', name: 'Page not found', component: PageNotFound })
  .filter((r: Route) => r.component || (r.childRoutes && r.childRoutes.length > 0))
  .value();

const routes: Route[] = [{
  path: '/',
  component: App,
  childRoutes: childrenRoutes ,
}];

const handleIndexRoute = (route: Route) => {
  if (isEmpty(route.childRoutes)) {
    return;
  }
  const indexRoute: Route | undefined =
    find(route.childRoutes, ((children: Route) => children.isIndex)) as Route | undefined;

  if (indexRoute) {
    const first: Route = {...indexRoute};
    first.path = '';
    first.exact = true;
    first.autoIndexRoute = true;
    route.childRoutes!.unshift(first);
  }
  route.childRoutes!.forEach(handleIndexRoute);
};

routes.forEach(handleIndexRoute);

export default routes;
