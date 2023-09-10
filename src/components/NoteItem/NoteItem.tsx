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
    <article className={styles.note} onClick={handleOpenEditModal}>
      <p className={styles.note__name}>{note.name}</p>

      <div className={styles.note__content}>
        {note.noteText ? (
          <p
            className={styles.note__description}
            dangerouslySetInnerHTML={{ __html: note.noteText }}
          />
        ) : (
          <p className={styles.note__description}>Нет текста</p>
        )}
      </div>

      <p className={styles.note__date}>{dayjs(note.updatedAt).locale('ru').format(dateFormat)}</p>
    </article>
  );
};
