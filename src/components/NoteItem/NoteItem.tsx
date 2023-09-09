import { FC } from 'react';

interface INoteItemProps {
  note: NoteModel;
}

export const NoteItem: FC<INoteItemProps> = ({ note }) => {
  return <div>{note.name}</div>;
};
