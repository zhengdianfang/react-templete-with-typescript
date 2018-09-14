import { combineReducers } from 'redux';
import { Action, IMiscsStates, Language } from '../types';
import actionTypes from './actionTypes';

const lang = (state: Language = 'en', action: Action<Language>) => {
  if (action.type === actionTypes['SWITCH_LANGUAGE@MISCS']) {
    return action.payload;
  }
  return state;
};
export default combineReducers<IMiscsStates>({
  lang,
});
