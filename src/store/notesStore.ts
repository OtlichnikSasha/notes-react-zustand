import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const LOCALSTORAGE_KEY = 'notes';

interface NotesStoreState {
  notes: NoteModel[];
}

interface NotesStoreActions {
  addNote: (noteData: Pick<NoteModel, 'name' | 'noteText'>) => void;
  editNote: (note: NoteModel) => void;
  removeNote: (id: NoteModel['id']) => void;
}

type INotesStore = NotesStoreState & NotesStoreActions;

export const useNotesStore = create<INotesStore>()(
  persist(
    (set, get) => ({
      notes: [],
      addNote: (note) =>
        set({
          notes: get().notes.concat({
            ...note,
            id: Date.now(),
            createdAt: new Date(),
            updatedAt: new Date(),
          }),
        }),
      editNote: (note) => {
        return set({
          notes: get().notes.map((stateNote) => {
            if (stateNote.id === note.id) return { ...note, updatedAt: new Date() };
            return stateNote;
          }),
        });
      },
      removeNote: (id) => {
        return set({
          notes: get().notes.filter((stateNote) => stateNote.id !== id),
        });
      },
    }),
    {
      name: LOCALSTORAGE_KEY,
    },
  ),
);
