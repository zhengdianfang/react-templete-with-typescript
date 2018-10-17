import axios from 'axios';
import { each, isEmpty, merge } from 'lodash';
import { updateErrorMessage } from '../features/common/redux/actions';
var DEFAULT_REQUEST_CONFIG = {
    timeout: 10000,
    responseType: 'application/json',
};
export var get = function (url, params, headers) {
    if (headers === void 0) { headers = null; }
    return axios.get(generateUrl(url, params), merge(DEFAULT_REQUEST_CONFIG, { headers: headers }));
};
export var post = function (url, data, headers) {
    if (headers === void 0) { headers = null; }
    return axios.post(url, data, merge(DEFAULT_REQUEST_CONFIG, { headers: headers }));
};
export var remove = function (url, headers) {
    if (headers === void 0) { headers = null; }
    return axios.delete(url, merge(DEFAULT_REQUEST_CONFIG, { headers: headers }));
};
export var put = function (url, data, headers) {
    if (headers === void 0) { headers = null; }
    return axios.put(url, data, merge(DEFAULT_REQUEST_CONFIG, { headers: headers }));
};
export var setResponseInterceptors = function (store) {
    axios.interceptors.response.use(function (response) { return response.data; }, function (error) {
        store.dispatch(updateErrorMessage(error.message));
    });
};
var generateUrl = function (url, queryParams) {
    var params = [];
    each(queryParams, function (value, key) {
        if (value) {
            params.push(key + "=" + value);
        }
    });
    var paramsStr = isEmpty(params) ? '' : '?' + params.join('&');
    return "" + url + paramsStr;
};
//# sourceMappingURL=request.js.map