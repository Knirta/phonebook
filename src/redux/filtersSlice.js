import { createSlice } from "@reduxjs/toolkit";

export const selectFilter = (state) => state.filters.text;

const filtersSlice = createSlice({
  name: "filters",
  initialState: {
    text: "",
  },
  reducers: {
    changeFilter: (state, action) => {
      state.text = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
