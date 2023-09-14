import React, { useContext, useEffect } from "react";

import NoteItem from "./NoteItem";
import AddNote from "./AddNote.jsx";
import NoteContext from "../context/notes/noteContext";

export default function Notes() {
  const { notes} = useContext(NoteContext);
  const { getNote} = useContext(NoteContext);
  useEffect(() => {
    getNote()
  },[])
  return (
    <>
      <AddNote />
      <h1 className="text-center mt-5 bg-gray-300 p-5 text-5xl font-semibold rounded-md">
        Your Notes
      </h1>
      <div className="flex flex-wrap items-center justify-center w-full h-auto gap-10 mt-5">
        {notes.map((note) => {
          return (
            <NoteItem
              key={note._id}
              title={note.title}
              description={note.description}
              tag={note.tag}
              id={note._id}
            />
          );
        })}
      </div>
    </>
  );
}
