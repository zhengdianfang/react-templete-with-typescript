import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';
import { merge } from 'lodash';
import { Store } from 'redux';
import { updateErrorMessage } from '../features/common/redux/actions';

const DEFAULT_REQUEST_CONFIG: AxiosRequestConfig = {
  timeout: 10000,
  responseType: 'application/json',
  baseURL: process.env.REACT_APP_API_HOST,
};

export const get = (url: string, params: any, headers: any = null) =>
  axios.get(url, merge(DEFAULT_REQUEST_CONFIG, { headers }));

export const setResponseInterceptors = (store: Store) => {
  axios.interceptors.response.use(
    (response: AxiosResponse) => response.data,
    (error: AxiosError) => {
      store.dispatch(updateErrorMessage(error.message));
    },
  );
};
