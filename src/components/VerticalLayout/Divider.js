import React from 'react';

function Divider({ className = '' }) {
  return (
    <span
      className={className}
      style={{
        mixBlendMode: 'normal',
        borderRadius: '1px',
        opacity: 0.38,
        borderLeft: '2px solid #EDEEF0',
        margin: '10px 0px 10px 0px'
      }}></span>
  );
}

export default Divider;
