import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label } from 'reactstrap';
import AuthInput from '../../../Custom/AuthInput';
import { useHistory, useLocation } from 'react-router-dom';
import { VerifyEmailOTPAPI } from '../../../services/Auth';
import { notificationMessageFunction } from '../../../constants/notificationConst';
import toast, { Toaster } from 'react-hot-toast';
import { ReactComponent as ArrowLeftIcon } from '../../../assets/images/icons/arrow-left.svg';
import { useEmbeddedWallet } from '@thirdweb-dev/react';
import PageLoader from '../../../components/Common/CustomLoader/loader';

function Verification({ isWidget }) {
  const history = useHistory();
  const location = useLocation();
  const { connect, sendVerificationEmail } = useEmbeddedWallet();
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    otp: Yup.string()
      .required('OTP is required')
      .length(6, 'OTP must be 6 characters long')
  });

  const handleVerify = (values) => {
    const email = location.state.email || localStorage.getItem('email');
    setIsLoading(true);

    connect({
      strategy: 'email_verification',
      email: email,
      verificationCode: values.otp
    })
      .catch((err) => {
        toast.error(notificationMessageFunction(err.message), {
          style: { fontSize: '12px' }
        });
      })
      .then(async (connection) => {
        localStorage.setItem('address', connection?.connector?.user?.walletAddress);
        let data = {
          email: localStorage.getItem('email'),
          address: connection?.connector?.user?.walletAddress
        };
        VerifyEmailOTPAPI(data)
          .then((res) => {
            localStorage.setItem('authAccessToken', res?.data?.data?.data?.accessToken);
            setIsLoading(false);

            history.push({
              pathname: `${isWidget ? '/buy-sell/buy-nft' : '/buy-nft'}`,
              state: { email: values.email },
              search: `${location.search}`
            });
            toast.success('Email verified successfully', {
              style: { fontSize: '12px' }
            });
          })
          .catch((err) => {
            setIsLoading(false);
            const errorMessage = err?.data?.error?.message;
            toast.error(notificationMessageFunction(errorMessage), {
              style: { fontSize: '12px' }
            });
          });
      });
  };

  const resendVerificationFunc = async () => {
    const email = location.state.email || localStorage.getItem('email');

    let data = { email: email };

    sendVerificationEmail(data)
      .then((res) => {
        localStorage.setItem('email', email);
        toast.success('Verification code sent successfully', {
          style: { fontSize: '12px' }
        });
      })
      .catch((err) => {
        const errorMessage = err?.data?.error?.message;
        toast.error(notificationMessageFunction(errorMessage), {
          style: { fontSize: '12px' }
        });
      });
  };

  return (
    <div className="p-3" style={{ width: '100%' }}>
      {isLoading ? (
        <PageLoader />
      ) : (
        <>
          <button
            type="button"
            className="btn btn-light p-1 mt-2"
            style={{
              height: 36,
              width: 36,
              backgroundColor: '#F0F1F266'
            }}
            onClick={() => history.push(`${isWidget ? '/buy-sell/login' : '/login'}`)}>
            <ArrowLeftIcon width={18} height={18} />
          </button>
          <div>
            <div className="d-flex flex-column">
              <span className="text-left font-size-32 font-weight-bold text-black ">
                Verification required
              </span>

              <span className="text-left font-size-14 font-weight-medium text-black ">
                To Continue, complete this verification step. We've sent a One Time
                Password (OTP) to the email please enter it below.
              </span>
            </div>
            <div className="mt-3">
              <Formik
                initialValues={{ otp: '' }}
                validationSchema={validationSchema}
                onSubmit={handleVerify}>
                {({ values, errors, touched, handleChange }) => (
                  <Form className="mr-2 mt-2">
                    <div className="mb-1">
                      <FormGroup>
                        <Label htmlFor="otp" className="text-black font-size-12">
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
                          className={`font-size-12 input-placeholder `}
                        />
                      </FormGroup>
                    </div>

                    <div>
                      <button
                        style={{ width: '100px' }}
                        type="submit"
                        className="btn btn-auth text-capitalize"
                        onSubmit={handleVerify}>
                        <div className="text-white font-size-12 my-1">Verify</div>
                      </button>
                    </div>
                  </Form>
                )}
              </Formik>{' '}
              <div className="mt-3 mb-2 d-flex flex-column">
                <span className="mt-2 d-flex font-size-12 text-black">
                  Didn't receive
                  <span
                    className="font-size-12 cursor-pointer ml-2"
                    style={{ color: 'rgb(0, 139, 255)' }}
                    onClick={resendVerificationFunc}>
                    Resend OTP
                  </span>
                </span>
              </div>
            </div>
          </div>
        </>
      )}

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default Verification;
