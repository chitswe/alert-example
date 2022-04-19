import { configureStore } from '@reduxjs/toolkit';
import alertReducer from '.';
export const store = configureStore({
  reducer: {
    alerts: alertReducer,
  },
});
