import React from 'react'
import NoteContext from "./noteContext"
export default function NoteState(props) {
  const State = 
    [
      {
          "_id": "64ff51b2e4fec5489a988343",
          "user": "64fe19e0b463e82bb7855fbb",
          "title": "polu",
          "description": "all thing are good",
          "tag": "General",
          "date": "2023-09-11T17:43:14.370Z",
          "__v": 0
      },
      {
          "_id": "64ff51bde4fec5489a988346",
          "user": "64fe19e0b463e82bb7855fbb",
          "title": "polu",
          "description": "all thing are good",
          "tag": "General",
          "date": "2023-09-11T17:43:25.687Z",
          "__v": 0
      },
      {
          "_id": "64fff377d9269868a9d93026",
          "user": "64fe19e0b463e82bb7855fbb",
          "title": "polu",
          "description": "all thing are good",
          "tag": "General",
          "date": "2023-09-12T05:13:27.333Z",
          "__v": 0
      }
  ]
  
  return (
  

    <div>
      <NoteContext.Provider value = {State}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}
