import React from "react";
import { CreateEvent } from "../componets/Notes/components/CreateEvent";
import { HomeNotes } from "../componets/Notes/Pages/HomeNotes";

export const Test = () => {
  return (
    <>
      <HomeNotes />
    </>
  );
};

/*

<div className="border flex flex-col justify-start p-5 rounded-lg shadow-lg bg-white max-w-md rectangle">
      <div className="h-1/4">Testing...</div>
      <div>
        <h2 className="mt-3 text-2xl px-4 py-1.5 font-mono ">
          There is not events
        </h2>
        <div>
          <div className="flex space-x-2 justify-center w-full mt-4">
            <button
              type="button"
              className="w-full my-3 inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>

*/
