import { Reducer, AnyAction } from "redux";
import { RouterState } from "react-router-redux";

export type CommonActionTypes = 
  'SWITCH_LANGUAGE@MISCS' |
  'UPDATE_ERROR_MESSAGE@MISCS' |
  'CLEAR_ERROR_MESSAGE@MISCS';

export type ActionTypes = CommonActionTypes;

export interface Action<T> extends AnyAction {
  type: ActionTypes;
  payload: T;
}

export type Language = 'zh' | 'en';

export interface IMiscsStates {
  lang: Language;
  error: string;
}

export interface IHomeStates {
  test: string;
}

export interface IRootStates {
  nav: RouterState;
  home: IHomeStates;
  miscs: IMiscsStates;
}

export interface IReducerRootStates {
  nav: Reducer<RouterState>;
  home: Reducer<IHomeStates>;
  miscs: Reducer<IMiscsStates>;
}
