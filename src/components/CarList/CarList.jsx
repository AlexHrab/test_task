import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { Car } from "../Car/Car";
import css from "./CarList.module.css";
import { selectFilteredCarsMemo } from "../../redux/cars/selectors";

export function CarList({ cars, modalOpen }) {
  return (
    <ul className={css.list}>
      {cars.map((el) => (
        <Car key={el.id} element={el} modalOpen={modalOpen} />
      ))}
    </ul>
  );
}
