import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { FormGroup, Label } from 'reactstrap';
import AuthInput from '../../../Custom/AuthInput';
import { useHistory, useLocation } from 'react-router-dom';
import { UserWidgetLoginAPI } from '../../../services/Auth';
import { notificationMessageFunction } from '../../../constants/notificationConst';
import toast, { Toaster } from 'react-hot-toast';
import { useEmbeddedWallet } from '@thirdweb-dev/react';
import PageLoader from '../../../components/Common/CustomLoader/loader';

function Login({ isWidget }) {
  const history = useHistory();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email address').required('Email is required')
  });
  const { sendVerificationEmail } = useEmbeddedWallet();

  const handleSubmit = async (values) => {
    let data = { email: values.email };
    setIsLoading(true);
    await sendVerificationEmail({ email: values.email })
      .then((res) => {
        UserWidgetLoginAPI(data)
          .then((res) => {
            localStorage.setItem('email', values.email);
            setIsLoading(false);
            history.push({
              pathname: `${isWidget ? '/buy-sell/verification' : '/verification'}`,
              search: `${location.search}`,
              state: { email: values.email }
            });
          })
          .catch((err) => {
            const errorMessage = err?.data?.error?.message;
            toast.error(notificationMessageFunction(errorMessage), {
              style: { fontSize: '12px' }
            });
          });
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(notificationMessageFunction(err.message), {
          style: { fontSize: '12px' }
        });
      });
  };

  return (
    <div className="p-3" style={{ width: '100%' }}>
      {isLoading ? (
        <PageLoader />
      ) : (
        <div>
          <span className="text-left font-size-32 font-weight-bold text-black ">
            Welcome to 1buy.io
          </span>
          <div className="mt-3">
            <Formik
              initialValues={{ email: '' }}
              validationSchema={SignupSchema}
              onSubmit={handleSubmit}>
              {({ values, errors, touched, handleChange }) => (
                <Form>
                  <div className="mb-3">
                    <FormGroup>
                      <Label htmlFor="email" className="text-black font-size-12">
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
                        className={`font-size-12 input-placeholder`}
                      />
                    </FormGroup>
                  </div>

                  <div className="">
                    <button
                      style={{ width: '100px' }}
                      type="submit"
                      className="btn btn-auth text-capitalize"
                      onSubmit={handleSubmit}>
                      <div className="text-white font-size-12 my-1">Email Auth</div>
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      )}

      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
}

export default Login;
