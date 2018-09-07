import reducer from "../../../../src/features/common/redux/reducer";
import actionTypes from "../../../../src/features/common/redux/actionTypes";
import { IMiscsStates } from '../../../../src/features/common/types';

describe('correct state change by reducer function', () => {
  const perviousState: IMiscsStates = {
    lang: 'en',
  }
  test('return correct state by SWITCH_LANGUAGE@MISCS action type', () => {
     const action = {
       type: actionTypes["SWITCH_LANGUAGE@MISCS"],
       payload: 'zh'
     }
    expect(reducer(perviousState, action)).toEqual({
       lang: 'zh'
     });
  });
});