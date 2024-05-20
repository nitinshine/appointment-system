import { configureStore } from "@reduxjs/toolkit";
import appointmentSlice from "./slice/appointmentSlice";

export const store = configureStore({
  reducer: {
    appointment: appointmentSlice,
  },
});
