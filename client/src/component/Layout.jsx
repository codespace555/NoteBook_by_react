import React from "react";

import { Outlet } from "react-router-dom";
import Navbar from "./Navebar";
import Footer from "./Footer";
import NoteState from "./context/notes/NoteState";

export default function Layout() {
  return (
    <>
      <NoteState>
        <Navbar />
        <Outlet />
        <Footer />
      </NoteState>
    </>
  );
}
