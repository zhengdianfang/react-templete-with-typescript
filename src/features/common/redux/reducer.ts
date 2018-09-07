import { Action, Language, IMiscsStates } from '../types';
import actionTypes from './actionTypes';
import { combineReducers } from 'redux';

const lang = (state: Language = 'en', action: Action<Language>) => {
  if (action.type === actionTypes["SWITCH_LANGUAGE@MISCS"]) {
    return action.payload;
  }
  return state;
}
export default combineReducers<IMiscsStates>({
  lang,
}); 
