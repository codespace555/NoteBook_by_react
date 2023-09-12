import React , { useState , useContext }  from "react";
import NoteContext from "../context/notes/noteContext.js"
import NoteItem from "./NoteItem";
import AddNote from "./AddNote.jsx";

export default function Notes() {
    const context = useContext(NoteContext)
    const {notes , addNote} = context
  return (
    
    <>
    <AddNote />
    <div className="flex flex-wrap items-center justify-center w-full h-auto gap-10 mt-5">
    <h1 className="">Your Notes</h1>
      {
  notes.map((note) => {
    return (
        <NoteItem key={note._id} title ={note.title} description ={note.description} tag={note.tag}/>
     
    )
  } )
}
</div>

    </>
  )
}
