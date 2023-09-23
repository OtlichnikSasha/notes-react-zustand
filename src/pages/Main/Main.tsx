import { CreateNoteButton } from '@/components/CreateNoteButton/CreateNoteButton';
import { NotFoundWrapper } from '@/components/NotFoundWrapper/NotFoundWrapper';
import { NoteItem } from '@/components/NoteItem/NoteItem';
import { Container } from '@/components/UI/Container/Container';
import { useNotesStore } from '@/store/notesStore';
import styles from './Main.module.scss';
import { useModalStore } from '@/store/modalStore';
import { CreateNoteModal } from '@/components/CreateNoteModal/CreateNoteModal';
import { ReactComponent as IconNote } from '@/assets/images/icons/icon-note.svg';
import Fuse from 'fuse.js';
import { useMemo, useState } from 'react';
import { Input } from '@/components/UI/Input/Input';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as IconClose } from '@/assets/images/icons/icon-close.svg';

const fuseOptions = {
  keys: ['name', 'noteText'],
};

const resetSearchVarint = {
  initial: {
    x: '100%',
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
  },
};

export const Main = () => {
  const [search, setSearch] = useState<string>('');
  const notes = useNotesStore((state) => state.notes);
  const handleOpenModal = useModalStore((state) => state.handleOpenModal);

  const fuse = useMemo((): Fuse<NoteModel> => new Fuse<NoteModel>(notes, fuseOptions), [notes]);

  const searchedNotes = useMemo(() => fuse.search(search), [search, notes, fuse]);

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
            <>
              <div className={styles.searchWrapper}>
                <Input
                  placeholder='Поиск по тексту и названию'
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                <AnimatePresence>
                  {search.length > 0 && (
                    <motion.button
                      variants={resetSearchVarint}
                      className={styles.resetButton}
                      initial='initial'
                      animate='animate'
                      exit='initial'
                      onClick={() => setSearch('')}
                    >
                      <IconClose />
                    </motion.button>
                  )}
                </AnimatePresence>
              </div>

              <section className={styles.notes}>
                {search ? (
                  <>
                    {searchedNotes.length ? (
                      <div className={styles.notes__list}>
                        {searchedNotes.map((note) => (
                          <NoteItem key={note.item.id} searchTerm={search} note={note.item} />
                        ))}
                      </div>
                    ) : (
                      <NotFoundWrapper
                        title='По вашему запросу ничего не найдено'
                        icon={<IconNote />}
                        clasName={styles.searchNotFound}
                      >
                        <button className={styles.notFound__create} onClick={() => setSearch('')}>
                          <span>Очистить поиск</span>
                        </button>
                      </NotFoundWrapper>
                    )}
                  </>
                ) : (
                  <div className={styles.notes__list}>
                    {notes.map((note) => (
                      <NoteItem key={note.id} note={note} />
                    ))}
                  </div>
                )}
              </section>
            </>
          )}
        </Container>
      </main>
      <CreateNoteButton />
    </>
  );
};
