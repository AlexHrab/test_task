import { createSlice } from "@reduxjs/toolkit";
import {
  fetchCars,
  fetchAllCars,
  favoriteCar,
  loadCars,
  setNewPage,
} from "./operations";

const initialState = {
  allCars: [],
  cars: [],
  carsAmount: null,
  loading: false,
  error: null,
  favoriteCars: [],
  page: 1,
  carsRentalPrice: [],
  loadCars: true,
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
        state.allCars = payload;
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
      })
      .addCase(loadCars.fulfilled, (state, { payload }) => {
        state.loadCars = payload;
      })
      .addCase(setNewPage.fulfilled, (state, { payload }) => {
        state.page = payload;
      });
  },
});

export const carsReducer = slice.reducer;
