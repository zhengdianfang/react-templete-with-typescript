import reducer from '../../../../src/features/common/redux/reducer';
import { IMiscsStates } from '../../../../src/features/common/types';

describe('correct state change by reducer function', () => {
  const perviousState: IMiscsStates = {
    lang: 'en',
    error: '',
  };
  test('return correct state by SWITCH_LANGUAGE@MISCS action type', () => {
     const action = {
       type: 'SWITCH_LANGUAGE@MISCS',
       payload: 'zh',
     };
     expect(reducer(perviousState, action)).toEqual({
       lang: 'zh',
       error: '',
     });
  });
});
