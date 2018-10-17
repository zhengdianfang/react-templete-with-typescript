import * as React from 'react';
import Root from './Root';
import configStore from './common/configStore';
import { setResponseInterceptors } from './common/request';
import routeConfig from './common/routeConfig';

const store = configStore();
setResponseInterceptors(store);

export const OneCalendar = () => (
    <Root store={store} routeConfig={routeConfig} />
);
