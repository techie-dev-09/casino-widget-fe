import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { constants as STORAGEKEY } from '../constants/constant';
import { useLocation } from 'react-router-dom';

const AppRoute = ({ component: Component, layout: Layout, isAuthProtected, ...rest }) => {
  const location = useLocation();
  const isWidget = location.pathname.includes('/buy-sell');

  return (
    <>
      <Route
        {...rest}
        render={(props) => {
          if (isAuthProtected && !localStorage.getItem(STORAGEKEY.AUTH_ACCESSTOKEN)) {
            return (
              <Redirect
                to={{
                  pathname: `${isWidget ? `/buy-sell/login` : `/login`}`,
                  search: `${location.search}`,
                  state: { from: props.location }
                }}
              />
            );
          }

          return <Component {...props} />;
        }}
      />
    </>
  );
};

export default AppRoute;
