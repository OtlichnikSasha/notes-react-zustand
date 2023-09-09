import { Container } from '@/components/UI/Container/Container';
import styles from './Main.module.scss';
import { useNotesStore } from '@/store/notesStore';
import { NotFoundWrapper } from '@/components/NotFoundWrapper/NotFoundWrapper';
import { NoteItem } from '@/components/NoteItem/NoteItem';
import { CreateNoteButton } from '@/components/CreateNoteButton/CreateNoteButton';

export const Main = () => {
  const notes = useNotesStore((state) => state.notes);

  return (
    <>
      <main className={styles.main}>
        <Container className={styles.notesBlock}>
          {!notes.length ? (
            <NotFoundWrapper title='Вы не создали ни одной заметки' />
          ) : (
            <section className={styles.notesList}>
              {notes.map((note) => (
                <NoteItem key={note.id} note={note} />
              ))}
            </section>
          )}
        </Container>
      </main>
      <CreateNoteButton />
    </>
  );
};
