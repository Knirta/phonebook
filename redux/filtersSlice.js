import { createAction } from "@reduxjs/toolkit";

export const changeFilter = createAction("filters/change");

const initialState = {
  filters: {
    text: "",
  },
};

export default function filtersReducer(
  state = initialState.filters,
  { type, payload },
) {
  switch (type) {
    case "filters/change":
      return {
        ...state,
        text: payload,
      };
    default:
      return state;
  }
}
