import { createSelector } from "@reduxjs/toolkit";

const getIsExist = (state) => state.isExists;
const getLoading = (state) => state.isLoading;
const getContact = (state) => state.contacts;
const getFilter = (state) => state.filter;

const getAll = createSelector([getContact, getFilter], (contacts, filter) => {
  return contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
});

export { getLoading, getIsExist, getContact, getFilter, getAll };
