import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoPencil, GoArrowRight, GoTrashcan } from "react-icons/go";
import {
  FcShop,
  FcBriefcase,
  FcBinoculars,
  FcComments,
  FcAdvertising,
} from "react-icons/fc";

export const HomeNotes = () => {
  const navigate = useNavigate();

  const createNewNote = () => {
    navigate("/createNewNote");
  };

  return (
    <>
      <div className="border flex flex-col justify-start p-5 rounded-lg shadow-lg  bg-white max-w-md">
        <div className="flex justify-between my-3">
          <h2 className=" font-semibold items-center font-mono text-2xl">
            Notes
          </h2>
          <button
            onClick={createNewNote}
            className="flex justify-center items-center rounded-full bg-blue-600 text-white leading-normal uppercase shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9"
          >
            <GoPencil />
          </button>
        </div>
        <hr />
        <div className="flex justify-around my-5 w-96">
          <span>List of Notes</span>
          <span>Total Notes: 10</span>
        </div>
        <div>
          <div className="border rounded-lg shadow-lg  bg-white px-3 py-3 flex justify-between">
            <span className="flex justify-center items-center rounded-full bg-purple-600 text-white leading-normal uppercase shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
              <FcShop />
            </span>
            <p className="text-lg">**Title**</p>
            <button className="flex justify-center items-center rounded-full bg-green-600 text-white leading-normal uppercase shadow-md hover:bg-green-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-9 h-9">
              <GoArrowRight />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
