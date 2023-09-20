import { ChangeEvent, useRef, useState } from 'react';
import { Button } from '../UI/Button/Button';
import { useNotesStore } from '@/store/notesStore';
import { enqueueSnackbar } from 'notistack';
import { Input } from '../UI/Input/Input';
import styles from './CreateNoteModal.module.scss';
import { useModalStore } from '@/store/modalStore';
import { NoteModalHeader } from '../NoteModalHeader/NoteModalHeader';
import { Editor } from '@tinymce/tinymce-react';
import { init } from '../UI/TinyEditor/TinyEditor.constants';
import { countSymbolHelper } from '@/helpers/countSymbol.helper';
import { Skeleton } from '../UI/Skeleton/Skeleton';

type NoteForm = Pick<NoteModel, 'name' | 'noteText'>;

export const CreateNoteModal = () => {
  const tinyEditorRef = useRef<Editor['editor'] | null>(null);
  const [noteForm, setNoteForm] = useState<NoteForm>({} as NoteForm);
  const [isLoadingTinyEditor, setIsLoadingTinyEditor] = useState<boolean>(true);
  const addNote = useNotesStore((state) => state.addNote);
  const closeModal = useModalStore((state) => state.closeModal);

  const handleCreateNote = (): void => {
    addNote(noteForm);
    enqueueSnackbar('Заметка успешно создана', {
      variant: 'success',
    });
    setNoteForm({} as NoteForm);
    closeModal();
  };

  const handleChangeTitle = (event: ChangeEvent<HTMLInputElement>): void => {
    if (event.target.value.length < 50) setNoteForm({ ...noteForm, name: event.target.value });
  };

  const handleChangeEditor = (): void => {
    setNoteForm({ ...noteForm, noteText: tinyEditorRef?.current?.getContent() || '' });
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal__form}>
        <div>
          <Input placeholder='Заголовок' value={noteForm?.name} onChange={handleChangeTitle} />
          <NoteModalHeader
            date={new Date()}
            symbolCount={countSymbolHelper(noteForm?.name || '', noteForm?.noteText || '')}
          />
        </div>
        {isLoadingTinyEditor && <Skeleton className={styles.editorSkeleton} />}
        <Editor
          onInit={(_, editor) => {
            setIsLoadingTinyEditor(false);
            return (tinyEditorRef.current = editor);
          }}
          onChange={handleChangeEditor}
          initialValue=''
          init={init}
        />
      </div>

      <Button disabled={!noteForm?.name} onClick={handleCreateNote}>
        Создать заметку
      </Button>
    </div>
  );
};
