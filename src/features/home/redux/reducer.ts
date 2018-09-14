import { combineReducers } from 'redux';
import { Action } from '../../common/types';

const test = (state: string = '', action: Action<string>) => {
  return state;
};

export default combineReducers({
  test,
});
