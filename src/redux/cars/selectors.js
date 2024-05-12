import { createSelector } from "@reduxjs/toolkit";
import {
  selectCarsFilter,
  selectFavoritCarsFilter,
  selectRental,
  selecFavoriteRental,
} from "../filter/selectors";

export const selectCars = (state) => state.cars.cars;
export const selectCarsAmount = (state) => state.cars.carsAmount;
export const selectFavorite = (state) => state.cars.favoriteCars;
export const selectRentalPrice = (state) => state.cars.carsRentalPrice;

export const selectFilteredCarsMemo = createSelector(
  [selectCars, selectCarsFilter, selectRental],
  (cars, filterName, price) => {
    return cars.filter(
      (car) =>
        car.make.toLowerCase().includes(filterName.toLowerCase()) &&
        Number(car.rentalPrice.slice(1)) >= price
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

// export const selectFilteredPriceMemo = createSelector(
//   [selectCars, selectRentalPrice],
//   (cars, filterName) => {
//     return cars.filter((car) =>
//       car.make.toLowerCase().includes(filterName.toLowerCase())
//     );
//   }
// );
