import { Main, } from './';
import Login from './containers/Login';
var route = {
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
//# sourceMappingURL=route.js.map