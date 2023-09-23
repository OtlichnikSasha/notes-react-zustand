import { determinateWordHelper } from '@/helpers/determinateWord.helper';
import dayjs from 'dayjs';
import { FC, memo } from 'react';
import styles from './NoteModalHeader.module.scss';

interface INoteHeaderProps {
  symbolCount: number;
  date: Date;
}

const symbolWordVariants = ['символ', 'символа', 'символов'];

const NoteModalHeaderComponent: FC<INoteHeaderProps> = ({ symbolCount, date }) => {
  return (
    <div className={styles.noteHeader}>
      <p className={styles.noteHeader__text}>{dayjs(date).locale('ru').format('D MMMM HH:mm')}</p>
      <span className={styles.noteHeader__text}>|</span>
      <p className={styles.noteHeader__text}>
        {symbolCount} {determinateWordHelper(symbolCount, symbolWordVariants)}
      </p>
    </div>
  );
};

export const NoteModalHeader = memo(NoteModalHeaderComponent);
