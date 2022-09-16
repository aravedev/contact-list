import React from "react";

export const FormApp = () => {
  return (
    <div className="border flex flex-col justify-start p-5 rounded-lg shadow-lg bg-white max-w-md">
      <div className="h-1/4">
        <img
          className="max-w-full"
          src="https://picsum.photos/400/300"
          alt="english robin bird"
        />
      </div>
      <div>
        <h2 className="mt-3 text-2xl px-4 py-1.5 font-mono ">New Contact</h2>
        <div>
          <input
            className="block border w-full mt-3 h-8 px-4 py-1.5"
            type="text"
            placeholder="Name..."
          />
          <input
            className="block border w-full mt-3 h-8 px-4 py-1.5"
            type="number"
            placeholder="Phone..."
          />
          <input
            className="block border w-full mt-3 h-8 px-4 py-1.5"
            type="email"
            placeholder="Email..."
          />
          <div className=" flex justify-center items-center mt-3">
            <label className="px-4 py-1.5 bg-gray-400 font-semibold leading-tight rounded shadow-md">
              Select Group
            </label>
            <select
              className="border px-4 py-1.5 w-2/3 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100-800 active:shadow-lg transition duration-150 ease-in-out"
              name="group"
              id=""
              placeholder="Groups"
            >
              <option value="null">Select</option>
              <option value="coworker">Friends</option>
              <option value="family">Family</option>
              <option value="acquaintance">Acquaintance</option>
            </select>
          </div>
          <div className="flex space-x-2 justify-center w-full mt-4">
            <button
              type="button"
              className="w-full my-3 inline-block px-6 py-2.5 bg-red-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-red-600 hover:shadow-lg focus:bg-red-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-red-700 active:shadow-lg transition duration-150 ease-in-out"
            >
              Cancel
            </button>
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
  );
};
