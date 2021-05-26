// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import action from "./actions";

// const initialState = {
//   contacts: [],
//   filter: "",
// };

// const newContact = (state, action) => [...state, action.payload];

// const removeAnyContact = (state, action) =>
//   state.filter((contact) => contact.id !== action.payload);

// const items = createReducer(initialState.contacts, {
//   [action.addListSuccess]: newContact,
//   [action.fetchListSuccess]: (_, action) => action.payload,
//   [action.removeListSuccess]: removeAnyContact,
// });

// const filter = createReducer(initialState.filter, {
//   [action.filterContact]: (_, action) => action.payload,
// });
// const loading = createReducer(false, {
//   [action.addListRequest]: () => true,
//   [action.addListSuccess]: () => false,
// });

// export default combineReducers({ items, filter, loading });

import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import listAct from "./actions";

const initialState = {
  contacts: [],
  filter: "",
};

const newContact = (state, action) => [...state, action.payload];

const removeAnyContact = (state, action) =>
  state.filter((contact) => contact.id !== action.payload);

const items = createReducer(initialState.contacts, {
  [listAct.addListSuccess]: newContact,
  [listAct.fetchListSuccess]: (_, action) => action.payload,
  [listAct.removeListSuccess]: removeAnyContact,
});

const filter = createReducer(initialState.filter, {
  [listAct.filterContact]: (_, action) => action.payload,
});
const loading = createReducer(false, {
  [listAct.addListRequest]: () => true,
  [listAct.addListSuccess]: () => false,
});

export default combineReducers({ items, filter, loading });
