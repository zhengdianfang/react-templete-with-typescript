import { Language } from '../types';
import { Action } from '../types.d';
import actionTypes from './actionTypes';

export const switchAppLanguage = (lang: Language): Action<Language> => ({
  type: actionTypes['SWITCH_LANGUAGE@MISCS'],
  payload: lang,
});
