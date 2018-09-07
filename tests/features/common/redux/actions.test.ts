import { switchAppLanguage } from '../../../../src/features/common/redux/actions';
import actionTypes from '../../../../src/features/common/redux/actionTypes';
describe('return correct type and payload by action functions', () => {
  test('return correct object by switchAppLanguage function', () => {
    expect(switchAppLanguage('en')).toEqual({
      type: actionTypes["SWITCH_LANGUAGE@MISCS"],
      payload: 'en'
    });

    expect(switchAppLanguage('zh')).toEqual({
      type: actionTypes["SWITCH_LANGUAGE@MISCS"],
      payload: 'zh'
    });
  });
});