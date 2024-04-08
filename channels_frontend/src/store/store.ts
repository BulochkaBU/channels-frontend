import { configureStore } from "@reduxjs/toolkit";
import channelsSlice from "./channelsSlice";
import { channelsApi } from "./channelsApi";

const store = configureStore({
  reducer: {
    channelsSlice,
    [channelsApi.reducerPath]: channelsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(channelsApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
