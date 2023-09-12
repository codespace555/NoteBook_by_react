import React, { useState } from 'react'

export default function NoteItem({title,description,tag}) {

  const [like , setLike] = useState("regular")
  const handleClick=()=>{
    setLike("solid")
  }

  return (
 
       <div className="p-4 bg-gray-200 w-80 border-2 rounded-3xl h-56 flex flex-col  justify-center ">
    <h1 className="inline-flex items-center text-lg font-semibold ">
      {title}  {" "}
      <i className="fa-solid fa-arrow-trend-up"></i>
     
    </h1>
    <p className="mt-3 overflow-scroll text-sm text-gray-900 no-scrollbar">
     {description}
    </p>
    <div className="mt-4 flex items-center justify-between">
    
      <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
       #{tag}
      </span>
     
    
    </div>
    <div className="mt-4 flex items-start justify-evenly">
    <button><i className="fa-solid fa-pen-to-square"></i></button>
      <button><i className="fa-solid fa-trash"></i></button>
    </div>
    </div>
  )
}
