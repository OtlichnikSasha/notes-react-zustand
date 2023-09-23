import { FC, ReactNode } from 'react';
import cn from 'classnames';
import styles from './NotFoundWrapper.module.scss';

interface INotFoundWrapperProps {
  title: string;
  icon?: ReactNode;
  description?: string;
  children?: ReactNode;
  clasName?: string;
}

export const NotFoundWrapper: FC<INotFoundWrapperProps> = ({
  icon,
  title,
  children,
  description,
  clasName,
}) => {
  return (
    <section className={cn(styles.notFound, clasName)}>
      {icon && <div className={styles.notFound__icon}>{icon}</div>}
      <h3 className={styles.notFound__title}>{title}</h3>
      {description && <p className={styles.notFound__description}>{description}</p>}

      {children}
    </section>
  );
};
