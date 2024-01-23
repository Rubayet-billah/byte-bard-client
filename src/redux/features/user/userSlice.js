import constants from "@/utils/constants";
import { getFromLocalStorage } from "@/utils/helperFunctions";
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: getFromLocalStorage(constants.authKey),
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, setLoading, setError, clearUser } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectLoading = (state) => state.user.isLoading;
export const selectError = (state) => state.user.error;

export default userSlice.reducer;
