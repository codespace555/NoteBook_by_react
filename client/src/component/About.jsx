import React, { useContext } from 'react'
import NoteContext from "./context/notes/noteContext"

export default function About() {
  const a = useContext(NoteContext)
  return (
    <div>
      polu {a.name}
    </div>
  )
}
