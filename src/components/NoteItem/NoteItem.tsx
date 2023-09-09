import { FC } from 'react';
import { EditNoteModal } from '../EditNoteModal/EditNoteModal';
import { useModalStore } from '@/store/modalStore';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styles from './NoteItem.module.scss';

interface INoteItemProps {
  note: NoteModel;
}

const dateFormat = 'DD MMMM YY';

export const NoteItem: FC<INoteItemProps> = ({ note }) => {
  const handleOpenModal = useModalStore((state) => state.handleOpenModal);

  const handleOpenEditModal = (): void => {
    handleOpenModal(<EditNoteModal note={note} />, {
      title: note.name,
    });
  };

  return (
    <article onClick={handleOpenEditModal} className={styles.note}>
      {dayjs(note.createdAt).locale('ru').format(dateFormat)}
      <p>{note.name}</p>

      {note.createdAt !== note.updatedAt && (
        <p>Редактирована {dayjs(note.updatedAt).locale('ru').format(dateFormat)}</p>
      )}
    </article>
  );
};
