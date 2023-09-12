import React from 'react'
import NoteContext from "./noteContext"
export default function NoteState(props) {
  const State = {
    "name":"naman",
    "class":"52",
  }
  return (
  

    <div>
      <NoteContext.Provider value = {State}>
        {props.children}
      </NoteContext.Provider>
    </div>
  )
}
