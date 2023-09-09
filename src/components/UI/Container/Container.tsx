import { FC, ReactNode } from 'react';
import cn from 'classnames';

interface IContainerProps {
  className?: string;
  as?: 'div' | 'section';
  children: ReactNode;
}

export const Container: FC<IContainerProps> = ({ as: Tag = 'div', children, className }) => {
  return <Tag className={cn(className)}>{children}</Tag>;
};
