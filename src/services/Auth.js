import api from '../api/userApi';
import * as url from '../api/userURL';

export const UserWidgetLoginAPI = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.LOGIN_URL, data)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const UserWidgetLoginEmailCheckAPI = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.WIDGET_EMAIL_CHECK, data)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const VerifyEmailOTPAPI = (data) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.VERIFICATION, data)
      .then((response) => {
        if (response) {
          resolve(response);
        }
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const ResendVerificationEmailAPI = (paydata) => {
  return new Promise(async (resolve, reject) => {
    return api
      .post(url.RESEND_VERIFICATION, paydata)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const GetMyProfileAPI = () => {
  return new Promise(async (resolve, reject) => {
    return api
      .getWithToken(url.MY_PROFILE)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const ProfileUpdateAPI = (payload) => {
  return new Promise(async (resolve, reject) => {
    return api
      .putWithToken(url.WIDGET_UPDATE_PROFILE, payload)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};

export const ProductDetailsFetch = (product_id, api_key) => {
  return new Promise(async (resolve, reject) => {
    return api
      .get(url.PRODUCT_DETAILS + `?product_id=${product_id}&api_key=${api_key}`)
      .then((response) => {
        resolve(response);
      })
      .catch((err) => {
        reject(err.response);
      });
  });
};
