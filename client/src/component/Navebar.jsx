import React from "react";
import { NavLink,Link } from "react-router-dom";
export default function Navbar() {
  return (
    <header className="shadow sticky z-50 top-0 w-full">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 w-full dark:bg-slate-800">
        <div className="flex flex-wrap justify-between items-cente ">
          <Link to="/" className="flex items-center">
            <img
              src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
              className="mr-3 h-12
              mix-blend-color-burn"
              alt="Logo"
              
            />
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to="/login"
              className="text-gray-100 hover:bg-gray-500 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
            <Link
              to="/singup"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign up
            </Link>
          </div>
          <div
            className=" justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b 
                    ${(isActive ? "text-blue-700":"text-gray-700")} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                  to="/"
                >
                  Home
                </NavLink>
               
              </li>
              <li>
                <NavLink
                  className={({isActive}) =>
                    `block py-2 pr-4 pl-3 duration-200 border-b 
                    ${(isActive ? "text-blue-700":"text-gray-700")} border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  } to="/about"
                >
                 About
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
