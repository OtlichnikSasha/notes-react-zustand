import { DetailedHTMLProps, FC, InputHTMLAttributes } from 'react';
import cn from 'classnames';
import styles from './Input.module.scss';

export const Input: FC<
  DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>
> = ({ disabled, className, ...rest }) => {
  return (
    <div className={styles.inputWrapper}>
      <input disabled={disabled} className={cn(styles.input, className)} {...rest} />
    </div>
  );
};
