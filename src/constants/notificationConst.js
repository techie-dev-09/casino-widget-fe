export const notificationMessageFunction = (errorMessage, type) => {
  let notificationMessage = errorMessage || 'Something went wrong';

  notificationsArray.filter((notification) => {
    if (notification.code === errorMessage) {
      notificationMessage = notification.message;
      return notificationMessage;
    }

    return errorMessage;
  });
  return notificationMessage;
};

const notificationsArray = [
  // ? Auth Notifications
  { code: 'err_001', message: 'Admin secret is wrong' },
  { code: 'err_0', message: 'Please Enter Correct Code' },
  { code: 'err_1', message: 'Email is required' },
  { code: 'err_2', message: 'This email is already registered' },
  { code: 'err_3', message: 'Account type is required' },
  { code: 'err_4', message: 'Password is required' },
  { code: 'err_5', message: "Password don't match" },
  { code: 'err_6', message: 'Please enter valid on ramp' },
  { code: 'err_7', message: 'OTP is required' },
  {
    code: 'err_8',
    message: 'Your account is deactivated, Please contact Admin'
  },
  { code: 'err_9', message: 'Your account is deleted' },
  { code: 'err_10', message: 'Please enter correct OTP' },
  { code: 'err_11', message: 'User is not found' },
  { code: 'err_12', message: 'Invalid email or password' },
  { code: 'err_13', message: 'Admin secret is required' },
  { code: 'err_14', message: 'Please enter correct admin secret' },
  { code: 'err_15', message: 'Company name is required' },
  { code: 'err_16', message: 'Agency name is required' },
  { code: 'err_17', message: 'Brand name is required' },
  { code: 'err_18', message: 'Website URL is required' },
  { code: 'err_19', message: 'Logo URL is required' },

  { code: 'err_71', message: 'Provider name is required' },
  { code: 'err_72', message: 'Provider reference name is required' },
  { code: 'err_73', message: 'Provider already exists' },
  { code: 'err_74', message: 'Provider id is required' },
  { code: 'err_75', message: 'Provider not found' },

  { code: 'err_81', message: 'You do not have enough permission' },

  { code: 'err_tweet_01', message: "You haven't liked the tweet yet" },
  { code: 'err_tweet_02', message: "You haven't following the user yet" },
  { code: 'err_tweet_03', message: "You haven't quoted the tweet yet" },
  { code: 'err_tweet_04', message: "You haven't replied the tweet yet" },

  { code: 'err_500', message: 'Something went wrong' }
];
