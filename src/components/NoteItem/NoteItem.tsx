import { FC, MouseEventHandler } from 'react';
import { EditNoteModal } from '../EditNoteModal/EditNoteModal';
import { useModalStore } from '@/store/modalStore';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import styles from './NoteItem.module.scss';
import { ReactComponent as IconRemove } from '@/assets/images/icons/icon-remove.svg';
import { motion } from 'framer-motion';
import { useNotesStore } from '@/store/notesStore';

interface INoteItemProps {
  note: NoteModel;
}

const dateFormat = 'DD MMMM HH:MM';

export const NoteItem: FC<INoteItemProps> = ({ note }) => {
  const handleOpenModal = useModalStore((state) => state.handleOpenModal);
  const removeNote = useNotesStore((state) => state.removeNote);

  const handleOpenEditModal = (): void => {
    handleOpenModal(<EditNoteModal note={note} />, {
      title: note.name,
    });
  };

  const handleRemoveNote: MouseEventHandler<HTMLButtonElement> = (event): void => {
    event.stopPropagation();
    removeNote(note.id);
  };

  return (
    <motion.article
      className={styles.note}
      layoutId={String(note.id)}
      onClick={handleOpenEditModal}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles.note__header}>
        <p className={styles.note__name}>{note.name}</p>
        <motion.button
          className={styles.note__removeBtn}
          whileTap={{ scale: 0.95 }}
          onClick={handleRemoveNote}
        >
          <IconRemove />
        </motion.button>
      </div>

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
    </motion.article>
  );
};
