import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Button.module.scss';
import cn from 'classnames';
import { motion } from 'framer-motion';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
  onClick,
  className,
  disabled,
  children,
}) => {
  return (
    <motion.button
      className={cn(styles.button, className)}
      onClick={onClick}
      disabled={disabled}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.button>
  );
};

Button.displayName = 'button';
