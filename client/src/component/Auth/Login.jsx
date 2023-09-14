import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import NoteContext from "../context/notes/noteContext";
export default function Login() {
  const context = useContext(NoteContext);
  const { loginUser } = context;
  const [auth, SetAuth] = useState({ email: "", password: "" });
  const handleClick = async (e) => {
    e.preventDefault();
    loginUser(auth.email, auth.password);
  };
  const onChange = (e) => {
    SetAuth({ ...auth, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="flex justify-center">
        {" "}
        <div className="flex flex-col justify-center">
          {" "}
          <div className="flex flex-col md:flex-row max-w-7xl justify-center items-center ">
            {" "}
            <div className="overflow-hidden w-full m-4 flex justify-center bg-gray-50 rounded-lg shadow-xl">
              {" "}
              <div className="flex flex-col md:flex-row items-center shadow-md h-full ">
                {" "}
                <div className=" md:w-1/2 overflow-hidden ">
                  {" "}
                  <div className="flex flex-col items-center justify-center text-stone-400">
                    {" "}
                    <ion-icon
                      name="logo-amplify"
                      className="text-5xl text-fuchsia-600"
                    ></ion-icon>{" "}
                    <div className="flex flex-col">
                      {" "}
                      <label htmlFor="email" className="m-2">
                        EMAIL
                      </label>{" "}
                      <input
                        className="border-b m-2 bg-gray-50 focus:outline-none"
                        type="email"
                        name="email"
                        id="email"
                        value={auth.email}
                        onChange={onChange}
                      />{" "}
                      <label htmlFor="password" className="m-2">
                        PASSWORD
                      </label>{" "}
                      <input
                        className="border-b m-2 bg-gray-50 focus:outline-none"
                        name="password"
                        id="password"
                        value={auth.password}
                        onChange={onChange}
                      />{" "}
                      <div className="flex m-2">
                        {" "}
                        <button
                          className="bg-gradient-to-l from-fuchsia-600 to-cyan-400 px-6 py-1 rounded-2xl text-white font-medium"
                          onClick={handleClick}
                        >
                          LOGIN
                        </button>{" "}
                        <Link to="/singup">
                          <button className="text-transparent bg-clip-text bg-gradient-to-l from-fuchsia-600 to-cyan-400 font-bold ml-2 border-2 rounded-2xl px-6 border-cyan-400">
                            CREATE ACCOUNT
                          </button>
                        </Link>{" "}
                      </div>{" "}
                      <div className="m-2">Forgotten your login details?</div>{" "}
                      <div className="font-medium ml-2">
                        Get Help Signing In
                      </div>{" "}
                    </div>{" "}
                  </div>{" "}
                </div>{" "}
                <div className=" md:w-1/2 overflow-hidden ">
                  {" "}
                  <img
                    src="https://source.unsplash.com/700x600/?computer,login"
                    alt=""
                    className=""
                  />{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
    </div>
  );
}
