import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { each, isEmpty, merge } from 'lodash';
import { Store } from 'redux';
import { updateErrorMessage } from '../features/common/redux/actions';

const DEFAULT_REQUEST_CONFIG: AxiosRequestConfig = {
  timeout: 10000,
  responseType: 'application/json',
  // baseURL: process.env.REACT_APP_API_HOST,
};

export const get = (url: string, params: any, headers: any = null) =>
  axios.get(generateUrl(url, params), merge(DEFAULT_REQUEST_CONFIG, { headers }));

export const post = (url: string, data: any, headers: any = null) =>
  axios.post(url, data, merge(DEFAULT_REQUEST_CONFIG, { headers }));

export const remove = (url: string, headers: any = null) =>
  axios.delete(url, merge(DEFAULT_REQUEST_CONFIG, { headers }));

export const put = (url: string, data: any, headers: any = null) =>
  axios.put(url, data, merge(DEFAULT_REQUEST_CONFIG, { headers }));

export const setResponseInterceptors = (store: Store) => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
      store.dispatch(updateErrorMessage(error.message));
    },
  );
};

const generateUrl = (url: string, queryParams: any) => {
  const params: any[] = [];
  each(queryParams, (value: any, key: string) => {
    if (value) {
      params.push(`${key}=${value}`);
    }
  });

  const paramsStr = isEmpty(params) ? '' : '?' + params.join('&');
  return `${url}${paramsStr}`;
};
