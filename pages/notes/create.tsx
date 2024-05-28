import NoteForm from "@/components/NoteForm";
import { NotesContext } from "@/lib/NotesContext";
import { useContext } from "react";

export default function CreateNote() {
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    return <div>Loading...</div>;
  }

  const { add } = notesContext;

  return (
    <div className="flex flex-1 py-4 pr-4 h-full">
      <NoteForm onSubmit={add} />
    </div>
  );
}
