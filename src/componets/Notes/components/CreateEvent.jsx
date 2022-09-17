import React from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useForm } from "./useForm";

const initialValue = {};

export const CreateEvent = () => {
  const navigate = useNavigate();
  const { formState, onInputChange, onResetForm, title } =
    useForm(initialValue);
  // Method that returns to HomeNotes menu
  const goNotesMenu = () => {
    navigate("/notes");
  };

  // nandid generate new id
  const id = nanoid(10);
  console.log(formState);

  return (
    <div className="border flex flex-col justify-start p-5 rounded-lg shadow-lg bg-white max-w-md">
      <div className="h-1/4">
        <h2 className="my-3 text-2xl px-4 py-1.5 font-mono ">New Note</h2>
        <input
          onChange={onInputChange}
          type="text"
          name="title"
          value={title}
          placeholder="Title..."
          className="border rounded-xl px-2 py-1.5 w-full"
        />
      </div>
      <div>
        <div>
          <textarea
            className="border rounded-xl my-5 px-2 py-2"
            placeholder="description"
            name="description"
            id=""
            cols="40"
            rows="10"
          ></textarea>
          <div className=" flex justify-center items-center mt-3">
            <label className="px-4 py-1.5 bg-gray-400 font-semibold leading-tight rounded shadow-md">
              Category
            </label>
            <select
              className="border px-4 py-1.5 w-2/3 bg-green-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-green-700-700 hover:shadow-lg focus:bg-green-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-100-800 active:shadow-lg transition duration-150 ease-in-out"
              name="group"
              id=""
            >
              <option value="null">Select</option>
              <option value="reminder">Reminder</option>
              <option value="grocery">grocery</option>
              <option value="hobby">Hobby</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="flex space-x-2 justify-center w-full mt-4">
            <button
              onClick={goNotesMenu}
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
