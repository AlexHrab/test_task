import { NavLink, Outlet } from "react-router-dom";
import css from "./Navbar.module.css";
import { Cars } from "../Select/Cars";
import { MainSelect } from "../Select/Select";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { changeFilterName } from "../../redux/filter/slice";
import { useSelector } from "react-redux";
import {
  selectCarsAmount,
  selectCars,
  selectFavorite,
} from "../../redux/cars/selectors";
import { useLocation } from "react-router-dom";
import "../Select/Select.css";

export function Navbar() {
  const [selectedCar, setSelectedCar] = useState({ value: "", label: "" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(changeFilterName(selectedCar.value));
  }, [dispatch, selectedCar]);

  const location = useLocation();

  const link = location.pathname;

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
        {link !== "/" && (
          <div className={css.selectBox}>
            <MainSelect
              options={Cars}
              selectObj={selectedCar}
              SetselectObj={setSelectedCar}
              className="selectInput"
              classNamePrefix="input"
            />
          </div>
        )}
      </div>
      <Outlet />
    </div>
  );
}
