import { Language } from "../types";
import actionTypes from "./actionTypes";
import { Action } from '../types.d';

export const switchAppLanguage = (lang: Language): Action<Language> => ({
  type: actionTypes["SWITCH_LANGUAGE@MISCS"],
  payload: lang,
});