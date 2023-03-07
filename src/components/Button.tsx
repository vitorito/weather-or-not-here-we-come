/* eslint-disable react/button-has-type */
import { ButtonHTMLAttributes } from 'react';

function Button({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={`w-full outline-none rounded-md ${className}`}
      {...props}
    />
  );
}

export default Button;
