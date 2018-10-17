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
import { chain, find, isEmpty, size, } from 'lodash';
import App from '../App';
import PageNotFound from '../features/common/containers/PageNotFound';
import homeRoute from '../features/home/route';
var childrenRoutes = chain([])
    .concat(homeRoute)
    .concat({ path: '*', name: 'Page not found', component: PageNotFound })
    .filter(function (r) { return !isEmpty(r.component) || size(r.childRoutes) > 0; })
    .value();
var routes = [{
        path: '/',
        component: App,
        childRoutes: childrenRoutes,
    }];
var handleIndexRoute = function (route) {
    if (isEmpty(route.childRoutes)) {
        return;
    }
    var indexRoute = find(route.childRoutes, (function (children) { return children.isIndex; }));
    if (indexRoute) {
        var first = __assign({}, indexRoute);
        first.path = '';
        first.exact = true;
        first.autoIndexRoute = true;
        route.childRoutes.unshift(first);
    }
    route.childRoutes.forEach(handleIndexRoute);
};
routes.forEach(handleIndexRoute);
export default routes;
//# sourceMappingURL=routeConfig.js.map