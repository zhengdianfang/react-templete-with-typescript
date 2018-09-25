import { Dispatch } from 'redux';
import { get } from '../../../common/request';
import api from '../api';
import { Action, Language } from '../types';

export const switchAppLanguage = (lang: Language): Action<Language> => ({
  type: 'SWITCH_LANGUAGE@MISCS',
  payload: lang,
});

export const updateErrorMessage = (error: string): Action<string> => ({
  type: 'UPDATE_ERROR_MESSAGE@MISCS',
  payload: error,
});

export const clearErrorMessage = (): Action<undefined> => ({
  type: 'CLEAR_ERROR_MESSAGE@MISCS',
  payload: undefined,
});

export const fetchTestList = () => async (dispatch: Dispatch) => {
  dispatch({ type: 'FETCH_START' });
  const responseData =  await get(api.test, {});
  dispatch({ type: 'FETCH_RESULT', payload: responseData });
  dispatch({ type: 'FETCH_END' });
};
