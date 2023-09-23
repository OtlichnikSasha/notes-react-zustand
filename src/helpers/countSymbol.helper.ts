export const countSymbolHelper = (
  name: NoteModel['name'],
  noteText: NoteModel['noteText'],
): number => {
  const updatedName = name?.trim();
  const updatedNoteText = noteText
    ?.replace(/<\/?[^>]+(>|$)/g, '')
    ?.replace(/&nbsp;/g, '')
    ?.trim();

  return (
    Number(updatedName?.length) + Number((updatedNoteText?.length && updatedNoteText?.length) || 0)
  );
};
