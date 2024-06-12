import React, { useEffect, useState } from 'react';
import { ReactComponent as ArrowLeftIcon } from '../../assets/images/icons/arrow-left.svg';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label } from 'reactstrap';
import AuthInput from '../../Custom/AuthInput';
import './sidebar.css';
import LoadingScreen from './LoadingScreen';
import { UserWidgetLoginAPI, VerifyEmailOTPAPI } from '../../services/Auth';
import { notificationMessageFunction } from '../../constants/notificationConst';
import toast, { Toaster } from 'react-hot-toast';
import { useEmbeddedWallet } from '@thirdweb-dev/react';
import TwitterFollowButton from './FollowOnTwitterButton';

function EmailAuth({
  email = '',
  userData,
  backToWidget,
  primaryColor,
  selectedRate,
  widgetTheme,
  setShowThirdWeb,
  setSkipEmailAuth,
  setConnectToWallet,
  addSwapDataAPIFunc,
  swapData,
  showTransactionHistory,
  setIsTradeShow,
  myProfileData,
  swingSDK,
  paramsValue,
  walletScreenSkip,
  posthog,
  paramsImages,
  funMode,
  callCampaigns
}) {
  const defaultTransferParams = {
    amount: '1',
    chainId:
      paramsValue['swapSDK'] === 'testnet'
        ? '80001'
        : paramsValue['swapSDK'] === 'production'
        ? '1'
        : process.env.REACT_APP_ENVIRONMENT === 'development'
        ? '80001'
        : '1',
    fromChain:
      paramsValue['swapSDK'] === 'testnet'
        ? 'mumbai'
        : paramsValue['swapSDK'] === 'production'
        ? 'ethereum'
        : process.env.REACT_APP_ENVIRONMENT === 'development'
        ? 'mumbai'
        : 'ethereum',
    fromToken: 'ETH',
    fromUserAddress: '',
    toChain:
      paramsValue['swapSDK'] === 'testnet'
        ? 'mumbai'
        : paramsValue['swapSDK'] === 'production'
        ? 'ethereum'
        : process.env.REACT_APP_ENVIRONMENT === 'development'
        ? 'mumbai'
        : 'ethereum',
    toToken: 'USDC',
    toUserAddress: ''
  };

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required')
  });
  const { connect, sendVerificationEmail } = useEmbeddedWallet();

  const [isWidgetLoading, setIsWidgetLoading] = useState(false);
  const [OTPScreenShow, setOTPScreenShow] = useState(false);
  const [isError, setError] = useState('');
  const [seconds, setSeconds] = useState(10);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (emailSent && seconds !== 0) {
      const timer = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [emailSent, seconds]);

  const handleSubmit = async (values) => {
    let data = {
      email: values.email,
      account_type: 3,
      isWidget: true,
      address: localStorage.getItem('address'),
      widget_user_id: userData.user_id,
      widgetReferral: paramsValue['widgetReferral']
    };
    setSeconds(10);

    setIsWidgetLoading(true);
    await sendVerificationEmail({ email: values.email })
      .then((res) => {
        UserWidgetLoginAPI(data)
          .then((res) => {
            setEmailSent(true);
            if (
              res &&
              res.data &&
              res.data.data &&
              res.data.data.data &&
              res.data.data.data.user_id
            ) {
              posthog?.identify(res.data.data.data.user_id, { email: values.email });
            }
            localStorage.setItem('email', values.email);
            setOTPScreenShow(true);
            setIsWidgetLoading(false);
          })
          .catch((err) => {
            setIsWidgetLoading(false);
            const errorMessage = err?.data?.error?.message;
            toast.error(notificationMessageFunction(errorMessage), {
              style: { fontSize: '12px' }
            });
          });
      })
      .catch((err) => {
        toast.error(notificationMessageFunction(err.message), {
          style: { fontSize: '12px' }
        });
        setIsWidgetLoading(false);
      });
  };

  const handleVerify = async (values) => {
    if ((values.otp && values.otp.length < 6) || !values.otp) {
      setError('Please enter OTP');
    }
    setIsWidgetLoading(true);
    connect({
      strategy: 'email_verification',
      email: localStorage.getItem('email'),
      verificationCode: values.otp
    })
      .catch((err) => {
        setIsWidgetLoading(false);
        toast.error(notificationMessageFunction(err.message), {
          style: { fontSize: '12px' }
        });
      })
      .then(async (connection) => {
        let signer = await connection.getSigner();
        swingSDK.wallet
          .connect(signer, defaultTransferParams.fromChain)
          .then((res) => {
            localStorage.setItem('embedded_wallet_address', res);
            let data = {
              email: localStorage.getItem('email'),
              otp: values.otp,
              embedded_wallet_address: res,
              address: localStorage.getItem('address')
            };
            VerifyEmailOTPAPI(data)
              .then((res) => {
                setEmailSent(false);
                const data = res?.data?.data?.data?.accessToken;
                localStorage.setItem('authAccessToken', data);
                callCampaigns();
                setIsWidgetLoading(false);
                setSkipEmailAuth(true);
                if (!showTransactionHistory) {
                  setConnectToWallet(true);
                  if (swapData && Object.keys(swapData).length > 0) {
                    addSwapDataAPIFunc(swapData);
                  }
                } else {
                  setConnectToWallet(true);
                  setIsTradeShow(true);
                }
                myProfileData();
                walletScreenSkip();
              })
              .catch((err) => {
                setIsWidgetLoading(false);
                const errorMessage = err?.data?.error?.message;
                toast.error(notificationMessageFunction(errorMessage), {
                  style: { fontSize: '12px' }
                });
              });
          })
          .catch((err) => {
            toast.error(notificationMessageFunction(err.message), {
              style: { fontSize: '12px' }
            });
            setIsWidgetLoading(false);
          });
      });
  };

  const resendVerificationFunc = async () => {
    await handleSubmit({ email: localStorage.getItem('email') })
      .then((res) => {
        toast.success('Verification code sent successfully', {
          style: { fontSize: '12px' }
        });
      })
      .catch((err) => {});
  };

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .required('OTP is required')
      .length(6, 'OTP must be 6 characters long')
    // recovery_code: isNewDeviceState
    //   ? Yup.string().required('Recovery code is required')
    //   : Yup.string().optional()
  });
  return (
    <>
      {isWidgetLoading ? (
        <LoadingScreen
          paramsImages={paramsImages}
          paramsValue={paramsValue}
          widgetTheme={widgetTheme}
          funMode={funMode}
        />
      ) : !OTPScreenShow ? (
        <>
          <button
            type="button"
            className="btn btn-light p-1 mb-2 ml-3"
            style={{
              height: 36,
              width: 36,
              backgroundColor: '#F0F1F266',
              marginTop: '20px'
            }}
            onClick={() => {
              backToWidget();
              setShowThirdWeb(false);
              setConnectToWallet(false);
              setSkipEmailAuth(true);
            }}>
            <ArrowLeftIcon width={18} height={18} />
          </button>
          <Formik
            initialValues={{ email: email || '' }}
            validationSchema={SignupSchema}
            onSubmit={handleSubmit}>
            {({ values, errors, touched, handleChange }) => (
              <Form className="p-3 ml-2 mr-2">
                <div className="mb-3">
                  <FormGroup>
                    <Label
                      style={{ color: `var(--${widgetTheme}-primary-text-color)` }}
                      htmlFor="email"
                      className="text-black font-size-12">
                      Email Address
                    </Label>
                    <AuthInput
                      type="text"
                      values={values}
                      placeholder="Enter email address"
                      handleChange={handleChange}
                      errors={errors}
                      touched={touched}
                      name="email"
                      className={`font-size-12 input-placeholder ${
                        widgetTheme === 'dark' ? 'dark-theme' : ''
                      }`}
                      style={{ color: widgetTheme === 'dark' ? '#fff' : '#000' }}
                    />
                  </FormGroup>
                </div>

                <div
                  style={{ position: 'absolute', bottom: '15px' }}
                  className="btn-width mr-4">
                  <button
                    type="submit"
                    className="btn btn-block text-capitalize"
                    onSubmit={handleSubmit}
                    style={{
                      background:
                        primaryColor && primaryColor.length > 0
                          ? `var(--${widgetTheme}-primary-color)`
                          : selectedRate &&
                            selectedRate.provider &&
                            selectedRate.provider.color
                          ? selectedRate.provider.color
                          : `var(--${widgetTheme}-primary-color)`,
                      borderRadius: `var(--border-radius)`
                    }}>
                    <div className="text-white font-size-18 my-1">Email Auth</div>
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </>
      ) : (
        <>
          <button
            type="button"
            className="btn btn-light p-1 ml-2 mt-2"
            style={{
              height: 36,
              width: 36,
              backgroundColor: '#F0F1F266',
              color: `var(--${widgetTheme}-primary-text-color)`
            }}
            onClick={() => setOTPScreenShow(false)}>
            <ArrowLeftIcon width={18} height={18} />
          </button>
          <div className="mx-3 mt-4">
            <div className="ml-2 mr-2">
              <span
                style={{ color: `var(--${widgetTheme}-primary-text-color)` }}
                className="d-flex align-items-center justify-content-center font-size-16 mb-2">
                Verification required
              </span>
              <span
                className="font-size-12 mb-4"
                style={{ color: `var(--${widgetTheme}-primary-text-color)` }}>
                To Continue, complete this verification step. We've sent a One Time
                Password (OTP) to the email please enter it below.
              </span>
              <br />
              <span
                className="font-size-12"
                style={{ color: `var(--${widgetTheme}-primary-text-color)` }}>
                {localStorage.getItem('email')}
              </span>
            </div>
            <Formik
              initialValues={{ otp: '', recovery_code: '' }}
              validationSchema={validationSchema}
              onSubmit={handleVerify}>
              {({ values, errors, touched, handleChange }) => (
                <Form className="ml-2 mr-2 mt-2">
                  <div className="mb-1">
                    <FormGroup>
                      <Label
                        style={{ color: `var(--${widgetTheme}-primary-text-color)` }}
                        htmlFor="otp"
                        className="text-black font-size-12">
                        One Time Password
                      </Label>
                      <AuthInput
                        type="text"
                        values={values}
                        placeholder="Enter One Time Password"
                        handleChange={handleChange}
                        errors={errors}
                        touched={touched}
                        name="otp"
                        className={`font-size-12 input-placeholder ${
                          widgetTheme === 'dark' ? 'dark-theme' : ''
                        }`}
                        style={{ color: widgetTheme === 'dark' ? '#fff' : '#000' }}
                      />
                    </FormGroup>
                  </div>

                  <div
                    style={{ position: 'absolute', bottom: '15px' }}
                    className="btn-width mr-4">
                    {<span className="font-size-12 text-danger">{isError}</span>}
                    <button
                      type="submit"
                      className="btn btn-block text-capitalize"
                      onSubmit={handleVerify}
                      style={{
                        background:
                          primaryColor && primaryColor.length > 0
                            ? `var(--${widgetTheme}-primary-color)`
                            : selectedRate &&
                              selectedRate.provider &&
                              selectedRate.provider.color
                            ? selectedRate.provider.color
                            : `var(--${widgetTheme}-primary-color)`,
                        borderRadius: `var(--border-radius)`
                      }}>
                      <div className="text-white font-size-18 my-1">Verify</div>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mt-3 mb-2 d-flex justify-content-center flex-column">
              <span
                className="mt-2 d-flex justify-content-center font-size-12"
                style={{ color: `var(--${widgetTheme}-primary-text-color)` }}>
                Didn't receive
                <span
                  className="font-size-12 cursor-pointer ml-2"
                  style={{ color: 'rgb(33, 143, 235)' }}
                  onClick={resendVerificationFunc}>
                  Resend OTP
                </span>
              </span>
            </div>
            <TwitterFollowButton />
            {seconds === 0 && (
              <div className="notifications-container-otp mt-2">
                <div className="alert-icon">
                  <div className="d-flex">
                    <div className="flex-shrink-0">
                      <svg
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 alert-svg">
                        <path
                          clipRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          fillRule="evenodd"></path>
                      </svg>
                    </div>
                    <div className="alert-prompt-wrap">
                      <p className="text-sm text-yellow-700">
                        Don't forget to Check the Spam Folder!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </>
      )}
      <Toaster position="bottom-center" reverseOrder={false} />
    </>
  );
}

export default EmailAuth;
