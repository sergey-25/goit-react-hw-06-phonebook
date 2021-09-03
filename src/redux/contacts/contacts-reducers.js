import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import * as actions from "./contacts-actions";

const initialState = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const contacts = createReducer(initialState, {
  [actions.addContact]: (state, { payload }) =>
    state.some(({ name }) => name === payload.name)
      ? alert(`Contact ${payload.name} already exists`)
      : [payload, ...state],

  [actions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [actions.getFilterValue]: (_, { payload }) => payload,
});
export default combineReducers({
  contacts,
  filter,
});