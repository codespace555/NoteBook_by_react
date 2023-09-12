import React from "react";

export default function AddNote() {
  return (
    <div>
      <div className="flex flex-col px-7 py-2 bg-slate-200 rounded-tl-3xl">
        <div className="text-lg font-semibold">
          <h1>Add Notes</h1>
        </div>
        <div className="flex flex-col md:flex-row ">
          <div className="">
          <input
          type="email"
          name=""
          id=""
          placeholder="Title"
          className="w-full border-2 border-white text-sm outline-none px-3 py-1 placeholder:text-black placeholder:opacity-40 mt-4 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
        />
            <input
              type="text"
              name=""
              id=""
              placeholder="Tag"
              className="w-full border-2 border-white px-3 py-1 text-sm outline-none placeholder:text-black placeholder:opacity-40 mt-4 mr-2 focus:border-blue-500 duration-200 ease-in-out rounded-lg"
            />
          </div>
        </div>
       

        <textarea
          id="message"
          name="message"
          placeholder="Discription"
          className="mb-3 w-full border-2 border-white h-44 text-sm outline-none placeholder:text-black placeholder:opacity-40 focus:border-blue-500 py-1 px-3 mt-4 resize-none leading-6 duration-200 ease-in-out rounded-lg"
        ></textarea>
        <button className="bg-blue-900 hover:bg-blue-600 px-4 py-2 font-semibold text-white w-full text-center mx-auto my-3 rounded-tr-lg rounded-bl-lg">
          Add Notes
        </button>
      </div>
    </div>
  );
}
