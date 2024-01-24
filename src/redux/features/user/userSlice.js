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

export default userSlice.reducer;
