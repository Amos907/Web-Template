import { configureStore } from "@reduxjs/toolkit";
import appReducer from "./../features/appStates/app.slice";

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});
