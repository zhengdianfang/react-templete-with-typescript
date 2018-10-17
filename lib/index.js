import * as React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import Root from './Root';
import configStore from './common/configStore';
import { setResponseInterceptors } from './common/request';
import routeConfig from './common/routeConfig';
var store = configStore();
setResponseInterceptors(store);
export var OneCalendar = function () {
    render(React.createElement(AppContainer, null,
        React.createElement(Root, { store: store, routeConfig: routeConfig })), document.getElementById('root'));
};
//# sourceMappingURL=index.js.map