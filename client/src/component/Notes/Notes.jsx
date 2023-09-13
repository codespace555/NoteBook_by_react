import React , { useState , useContext }  from "react";
import NoteContext from "../context/notes/noteContext.js"
import NoteItem from "./NoteItem";
import AddNote from "./AddNote.jsx";

export default function Notes() {
    const context = useContext(NoteContext)
    const {State} = context
  return (
    
    <>
    <AddNote />
    <h1 className="text-center mt-5 bg-gray-300 p-5 text-5xl font-semibold rounded-md">Your Notes</h1>
    <div className="flex flex-wrap items-center justify-center w-full h-auto gap-10 mt-5">
   
      {
 context.map((note) => {
    return (
        <NoteItem key={note._id} title ={note.title} description ={note.description} tag={note.tag}/>
     
    )
  } )
}
</div>

    </>
  )
}
