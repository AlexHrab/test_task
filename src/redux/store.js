import { carsReducer } from "./cars/slice";
import { configureStore } from "@reduxjs/toolkit";
import { filterReducer } from "./filter/slice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "cars",
  version: 1,
  storage,
  // whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    cars: persistReducer(persistConfig, carsReducer),
    filter: filterReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
