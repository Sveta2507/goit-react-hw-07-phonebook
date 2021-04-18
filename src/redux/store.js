import {
  contactsReducer,
  filterReducer,
  notificationReducer,
  loadingReducer,
} from "./reducers";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
    isExists: notificationReducer,
    isLoading: loadingReducer,
  },
});

export default store;
