import { ChangeEvent, FC, useRef, useState } from 'react';
import { Input } from '../UI/Input/Input';
import { Button } from '../UI/Button/Button';
import { Editor } from '@tinymce/tinymce-react';
import { useNotesStore } from '@/store/notesStore';
import { enqueueSnackbar } from 'notistack';

interface IEditNoteProps {
  note: NoteModel;
}

export const EditNoteModal: FC<IEditNoteProps> = ({ note }) => {
  const editorRef = useRef<any>(null);
  const [title, setTitle] = useState<string>(note.name);
  const editNote = useNotesStore((state) => state.editNote);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (e.target.value.length < 50) setTitle(e.target.value);
  };

  const handleEditNote = (): void => {
    editNote({
      ...note,
      name: title,
      noteText: '',
    });
    enqueueSnackbar('Заметка успешно отредактирована', {
      variant: 'success',
    });
  };

  return (
    <div>
      <Input placeholder='Заголовок' value={title} onChange={handleInputChange} />

      <Editor
        onInit={(evt, editor) => {
          console.log(evt);
          editorRef.current = editor;
        }}
        onChange={(sth) => console.log(sth)}
        initialValue={''}
        init={{
          height: 250,
          menubar: false,
          plugins: [
            'a11ychecker',
            'advcode',
            'advlist',
            'anchor',
            'autolink',
            'codesample',
            'fullscreen',
            'help',
            'image',
            'editimage',
            'tinydrive',
            'lists',
            'link',
            'media',
            'powerpaste',
            'preview',
            'searchreplace',
            'table',
            'template',
            'tinymcespellchecker',
            'visualblocks',
            'wordcount',
          ],
          toolbar:
            'insertfile a11ycheck undo redo | bold italic | forecolor backcolor | ' +
            'template codesample | alignleft aligncenter alignright alignjustify ' +
            '| bullist numlist | link image',
          content_style: 'body { font-family:Inter, sans-serif; font-size:14px }',
        }}
      />

      <Button disabled={title === note.name} onClick={handleEditNote}>
        Сохранить изменения
      </Button>
    </div>
  );
};
