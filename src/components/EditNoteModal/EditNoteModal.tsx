import { FC } from 'react';

interface IEditNoteProps {
  note: NoteModel;
}

export const EditNoteModal: FC<IEditNoteProps> = ({ note }) => {
  return <div>{note.name}</div>;
};
