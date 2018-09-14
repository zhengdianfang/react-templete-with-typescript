import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import miscsReducer from '../features/common/redux/reducer';
import { IReducerRootStates } from '../features/common/types';
import homeReducer from '../features/home/redux/reducer';

const reducerMap: IReducerRootStates = {
  nav: routerReducer,
  home: homeReducer,
  miscs: miscsReducer,
};
export default combineReducers(reducerMap);
