import { createSelector } from "@reduxjs/toolkit";
import {
  selectCarsFilter,
  selectFavoritCarsFilter,
  selectRental,
  selecFavoriteRental,
  selectMileage,
} from "../filter/selectors";

export const selectCars = (state) => state.cars.cars;
export const selectCarsAmount = (state) => state.cars.carsAmount;
export const selectFavorite = (state) => state.cars.favoriteCars;
export const selectRentalPrice = (state) => state.cars.carsRentalPrice;

export const selectFilteredCarsMemo = createSelector(
  [selectCars, selectCarsFilter, selectRental, selectMileage],
  (cars, filterName, price, mileage) => {
    return cars.filter(
      (car) =>
        car.make.toLowerCase().includes(filterName.toLowerCase()) &&
        Number(car.rentalPrice.slice(1)) >= price &&
        car.mileage >= mileage.minMileage &&
        car.mileage <= mileage.maxMileage
    );
  }
);

export const selectFavoriteFilteredCarsMemo = createSelector(
  [selectFavorite, selectFavoritCarsFilter, selecFavoriteRental],
  (cars, filterName, price) => {
    return cars.filter(
      (car) =>
        car.make.toLowerCase().includes(filterName.toLowerCase()) &&
        Number(car.rentalPrice.slice(1)) >= price
    );
  }
);
