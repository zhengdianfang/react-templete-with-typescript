import { combineReducers } from 'redux';
import { Action, IMiscsStates, Language } from '../types';

const lang = (state: Language = 'en', action: Action<Language>) => {
  if (action.type === 'SWITCH_LANGUAGE@MISCS') {
    return action.payload;
  }
  return state;
};

const error = (state: string = '', action: Action<string>) => {
  if (action.type === 'UPDATE_ERROR_MESSAGE@MISCS') {
    return action.payload;
  }
  if (action.type === 'CLEAR_ERROR_MESSAGE@MISCS') {
    return '';
  }
  return state;
};

export default combineReducers<IMiscsStates>({
  error,
  lang,
});
