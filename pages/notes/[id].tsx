import NoteForm from "@/components/NoteForm";
import { NotesContext } from "@/lib/NotesContext";
import { useRouter } from "next/router";
import { useContext } from "react";

export default function Note() {
  const router = useRouter();
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    return <div>Loading...</div>;
  }

  const { get, update } = notesContext;
  const note = get(router.query.id as string);

  return (
    <div className="flex flex-1 py-4 pr-4 h-full">
      {note && (
        <NoteForm
          onSubmit={(data) =>
            update({ id: router.query.id as string, ...data })
          }
          initialValues={note}
        />
      )}
    </div>
  );
}
