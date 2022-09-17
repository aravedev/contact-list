import { types } from "../../../types/types";

export const notesReducer = (initialState = [], action) => {
  switch (action.type) {
    case types.newNote:
      return [...initialState, action.payload];

    default:
      return initialState;
  }
};
