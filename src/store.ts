import { configureStore } from "@reduxjs/toolkit";
import championReducer from "./state/championSlice";

export const store = configureStore({
  reducer: {
    champion: championReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
