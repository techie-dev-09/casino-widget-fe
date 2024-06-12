import React from 'react';

function OpacityComponent({ widgetTheme }) {
  return (
    <div
      style={{
        position: 'absolute',
        left: 0,
        top: 0,
        width: '100%',
        height: '100%',
        opacity: `var(--card-opacity)`,
        background: `var(--${widgetTheme}-card-color)`,
        borderRadius: `var(--border-radius)`
      }}></div>
  );
}

export default OpacityComponent;
