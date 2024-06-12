import React from 'react';
import '../assets/scss/custom/pages/provider.scss';

function Widget() {
  let params = window.location.search;

  return (
    <iframe
      style={{ borderRadius: `var(--widget-radius)` }}
      title="Buy or sell"
      loading="lazy"
      allow="accelerometer; autoplay; camera; gyroscope; payment"
      className="widget-container"
      src={`/buy-sell/login/${params}`}
      frameBorder="0"></iframe>
  );
}

export default Widget;
