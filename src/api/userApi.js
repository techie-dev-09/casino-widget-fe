import axios from 'axios';
import { URL } from './userURL';
import { constants as STORAGEKEY } from '../constants/constant';
export const Bearer = 'Bearer ';

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  get: (url) => {
    return axios.get(URL + url);
  },

  post: (url, data, headers = {}) => {
    return axios.post(URL + url, data, { headers: headers });
  },

  postWithToken: (url, data) => {
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
        authorization: Bearer + localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)
      }
    });
  },

  getWithTokenTelegram: (url) => {
    return axios({
      method: 'get',
      url: url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)
      }
    });
  },

  putWithToken: (url, data) => {
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
        authorization: Bearer + localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)
      }
    });
  },

  deleteWithTokenData: (url, data) => {
    return axios({
      method: 'delete',
      data: data,
      url: URL + url,
      headers: {
        authorization: Bearer + localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)
      }
    });
  }
};
