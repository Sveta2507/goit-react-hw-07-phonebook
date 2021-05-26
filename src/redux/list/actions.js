import { createAction } from "@reduxjs/toolkit";

const addListRequest = createAction("contacts/addRequest");
const addListSuccess = createAction("contacts/addSuccess");
const addListError = createAction("contacts/addError");

const removeListRequest = createAction("contacts/removeRequest");
const removeListSuccess = createAction("contacts/removeSuccess");
const removeListError = createAction("contacts/removeError");

const fetchListRequest = createAction("contacts/fetchRequest");
const fetchListSuccess = createAction("contacts/fetchSuccess");
const fetchListError = createAction("contacts/fetchError");

const filterContact = createAction("FILTER_CONTACTS");

export default {
  addListRequest,
  addListSuccess,
  addListError,
  removeListRequest,
  removeListSuccess,
  removeListError,
  fetchListRequest,
  fetchListSuccess,
  fetchListError,
  filterContact,
};
