import React, { useState } from "react";
import NoteContext from "./noteContext";
export default function NoteState(props) {
  const notesInit = [
    {
      _id: "64ff51b2e4fec5489a988343",
      user: "64fe19e0b463e82bb7855fbb",
      title: "polu",
      description: "all thing are good",
      tag: "General",
      date: "2023-09-11T17:43:14.370Z",
      __v: 0,
    },
    {
      _id: "64ff51bde4fec54589a988346",
      user: "64fe19e0b463e82bb7855fbb",
      title: "polu",
      description: "all thing are good",
      tag: "General",
      date: "2023-09-11T17:43:25.687Z",
      __v: 0,
    },
    {
      _id: "64ff51bde4fec5489a9883465",
      user: "64fe19e0b463e82bb7855fbb",
      title: "polu",
      description: "all thing are good",
      tag: "General",
      date: "2023-09-11T17:43:25.687Z",
      __v: 0,
    },
    {
      _id: "64ff51bde4fec5489a9883466",
      user: "64fe19e0b463e82bb7855fbb",
      title: "polu",
      description: "all thing are good",
      tag: "General",
      date: "2023-09-11T17:43:25.687Z",
      __v: 0,
    },
    {
      _id: "64ff51bde4fec5489a9883461",
      user: "64fe19e0b463e82bb7855fbb",
      title: "polu",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident ab nulla quod dignissimos vel non corrupti doloribus voluptatum eveniet",
      tag: "General",
      date: "2023-09-11T17:43:25.687Z",
      __v: 0,
    },
    {
      _id: "64ff51bde4fec5489a9883462",
      user: "64fe19e0b463e82bb7855fbb",
      title: "polu",
      description: "all thing are good",
      tag: "General",
      date: "2023-09-11T17:43:25.687Z",
      __v: 0,
    },
  ];

  const [notes, setNotes] = useState(notesInit);

  const addNote = (title, description, tag) => {
    let note = {
      _id: "64ff51bde4fec5489a9883462",
      user: "64fe19e0b463e82bb7855fbb",
      title: "Edit by api",
      description: "all thing are good Edit",
      tag: "General",
      date: "2023-09-11T17:43:25.687Z",
      __v: 0,
    };
    setNotes(notes.push(note));
  };

  const editNote = (_id) => {};
  const deleteNote = (_id) => {};

  return (
    <div>
      <NoteContext.Provider value={{ notes, editNote, addNote, deleteNote }}>
        {props.children}
      </NoteContext.Provider>
    </div>
  );
}
