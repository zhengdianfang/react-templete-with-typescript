import { combineReducers } from 'redux';
var lang = function (state, action) {
    if (state === void 0) { state = 'en'; }
    if (action.type === 'SWITCH_LANGUAGE@MISCS') {
        return action.payload;
    }
    return state;
};
var error = function (state, action) {
    if (state === void 0) { state = ''; }
    if (action.type === 'UPDATE_ERROR_MESSAGE@MISCS') {
        return action.payload;
    }
    if (action.type === 'CLEAR_ERROR_MESSAGE@MISCS') {
        return '';
    }
    return state;
};
export default combineReducers({
    error: error,
    lang: lang,
});
//# sourceMappingURL=reducer.js.map