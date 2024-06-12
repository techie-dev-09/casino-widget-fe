import React, { useState } from 'react';
import { Input } from 'reactstrap';
import './inputcss.scss';

function AuthInput({
  type = 'text',
  values,
  name,
  placeholder,
  errors,
  touched,
  handleChange,
  isPassword,
  isIcon = true,
  iconName,
  disabledField = false,
  style = {},
  className = ''
}) {
  const isError = errors[name] && touched[name];
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="has-wrapper">
      <Input
        style={{
          paddingRight: '30px',
          borderRadius: '8px',
          ...style,
          paddingLeft: '10px'
        }}
        className={
          errors[name] ? `${className} border-danger` : `${className} border-dark`
        }
        value={values[name]}
        placeholder={placeholder}
        rows="6"
        name={name}
        type={showPassword ? 'text' : type}
        onChange={handleChange}
        disabled={disabledField}
      />
      {isIcon && (
        <span className="has-icon">
          <i className={iconName}></i>
        </span>
      )}

      {isPassword && showPassword && (
        <span className="has-icon" style={{ top: '8px' }}>
          <i className="ri-eye-fill" onClick={() => setShowPassword(false)}></i>
        </span>
      )}

      {isPassword && !showPassword && (
        <span className="has-icon" style={{ top: '8px' }}>
          <i className="ri-eye-off-fill" onClick={() => setShowPassword(true)}></i>
        </span>
      )}

      {isError && (
        <div style={{ fontSize: 12 }} className="text-left mt-1 text-danger">
          {errors[name]}
        </div>
      )}
    </div>
  );
}

export default AuthInput;
