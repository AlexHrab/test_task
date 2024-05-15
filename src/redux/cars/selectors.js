import { createSelector } from "@reduxjs/toolkit";
import {
  selectCarsFilter,
  selectFavoritCarsFilter,
  selectRental,
  selecFavoriteRental,
  selectMileage,
  selectFavoriteMileage,
  selectShowBtn,
} from "../filter/selectors";

export const selectCars = (state) => state.cars.cars;
export const selectCarsAmount = (state) => state.cars.carsAmount;
export const selectFavorite = (state) => state.cars.favoriteCars;
export const selectRentalPrice = (state) => state.cars.carsRentalPrice;
export const selectLoading = (state) => state.cars.loading;
export const selectLoadCars = (state) => state.cars.loadCars;
export const selectPage = (state) => state.cars.page;
export const selectAllCars = (state) => state.cars.allCars;

export const selectFilteredCarsMemo = createSelector(
  [
    selectAllCars,
    selectCars,
    selectShowBtn,
    selectCarsFilter,
    selectRental,
    selectMileage,
  ],
  (allCars, cars, btn, filterName, price, mileage) => {
    const carsAll = !btn ? allCars : cars;
    return carsAll.filter(
      (car) =>
        car.make.toLowerCase().includes(filterName.toLowerCase()) &&
        Number(car.rentalPrice.slice(1)) >= price &&
        car.mileage >= mileage.minMileage &&
        car.mileage <= mileage.maxMileage
    );
  }
);

export const selectFavoriteFilteredCarsMemo = createSelector(
  [
    selectFavorite,
    selectFavoritCarsFilter,
    selecFavoriteRental,
    selectFavoriteMileage,
  ],
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
