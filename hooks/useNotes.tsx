import { INote } from "@/types";
import { useState } from "react";
import uniqid from "uniqid";

export default function useNotes() {
  const [notes, setNotes] = useState<INote[]>([]);

  const get = (id: string) => {
    return notes.find((item) => item.id === id);
  };

  const add = (newNote: INote) => {
    setNotes((prev) => [
      ...prev,
      { ...newNote, id: uniqid(), created_at: new Date().toString() },
    ]);
  };

  const remove = (id: string) => {
    setNotes((prev) => prev.filter((item) => item.id !== id));
  };

  const update = (updateNote: INote) => {
    setNotes((prev) =>
      prev.map((item) =>
        item.id === updateNote.id ? { ...item, ...updateNote } : item
      )
    );
  };

  return { notes, get, add, remove, update };
}
