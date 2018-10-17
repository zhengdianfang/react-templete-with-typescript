var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import * as React from 'react';
import { Provider } from 'react-redux';
import { Route as RouteComponent, Switch, } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import IntlComponent from './IntlComponent';
import history from './common/history';
var renderRouteConfig = function (routes, contextPath) {
    var children = [];
    var renderRoute = function (item, routeContextPath) {
        var newContextPath = /^\//.test(item.path) ? item.path :
            routeContextPath + "/" + item.path;
        newContextPath = newContextPath.replace(/\/+/g, '/');
        if (item.component && item.childRoutes) {
            var childRoutes_1 = renderRouteConfig(item.childRoutes, newContextPath);
            children.push(React.createElement(RouteComponent, { key: newContextPath, render: function (props) {
                    return (item.component && React.createElement(item.component, __assign({}, props), childRoutes_1));
                }, path: newContextPath }));
        }
        else if (item.component) {
            children.push(React.createElement(RouteComponent, { key: newContextPath, component: item.component, path: newContextPath, exact: true }));
        }
        else if (item.childRoutes) {
            item.childRoutes.forEach(function (r) { return renderRoute(r, newContextPath); });
        }
    };
    routes.forEach(function (item) { return renderRoute(item, contextPath); });
    return React.createElement(Switch, null, children);
};
var Root = /** @class */ (function (_super) {
    __extends(Root, _super);
    function Root() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Root.prototype.render = function () {
        var children = renderRouteConfig(this.props.routeConfig, '/');
        return (React.createElement(Provider, { store: this.props.store },
            React.createElement(IntlComponent, null,
                React.createElement(ConnectedRouter, { history: history }, children))));
    };
    return Root;
}(React.Component));
export default Root;
//# sourceMappingURL=Root.js.map