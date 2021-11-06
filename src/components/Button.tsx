import { ComponentPropsWithoutRef } from 'react';
import classNames from 'classnames';

export default function Button({ variant, children, className, disabled, ...rest }: ButtonProps) {
  return (
    <button
      type="button"
      className={classNames(
        'nes-btn',
        {
          [`is-${variant}`]: !!variant,
          'is-disabled': disabled,
        },
        className,
      )}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'success' | 'warning' | 'error';
}
