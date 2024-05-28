import { createContext, ReactNode } from "react";
import { INote } from "@/types";
import useNotes from "@/hooks/useNotes";

interface NotesContextType {
  notes: INote[];
  get: (id: string) => INote | undefined;
  add: (newNote: INote) => void;
  remove: (id: string) => void;
  update: (updateNote: INote) => void;
}

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined
);

interface NotesProviderProps {
  children: ReactNode;
}

export const NotesProvider = ({ children }: NotesProviderProps) => {
  const notesHook = useNotes();

  return (
    <NotesContext.Provider value={notesHook}>{children}</NotesContext.Provider>
  );
};
