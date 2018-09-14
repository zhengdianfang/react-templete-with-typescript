import { Reducer, AnyAction } from "redux";
import { RouterState } from "react-router-redux";

export interface Action<T> extends AnyAction {
  type: string;
  payload: T;
}

export type Language = 'zh' | 'en';

export interface IMiscsStates {
  lang: Language;
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
