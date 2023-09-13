import { CreateNoteButton } from '@/components/CreateNoteButton/CreateNoteButton';
import { NotFoundWrapper } from '@/components/NotFoundWrapper/NotFoundWrapper';
import { NoteItem } from '@/components/NoteItem/NoteItem';
import { Container } from '@/components/UI/Container/Container';
import { useNotesStore } from '@/store/notesStore';
import styles from './Main.module.scss';
import { useModalStore } from '@/store/modalStore';
import { CreateNoteModal } from '@/components/CreateNoteModal/CreateNoteModal';
import { ReactComponent as IconNote } from '@/assets/images/icons/icon-note.svg';

export const Main = () => {
  const notes = useNotesStore((state) => state.notes);
  const handleOpenModal = useModalStore((state) => state.handleOpenModal);

  const handleOpenCreateModal = (): void => {
    handleOpenModal(<CreateNoteModal />, {
      title: 'Создать заметку',
    });
  };

  return (
    <>
      <main className={styles.main}>
        <Container className={styles.notesBlock}>
          {!notes.length ? (
            <NotFoundWrapper title='Вы не создали ни одной заметки' icon={<IconNote />}>
              <button className={styles.notFound__create} onClick={handleOpenCreateModal}>
                <span>Создать заметку</span>
              </button>
            </NotFoundWrapper>
          ) : (
            <section className={styles.notes}>
              <div className={styles.notes__list}>
                {notes.map((note) => (
                  <NoteItem key={note.id} note={note} />
                ))}
              </div>
            </section>
          )}
        </Container>
      </main>
      <CreateNoteButton />
    </>
  );
};
