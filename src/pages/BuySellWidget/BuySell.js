import React from 'react';
import { Link } from 'react-router-dom';
import { NotificationToastContainer } from '../../Custom/notification';

import '../../assets/scss/custom/components/buy-sell.scss';
import './sidebar.css';
import LoadingScreen from './LoadingScreen';

function BuySell({ paramsValue, widgetTheme, error, loaded }) {
  return (
    <>
      {error ? (
        <div className="text-center min-height-100vh d-flex align-items-center justify-content-center">
          <div>
            <div className="text-danger h1 mb-1">
              <i className="fas fa-exclamation-circle "></i>
            </div>
            <div className="h4 text-muted">An error occurred</div>
            <div className="text-danger">{error}</div>
          </div>
        </div>
      ) : !loaded ? (
        <LoadingScreen paramsValue={paramsValue} widgetTheme={widgetTheme} />
      ) : (
        <div className="buy-sell overflow-hidden">
          <>
            Hello World
            <Link to="/hello">Link</Link>
          </>
        </div>
      )}
      <NotificationToastContainer />
    </>
  );
}

export default BuySell;
