import * as React from 'react';
import { Provider } from 'react-redux';
import {
  Route as RouteComponent,
  RouteComponentProps,
  RouteProps,
  Switch,
} from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Store } from 'redux';

import IntlComponent from './IntlComponent';
import history from './common/history';
import { Route } from './common/types';

const renderRouteConfig = (routes: Route[], contextPath: string)
  : Array<React.ReactElement<RouteProps>> | React.ReactElement<RouteProps> => {
  const children: Array<React.ReactElement<RouteProps>> = [];

  const renderRoute = (item: Route, routeContextPath: string) => {
    let newContextPath = /^\//.test(item.path) ? item.path :
      `${routeContextPath}/${item.path}`;
    newContextPath = newContextPath.replace(/\/+/g, '/');
    if (item.component && item.childRoutes) {
      const childRoutes = renderRouteConfig(item.childRoutes, newContextPath);
      children.push(
        <RouteComponent
          key={newContextPath}
          render={(props: RouteComponentProps<any>) =>
            (item.component && <item.component {...props}>{childRoutes}</item.component>)
          }
          path={newContextPath}
        />,
      );
    } else if (item.component) {
      children.push(
        <RouteComponent
          key={newContextPath}
          component={item.component}
          path={newContextPath}
          exact
        />);
    } else if (item.childRoutes) {
      item.childRoutes.forEach((r: Route) => renderRoute(r, newContextPath));
    }
  };

  routes.forEach((item) => renderRoute(item, contextPath));
  return <Switch>{children}</Switch>;
};

interface IProps {
  store: Store;
  routeConfig: Route[];
}
class Root extends React.Component<IProps> {
  render() {
    const children = renderRouteConfig(this.props.routeConfig, '/');
    return (
      <Provider store={this.props.store}>
        <IntlComponent>
          <ConnectedRouter history={history}>
            {children}
          </ConnectedRouter>
        </IntlComponent>
      </Provider>
    );
  }
}
export default Root;
