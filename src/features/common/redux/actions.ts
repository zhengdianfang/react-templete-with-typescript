import axios from 'axios';
import { Dispatch } from 'redux';
import { Action, Language } from '../types';
import actionTypes from './actionTypes';

export const switchAppLanguage = (lang: Language): Action<Language> => ({
  type: actionTypes['SWITCH_LANGUAGE@MISCS'],
  payload: lang,
});

export const fetchTestList = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_START' });
  const response =  await axios.get('http://www.example.com/list');
  dispatch({ type: 'FETCH_RESULT', payload: response.data });
  dispatch({ type: 'FETCH_END' });
};
