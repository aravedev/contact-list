import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  let activeStyle = {
    textDecoration: "underline",
  };
  return (
    <>
      <nav className="relative border mb-3 max-w-md flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light">
        <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
          <NavLink className="mx-2 space-x-3" to="/">
            Home
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="mx-2 space-x-3"
            to="/contact"
          >
            Contacts
          </NavLink>
          <NavLink
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            className="mx-2 space-x-3"
            to="test"
          >
            Test
          </NavLink>
        </div>
      </nav>
    </>
  );
};
