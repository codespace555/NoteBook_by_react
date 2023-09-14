import React, { useContext } from "react";
import NoteContext from "./context/notes/noteContext";

export default function Profile() {
  const context = useContext(NoteContext);
  const { profile} = context;
  console.log(profile)
  return (
    <div>
      {" "}
      <div className="flex items-center justify-center flex-wrap">
        {" "}
        <div className=" items-center justify-center flex flex-col  ">
          {" "}
          <div className="flex items-center justify-around h-60 w-full lg:text-left text-center ">
            {" "}
           <div className="flex flex-col md:flex-row items-center ">
              {" "}
              <img
                src="https://source.unsplash.com/100x100/?man,boy"
                alt=""
                className="rounded-full"
              />{" "}
              <div>
                {" "}
                <div className="font-bold text-gray-600 mx-4">{profile.name}</div>{" "}
                <div className="text-sm font-medium text-gray-500 hover:text-stone-500 mx-4">
                  <a href="#">{profile.email}</a>
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="text-gray-600 text-xl font-medium lg:text-left text-center mb-5">
            {" "}
          {profile.bio}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
