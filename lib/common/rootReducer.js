import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';
import miscsReducer from '../features/common/redux/reducer';
import homeReducer from '../features/home/redux/reducer';
var reducerMap = {
    nav: routerReducer,
    home: homeReducer,
    miscs: miscsReducer,
};
export default combineReducers(reducerMap);
//# sourceMappingURL=rootReducer.js.map