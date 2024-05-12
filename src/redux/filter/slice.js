import { createSlice } from "@reduxjs/toolkit";

export const initialFilter = {
  cars: { make: "" },
  favoriteCars: { make: "" },
  rentalPrice: null,
  rentalFavoritePrice: null,
};

export const filterSlice = createSlice({
  name: "filter",
  initialState: initialFilter,
  reducers: {
    changeFilterCars: (state, { payload }) => {
      state.cars.make = payload;
    },
    changeFilterFavoriteCars: (state, { payload }) => {
      state.favoriteCars.make = payload;
    },
    changeFilterPrice: (state, { payload }) => {
      state.rentalPrice = payload;
    },
    changeFavoriteFilterPrice: (state, { payload }) => {
      state.rentalFavoritePrice = payload;
    },
  },
});

export const filterReducer = filterSlice.reducer;
export const { changeFilterCars } = filterSlice.actions;
export const { changeFilterFavoriteCars } = filterSlice.actions;
export const { changeFilterPrice } = filterSlice.actions;
export const { changeFavoriteFilterPrice } = filterSlice.actions;
