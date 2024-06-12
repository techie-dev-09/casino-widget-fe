export const widgetParams = {
  API_KEY: 'api_key',
  ACCESS_TOKEN: 'accessToken',
  SECRET_KEY: 'secret_key',
  PRODUCT_ID: 'product_id'
};
// {
//   "first_name": "Satoshi",
//   "last_name": "Nakamoto",
//   "email": "email@gmail.com",
//   "mobileNumber": "+19692154942",
//   "dob": "1994-11-26",
//   "address": {
//       "addressLine1": "170 Pine St",
//       "addressLine2": "San Francisco",
//       "city": "San Francisco",
//       "state": "CA",
//       "postCode": "94111",
//       "countryCode": "US"
//   }
// }
export const createParamsData = (paramsURL) => {
  let paramsValues = {};
  for (const [key, value] of Object.entries(widgetParams)) {
    if (new URLSearchParams(paramsURL).get([value])) {
      paramsValues = {
        ...paramsValues,
        [value]: new URLSearchParams(paramsURL).get([value])
      };
    }
  }

  return paramsValues;
};
