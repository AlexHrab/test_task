import { createSlice } from "@reduxjs/toolkit";
import { fetchCars, fetchAllCars, favoriteCar } from "./operations";

const initialState = {
  cars: [],
  carsAmount: null,
  loading: false,
  error: null,
  favoriteCars: [],
  page: null,
  carsRentalPrice: [],
};

export const slice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCars.fulfilled, (state, { payload }) => {
        state.cars.push(...payload);
        state.loading = false;
      })
      .addCase(fetchCars.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchCars.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(fetchAllCars.fulfilled, (state, { payload }) => {
        state.carsAmount = payload.length;
        payload.map((el) => {
          state.carsRentalPrice.push(Number(el.rentalPrice.slice(1)));
        });
      })
      .addCase(favoriteCar.fulfilled, (state, { payload }) => {
        const CarFavorite = state.cars.find((el) => el.id === payload.id);
        const findFavoriteCar = state.favoriteCars.find(
          (el) => el.id === CarFavorite.id
        );
        if (findFavoriteCar) {
          const findCars = state.favoriteCars.filter(
            (el) => el.id !== CarFavorite.id
          );
          state.favoriteCars = findCars;
        } else {
          state.favoriteCars.push({
            ...CarFavorite,
            isActive: payload.isActive,
          });
        }
      });
  },
});

export const carsReducer = slice.reducer;
