import action from "../list/actions";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000/";

const addContact =
  ({ name, number }) =>
  (dispatch) => {
    dispatch(action.addListRequest());
    axios
      .post("/contacts", { name, number })
      .then((response) => {
        dispatch(action.addListSuccess(response.data));
      })
      .catch((error) => dispatch(action.addListError(error)));
  };

const removeContact = (id) => (dispatch) => {
  dispatch(action.removeListRequest());
  axios
    .delete(`/contacts/${id}`)
    .then(() => {
      dispatch(action.removeListSuccess(id));
    })
    .catch((error) => dispatch(action.removeListError(error)));
};

const fetchContact = () => (dispatch) => {
  dispatch(action.fetchListRequest());

  axios
    .get("/contacts")
    .then(({ data }) => {
      dispatch(action.fetchListSuccess(data));
    })
    .catch((error) => dispatch(action.fetchListError(error)));
};

export default {
  addContact,
  removeContact,
  fetchContact,
};
