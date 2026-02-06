import axios from "axios";
import { fetchInProgress, fetchSuccess, fetchError } from "./contactsSlice.js";

axios.defaults.baseURL = "https://6985e51d6964f10bf254d78b.mockapi.io";

export const fetchContacts = () => async (dispatch) => {
  try {
    dispatch(fetchInProgress());
    const response = await axios.get("/contacts");
    dispatch(fetchSuccess(response.data));
  } catch (error) {
    dispatch(fetchError(error.message));
  }
};
