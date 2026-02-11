import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    name: null,
    email: null,
  },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

const handlePending = (state) => {
  state.isRefreshing = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isRefreshing = false;
  state.error = action.payload;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase("auth/register/pending", handlePending)
      .addCase("auth/register/fulfilled", (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase("auth/register/rejected", handleRejected)
      .addCase("auth/login/pending", handlePending)
      .addCase("auth/login/fulfilled", (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase("auth/login/rejected", handleRejected)
      .addCase("auth/logout/pending", handlePending)
      .addCase("auth/logout/fulfilled", (state) => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase("auth/logout/rejected", handleRejected)
      .addCase("auth/refresh/pending", handlePending)
      .addCase("auth/refresh/fulfilled", (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRefreshing = false;
        state.error = null;
      })
      .addCase("auth/refresh/rejected", handleRejected);
  },
});

export default authSlice.reducer;
