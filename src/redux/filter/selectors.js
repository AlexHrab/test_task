export const selectCarsFilter = (state) => state.filter.cars.make;
export const selectFavoritCarsFilter = (state) =>
  state.filter.favoriteCars.make;
export const selectRental = (state) => state.filter.rentalPrice;
export const selecFavoriteRental = (state) => state.filter.rentalFavoritePrice;
export const selectMileage = (state) => state.filter.mileage;
