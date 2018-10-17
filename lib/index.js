import * as React from 'react';
import Root from './Root';
import configStore from './common/configStore';
import { setResponseInterceptors } from './common/request';
import routeConfig from './common/routeConfig';
var store = configStore();
setResponseInterceptors(store);
export var OneCalendar = function () { return (React.createElement(Root, { store: store, routeConfig: routeConfig })); };
//# sourceMappingURL=index.js.map