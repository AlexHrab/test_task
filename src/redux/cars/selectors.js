import { createSelector } from "@reduxjs/toolkit";
import { selectNameFilter } from "../filter/selectors";

export const selectCars = (state) => state.cars.cars;
export const selectCarsAmount = (state) => state.cars.carsAmount;
export const selectFavorite = (state) => state.cars.favoriteCars;

export const selectFilteredCarsMemo = createSelector(
  [selectCars, selectNameFilter],
  (cars, filterName) => {
    return cars.filter((car) =>
      car.make.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);

export const selectFavoriteFilteredCarsMemo = createSelector(
  [selectFavorite, selectNameFilter],
  (cars, filterName) => {
    return cars.filter((car) =>
      car.make.toLowerCase().includes(filterName.toLowerCase())
    );
  }
);
