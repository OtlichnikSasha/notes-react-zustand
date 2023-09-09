import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';

interface NotesStoreState {
  notes: NoteModel[];
}

interface NotesStoreActions {
  addNote: (note: Omit<NoteModel, 'id'>) => void;
  editNote: (note: NoteModel) => void;
  removeNote: (note: NoteModel) => void;
}

type INotesStore = NotesStoreState & NotesStoreActions;

export const useNotesStore = create(
  immer<INotesStore>((set) => ({
    notes: [],
    addNote: (note) => {
      set((state) => {
        state.notes.unshift({ ...note, id: Date.now() });
      });
    },
    editNote: (note) => {
      set((state) => {
        state.notes.concat({ ...note, id: Date.now() });
      });
    },
    removeNote: (note) => {
      set((state) => {
        state.notes.filter((stateNote) => stateNote.id !== note.id);
      });
    },
  })),
);
