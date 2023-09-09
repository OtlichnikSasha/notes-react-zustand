import { FC, ReactNode } from 'react';
import styles from './NotFoundWrapper.module.scss';

interface INotFoundWrapperProps {
  title: string;
  icon?: ReactNode;
  description?: string;
  children?: ReactNode;
}

export const NotFoundWrapper: FC<INotFoundWrapperProps> = ({
  icon,
  title,
  children,
  description,
}) => {
  return (
    <section className={styles.notFound}>
      {icon && <div className={styles.notFound__icon}>{icon}</div>}
      <h3 className={styles.notFound__title}>{title}</h3>
      {description && <p className={styles.notFound__description}>{description}</p>}

      {children}
    </section>
  );
};
