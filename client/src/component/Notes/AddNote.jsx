import { useContext, useState } from "react";
import React from "react";
import NoteContext from "../context/notes/noteContext.js";
export default function AddNote() {
  const context = useContext(NoteContext);
  const { addNote } = context;

  const [note, setNote] = useState({ title: "", discription: "", tag: "Genral" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title,note.discription,note.tag);
    
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex flex-col px-7 py-2 bg-slate-200 rounded-tl-3xl">
        <div className="text-lg font-semibold">
          <h1>Add Notes</h1>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
              onChange={onChange}
            />
            <input
              type="text"
              name="tag"
              id="tag"
              placeholder="Tag"
              className="w-full border-2 border-white px-3 py-1 text-sm outline-none placeholder:text-black placeholder:opacity-40 mt-4 mr-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
              onChange={onChange}
            />
          </div>
        </div>

        <textarea
          id="discription"
          name="discription"
          placeholder="Discription"
          className="mb-3 w-full border-2 border-white h-44 text-sm outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500 py-1 px-3 mt-4 resize-none leading-6 duration-200 ease-in-out rounded-lg"
          onChange={onChange}
        ></textarea>
        <button
          className="bg-blue-900 hover:bg-blue-600 px-4 py-2 font-semibold text-white w-full text-center mx-auto my-3 rounded-tr-lg rounded-bl-lg"
          onClick={handleClick}
        >
          Add Notes
        </button>
      </div>
    </div>
  );
}
