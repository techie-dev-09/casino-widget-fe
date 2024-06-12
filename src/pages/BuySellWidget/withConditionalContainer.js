import React from 'react';
import { useLocation } from 'react-router-dom';

const withConditionalContainer = (Component) => (props) => {
  const location = useLocation();
  const isWidget = location.pathname.includes('/buy-sell');
  return (
    <div
      className={isWidget ? 'widget-container' : 'buy-sell overflow-hidden'}
      style={
        isWidget
          ? { background: '#f5f6f8', zIndex: 10001 }
          : { background: '#f5f6f8', height: '100vh' }
      }>
      <Component {...props} isWidget={isWidget} />
    </div>
  );
};

export default withConditionalContainer;
