import React from 'react';

const Button = ({
  children,
  className = '',
  disabled = false,
  type = 'button',
}) => {
  return (
    <button className={className} disabled={disabled} type={type}>
      {children}
    </button>
  );
};

export default Button;
