import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showWebDrawer: false,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toogleWebDrawer(state, action) {
      state.showWebDrawer = action.payload;
    },
  },
});

export default appSlice.reducer;

export const { toogleWebDrawer } = appSlice.actions;
