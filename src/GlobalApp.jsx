import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomeApp } from "./HomeApp";
import { DisplayEvents } from "./Pages/DisplayEvents";
import { FormApp } from "./Pages/FormApp";

import { Navbar } from "./Pages/Navbar";

export const GlobalApp = () => {
  return (
    <div className="container flex flex-col justify-center items-center mx-auto">
      <Navbar></Navbar>
      <Routes>
        <Route path="displayEvents" element={<DisplayEvents />}></Route>
        <Route path="/" element={<Navigate to="/displayEvents" />}></Route>
        <Route path="newContact" element={<FormApp />}></Route>
      </Routes>
    </div>
  );
};
