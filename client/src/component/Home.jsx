import React from "react";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Notes from "./Notes/Notes";
import Profile from "./Profile";


export default function Home() {
 
 
  return (
    <div>
      
      <div>
        <div className="flex justify-center w-full h-auto">
          {" "}
          <div className="flex flex-col md:flex-row justify-center mt-5 w-full p-5">
          <div className="flex flex-col  text-black  text-center rounded-md md:w-96
            ">
            <Profile />
              <Calendar />
              
              </div>
            <div className="flex flex-col bg-blue-900 text-black rounded-br-3xl p-5 ">
            <Notes />
            </div>
          </div>
        </div>
      </div>
     

    </div>
  );
}
