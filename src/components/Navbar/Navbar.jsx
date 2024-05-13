import { NavLink, Outlet } from "react-router-dom";
import css from "./Navbar.module.css";
import { Cars } from "../Select/Cars";
import { MainSelect } from "../Select/Select";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  changeFilterCars,
  changeFilterFavoriteCars,
  changeFilterPrice,
  changeFavoriteFilterPrice,
  changeFilterMileage,
  changeFilterFavoriteMileage,
} from "../../redux/filter/slice";
import { useSelector } from "react-redux";
import {
  selectCarsAmount,
  selectCars,
  selectFavorite,
  selectRentalPrice,
} from "../../redux/cars/selectors";
import { useLocation } from "react-router-dom";
import "../Select/Select.css";
import { RentalPrice } from "../Select/rentalPrice";
import {
  selectRental,
  selectMileage,
  selectFavoriteMileage,
} from "../../redux/filter/selectors";
import { SearchForm } from "../SearchForm/SearchForm";

export function Navbar() {
  const currentMiliage = useSelector(selectMileage);
  const currentFavoriteMiliage = useSelector(selectFavoriteMileage);
  console.log(currentMiliage);

  const [selectedCar, setSelectedCar] = useState({ value: "", label: "" });
  const [selectedFavoriteCar, setSelectedFavoriteCar] = useState({
    value: "",
    label: "",
  });

  const [selectedPrice, setselectedPrice] = useState({ value: "", label: "" });
  const [selectedFavoritePrice, setselectedFavoritePrice] = useState({
    value: "",
    label: "",
  });

  const [formMileageValue, setFormMileageValue] = useState({
    minMileageValue: currentMiliage.minMileage,
    maxMileageValue: currentMiliage.maxMileage,
  });

  const [formFavoriteMileageValue, setformFavoriteMileageValue] = useState({
    minMileageValue: currentFavoriteMiliage.minMileage,
    maxMileageValue: currentFavoriteMiliage.maxMileage,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(changeFilterFavoriteCars(selectedFavoriteCar.value));
  }, [dispatch, selectedFavoriteCar]);

  useEffect(() => {
    dispatch(changeFilterCars(selectedCar.value));
  }, [dispatch, selectedCar]);

  useEffect(() => {
    dispatch(changeFilterPrice(selectedPrice.value));
  }, [dispatch, selectedPrice]);

  useEffect(() => {
    dispatch(changeFavoriteFilterPrice(selectedFavoritePrice.value));
  }, [dispatch, selectedFavoritePrice]);

  useEffect(() => {
    dispatch(
      changeFilterMileage({
        minMileage: formMileageValue.minMileageValue,
        maxMileage: formMileageValue.maxMileageValue,
      })
    );
  }, [formMileageValue]);

  useEffect(() => {
    dispatch(
      changeFilterFavoriteMileage({
        minMileage: formFavoriteMileageValue.minMileageValue,
        maxMileage: formFavoriteMileageValue.maxMileageValue,
      })
    );
  }, [formFavoriteMileageValue]);

  const location = useLocation();

  const link = location.pathname;

  const rentalPrice = RentalPrice();

  return (
    <div className={css.Container}>
      <div className={css.navbarContainer}>
        <ul className={css.navbarList}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/catalog">Catalog</NavLink>
          </li>
          <li>
            <NavLink to="/favorites">Favorites</NavLink>
          </li>
        </ul>
        {link === "/catalog" && (
          <div className={css.selectBox}>
            <div className={css.label}>
              <label htmlFor="input">Cars:</label>
              <MainSelect
                id="input"
                options={Cars}
                selectObj={selectedCar}
                SetselectObj={setSelectedCar}
                className="selectInput"
                classNamePrefix={"input"}
              />
            </div>
            <div className={css.label}>
              <label htmlFor="price">Rental price:</label>
              <MainSelect
                id="price"
                options={rentalPrice}
                selectObj={selectedPrice}
                SetselectObj={setselectedPrice}
                classNamePrefix={"price"}
              />
            </div>
            <SearchForm
              setFormMileageValue={setFormMileageValue}
              minValue={currentMiliage.minMileage}
              maxValue={currentMiliage.maxMileage}
            />
          </div>
        )}
        {link === "/favorites" && (
          <div className={css.selectBox}>
            <div className={css.label}>
              <label htmlFor="input">Cars:</label>
              <MainSelect
                options={Cars}
                selectObj={selectedFavoriteCar}
                SetselectObj={setSelectedFavoriteCar}
                className="selectInput"
                classNamePrefix="input"
              />
            </div>
            <div className={css.label}>
              <label htmlFor="price">Rental price:</label>
              <MainSelect
                id="price"
                options={rentalPrice}
                selectObj={selectedFavoritePrice}
                SetselectObj={setselectedFavoritePrice}
                classNamePrefix={"price"}
              />
            </div>
            <SearchForm
              setFormMileageValue={setformFavoriteMileageValue}
              minValue={currentFavoriteMiliage.minMileage}
              maxValue={currentFavoriteMiliage.maxMileage}
            />
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}
