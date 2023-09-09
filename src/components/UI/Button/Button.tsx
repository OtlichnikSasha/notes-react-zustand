import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';

export const Button: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ onClick, className, disabled, children, ...rest }) => {
  return (
    <button
      className={cn(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
};

Button.displayName = 'button';
