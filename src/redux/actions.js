import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contact/add");

const handleDelete = createAction("contact/delete");

const handleFilter = createAction("contact/filter");

const postContacts = createAction("contacts/post");

export default {
  addContact,
  handleDelete,
  handleFilter,
  postContacts,
};
