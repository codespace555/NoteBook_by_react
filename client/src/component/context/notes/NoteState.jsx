import React, { useState } from "react";
import NoteContext from "./noteContext";
import { useNavigate } from 'react-router-dom';
export default function NoteState(props) {
//  login
let  navigateTo=  useNavigate();
const loginurl = "http://localhost:8000/api/auth/login";
const [profile ,setProfile] = useState({name:"",email:"",bio:""})
const loginUser = async ( email, password) => {
  const res = await fetch(loginurl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email:email, password:password }),
  });
  const data = await res.json();
  if (data.success == true) {
    localStorage.setItem("token", data.token)
    navigateTo('/')
    console.log(data.name)
    setProfile({name:data.data.name,email:data.data.email,bio:data.data.bio})
    
} else {
    alert(data.message)
    
}
};
//................................................
  const url = "http://localhost:8000/api/user";
  const token = localStorage.getItem('token')
  console.log(token)
  //................................................

  const noteInit = [];

  const [notes, setNotes] = useState(noteInit);
  //................................................

  const getNote = async() => {
    console.log("polu")
    const res = await fetch(`${url}/notes`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
       "token": token,
      },
      
    });
    const data = res.json();
    console.log(data);
   
  };
  //................................................
  const addNote = async (title, description, tag) => {
    const res = await fetch(`${url}/addnotes`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const data = res.json();
    console.log(data);
    const note = {};
    setNotes(notes.concat(data));
    console.log(notes);
  };

  //.................................................................

  const DeleteNote = (id) => {
    const newNotes = notes.filter((note) => note._id !== id);
    console.log("deleting notes" + id);
    console.log(id);
    setNotes(newNotes);
  };

  //.................................................................

  const UpdateNote = async (id, title, description, tag = "General") => {
    const res = await fetch(`${url}/updatenote/${id}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${my_token}`,
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const data = res.json();
    console.log(data);

    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <div>
      <NoteContext.Provider
        value={{ notes, addNote, UpdateNote, DeleteNote, getNote ,loginUser,profile}}
      >
        {props.children}
      </NoteContext.Provider>
    </div>
  );
}
