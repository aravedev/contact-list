import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { CreateEvent } from "./componets/Notes/components/CreateEvent";
import { HomeNotes } from "./componets/Notes/Pages/HomeNotes";
import { HomeApp } from "./HomeApp";
import { DisplayEvents } from "./Pages/DisplayEvents";
import { FormApp } from "./Pages/FormApp";

import { Navbar } from "./Pages/Navbar";
import { Test } from "./Pages/Test";

export const GlobalApp = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="displayEvents" element={<DisplayEvents />}></Route>
        <Route path="/" element={<Navigate to="/displayEvents" />}></Route>
        <Route path="contact" element={<FormApp />}></Route>
        <Route path="test" element={<Test />}></Route>
        <Route path="notes" element={<HomeNotes></HomeNotes>}></Route>
        <Route path="createNewNote" element={<CreateEvent />}></Route>
      </Routes>
    </div>
  );
};
