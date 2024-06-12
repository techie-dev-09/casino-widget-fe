export const DevURL = `${process.env.REACT_APP_BACKEND_RNALYS_USER_HOST}/api/`;

export const USER_URL = 'user/';
export const BUSINESS = 'business/';
export const TWITTER = 'twitter/';

// ? Authentication URL
export const LOGIN_URL = USER_URL + 'widget_login';
export const WIDGET_EMAIL_CHECK = USER_URL + 'widget_email_check';
export const WIDGET_UPDATE_PROFILE = USER_URL + 'widget_profile_update';
export const VERIFICATION = USER_URL + 'widget_verification';
export const RESEND_VERIFICATION = USER_URL + 'resend_verification_code';
export const MY_PROFILE = USER_URL + 'me';
export const TWITTER_AUTH_LINK = TWITTER + 'auth_twitter';
export const TWITTER_MY_ACCOUNT = TWITTER + 'me';
export const WALLET_ADDRESS = USER_URL + 'wallet_address';
export const WALLET_ADDRESS_EXISTS = USER_URL + 'wallet_address_exists';
export const REQUESTED_TOKENS = USER_URL + 'request_token';
export const WIDGET_REFERRAL_USERS = USER_URL + 'widget_referral_users';
export const WIDGET_REFERRAL = USER_URL + 'widget_referral';
export const AUTO_ENGAGE = USER_URL + 'auto_engage';

export const PRODUCT_DETAILS = BUSINESS + 'product/widget_details';

export const URL = DevURL;
