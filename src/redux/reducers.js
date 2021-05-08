import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import contactsActions from "./actions.js";

const addContact = (state, action) => {
  const contacts = [...state, action.payload];
  localStorage.setItem("contacts", JSON.stringify(contacts));
  return contacts;
};

const deleteContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const state = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const items = createReducer(state, {
  [contactsActions.handleDelete]: deleteContact,
  [contactsActions.addContact]: addContact,
});

const filter = createReducer("", {
  [contactsActions.handleFilter]: (_, action) => action.payload,
});

export default combineReducers({ items, filter });
