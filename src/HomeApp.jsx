import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { DisplayEvents } from "./Pages/DisplayEvents";
import { FormApp } from "./Pages/FormApp";
import { Navbar } from "./Pages/Navbar";
import { Test } from "./Pages/Test";

export const HomeApp = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto">
        <div>HomeApp</div>
      </div>
    </>
  );
};

/*
<div>
          <Outlet />
        </div>
*/

/*
export const HomeApp = () => {
  return (
    <>
      <div className="container flex flex-col justify-center items-center mx-auto">
        <div>HomeApp</div>
        <Navbar />

        <DisplayEvents />
      </div>
    </>
  );
};

*/
