import { useRouter } from "next/router";
import { useContext, useMemo } from "react";
import NoteItem from "./NoteItem";
import { NotesContext } from "@/lib/NotesContext";

export default function NoteList() {
  const router = useRouter();
  const notesContext = useContext(NotesContext);

  if (!notesContext) {
    return <div>Loading...</div>;
  }

  const { notes } = notesContext;

  const filterNotes = useMemo(
    () =>
      notes.filter((item) =>
        router.query.q
          ? item.title.includes(router.query.q as string) ||
            item.content.includes(router.query.q as string)
          : true
      ),
    [router.query, notes]
  );

  const noteList = useMemo(() => {
    return filterNotes?.map((item) => (
      <NoteItem item={item} key={item.id as string} />
    ));
  }, [filterNotes]);

  return <div>{noteList}</div>;
}
