import React, { useEffect, useState } from 'react';

import BuySell from './BuySell';
import { createParamsData } from '../../services/params';

import './sidebar.css';
import './GlobalStyle.css';
import BuyLogo from './design-system/1buyLogo';
import 'rc-tooltip/assets/bootstrap.css';

function BuySellWidget(props) {
  let params = window.location.search;
  let paramsValue = createParamsData(params);
  const [widgetTheme] = useState(
    paramsValue['widgetTheme'] === 'dark'
      ? 'dark'
      : paramsValue['widgetTheme'] === 'light'
      ? 'light'
      : paramsValue['widgetTheme'] === 'bluey'
      ? 'bluey'
      : 'light'
  );

  const [loaded] = useState(true);
  const [error] = useState('');

  useEffect(() => {
    document.body.classList.add('bg-transparent');
    // document.body.classList.add('media-buysell');
    document.body.style.background = 'red';

    document.body.style.setProperty(
      'background-color',
      `var(--${widgetTheme}-container-color)`,
      'important'
    );
  }, [widgetTheme, props.location.search]);

  // const fetchUserStatus = useCallback(async () => {
  //   if (localStorage.getItem('authAccessToken')) {
  //     myProfileData();
  //   }
  // }, []);

  // useEffect(() => {
  //   fetchUserStatus();
  // }, [fetchUserStatus]);

  return (
    <React.StrictMode>
      {error ? (
        <div className="text-center min-height-100vh d-flex align-items-center justify-content-center">
          <div>
            <div className="text-danger h1 mb-1"></div>
            <div className="h4 text-muted">An error occurred</div>
            <div className="text-danger">{error}</div>
          </div>
        </div>
      ) : (
        <>
          <div className="p-3">
            <BuySell
              paramsValue={paramsValue}
              widgetTheme={widgetTheme}
              error={error}
              loaded={loaded}
            />
            <div className="poweredby d-flex justify-content-center align-items-center">
              <span
                className="font-size-10 mr-2"
                style={{ color: `var(--${widgetTheme}-secondary-text-color)` }}>
                Powered By
              </span>
              <BuyLogo height="12" widgetTheme={widgetTheme} />
            </div>
          </div>
        </>
      )}
    </React.StrictMode>
  );
}

export default BuySellWidget;
