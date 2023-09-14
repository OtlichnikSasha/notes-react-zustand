import styles from './Skeleton.module.scss';
import { FC, HTMLAttributes } from 'react';
import cn from 'classnames';

export const Skeleton: FC<HTMLAttributes<HTMLDivElement>> = ({ className }) => {
  return <div className={cn(className, styles.total_skeletons)} />;
};
