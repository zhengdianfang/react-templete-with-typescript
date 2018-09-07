import { shallow } from 'enzyme';
import * as React from 'react';
import Root from '../src/Root';
import configStore from '../src/common/configStore';
import { Route } from '../src/common/types';

describe('Root', () => {
  test('Root has no error', () => {
    const DumpContainer = (props: any) => <div>{props.children}</div>;
    const NotFoundComp = () => <div>Not found</div>;
    const routes: Route[] = [{
      childRoutes: [
        { path: '/', component: DumpContainer, childRoutes: [{ path: 'abc' }] },
        { path: '/root', autoIndexRoute: true },
        { path: 'relative-path', name: 'Link Name' },
        {
          path: 'sub-links',
          childRoutes: [
            { path: 'sub-link' },
          ],
        },
        { path: '*', component: NotFoundComp },
      ],
      path: '',
    }];
    const store = configStore();

    shallow(
      <Root store={store} routeConfig={routes} />,
    );
  });
});
