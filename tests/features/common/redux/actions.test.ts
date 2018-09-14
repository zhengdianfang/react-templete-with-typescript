import axios from 'axios';
import AxiosMock from 'axios-mock-adapter';
import configureMockStore, { MockStoreCreator } from 'redux-mock-store';
import thunk from 'redux-thunk';
import actionTypes from '../../../../src/features/common/redux/actionTypes';
import { fetchTestList, switchAppLanguage } from '../../../../src/features/common/redux/actions';

const mockStore: MockStoreCreator = configureMockStore([thunk]);
describe('return correct type and payload by action functions', () => {
  let axiosMock: AxiosMock;

  beforeEach(() => {
    axiosMock = new AxiosMock(axios);
  });

  afterEach(() => {
    axiosMock.restore();
  });
  test('return correct object by switchAppLanguage function', () => {
    expect(switchAppLanguage('en')).toEqual({
      type: actionTypes['SWITCH_LANGUAGE@MISCS'],
      payload: 'en',
    });

    expect(switchAppLanguage('zh')).toEqual({
      type: actionTypes['SWITCH_LANGUAGE@MISCS'],
      payload: 'zh',
    });
  });

  test('should return actions by fetchTestList function', async () => {
    axiosMock.onGet('http://www.example.com/list').reply(200, []);

    const store = mockStore({});
    await fetchTestList()(store.dispatch);
    const actions: any[] = store.getActions();
    expect(actions[0]).toHaveProperty('type', 'FETCH_START');
    expect(actions[1]).toHaveProperty('type', 'FETCH_RESULT');
    expect(actions[1]).toHaveProperty('payload', []);
    expect(actions[2]).toHaveProperty('type', 'FETCH_END');
  });
});
