import axios from 'axios';
import { URL } from './ramp2URL';
import { constants as STORAGEKEY } from '../constants/constant';
export const Bearer = 'Bearer ';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response.status === 401 || error.response.status === 403) {
      localStorage.clear();
      return Promise.reject(error);
    } else {
      return Promise.reject(error);
    }
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url) => {
    return axios.get(URL + url);
  },

  getSignal: (url, controller) => {
    return axios.get(URL + url, { signal: controller.signal });
  },

  post: (url, data) => {
    return axios.post(URL + url, data);
  },

  postWithAPIKey: (url, data) => {
    return axios({
      method: 'post',
      data: data,
      url: URL + url,
      headers: { 'api-key': data['api-key'], 'secret-key': data['secret-key'] }
    });
  },

  postWithToken: (url, data) => {
    return axios({
      method: 'post',
      data: data,
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.ACCESSTOKEN)
      }
    });
  },

  postWithUserAuthToken: (url, data) => {
    return axios({
      method: 'post',
      data: data,
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)
      }
    });
  },

  getWithParams: (url, params) => {
    return axios({
      method: 'get',
      params,
      url: URL + url
    });
  },

  getWithToken: (url) => {
    return axios({
      method: 'get',
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.ACCESSTOKEN)
      }
    });
  },

  getWithUserAuthToken: (url) => {
    return axios({
      method: 'get',
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)
      }
    });
  },

  getWithTokenTelegram: (url) => {
    return axios({
      method: 'get',
      url: url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.ACCESSTOKEN)
      }
    });
  },

  putWithToken: (url, data) => {
    return axios({
      method: 'put',
      data: data,
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.ACCESSTOKEN)
      }
    });
  },

  putWithUserAuthToken: (url, data) => {
    return axios({
      method: 'put',
      data: data,
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)
      }
    });
  },

  deleteWithToken: (url, params) => {
    return axios({
      method: 'delete',
      params,
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.ACCESSTOKEN)
      }
    });
  },

  deleteWithTokenData: (url, data) => {
    return axios({
      method: 'delete',
      data: data,
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.ACCESSTOKEN)
      }
    });
  }
};
