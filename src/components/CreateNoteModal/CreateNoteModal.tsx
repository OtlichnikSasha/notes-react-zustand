import { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import { Button } from '../UI/Button/Button';
import { useNotesStore } from '@/store/notesStore';
import { enqueueSnackbar } from 'notistack';

export const CreateNoteModal = () => {
  const editorRef = useRef<any>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const addNote = useNotesStore((state) => state.addNote);

  const handleCreateNote = () => {
    const createdDate = new Date();
    addNote({
      createdAt: createdDate,
      name: nameRef?.current?.value || '',
      noteText: '',
      updatedAt: createdDate,
    });
    enqueueSnackbar('Заметка успешно создана', {
      variant: 'success',
    });
  };

  return (
    <div>
      <input placeholder='Введите название' ref={nameRef} />

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
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }',
        }}
      />

      <Button onClick={handleCreateNote}>Создать заметку</Button>
    </div>
  );
};
