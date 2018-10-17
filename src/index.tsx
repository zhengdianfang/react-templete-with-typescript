import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import configStore from './common/configStore';
import { setResponseInterceptors } from './common/request';
import routeConfig from './common/routeConfig';

const store = configStore();
setResponseInterceptors(store);

const renderApp = () => {
  render(
    <AppContainer>
      <Root store={store} routeConfig={routeConfig} />
    </AppContainer>,
    document.getElementById('root') as HTMLElement,
  );
};

renderApp();
