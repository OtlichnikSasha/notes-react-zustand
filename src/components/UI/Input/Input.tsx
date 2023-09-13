import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ disabled, className, value, onChange, ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      <input
        value={value}
        disabled={disabled}
        onChange={onChange}
        className={cn(styles.input, className)}
        {...rest}
      />
    </div>
  );
};

Input.displayName = 'input';
