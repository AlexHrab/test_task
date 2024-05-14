import { Car } from "../Car/Car";
import css from "./CarList.module.css";

export function CarList({ cars, modalOpen }) {
  return (
    <ul className={css.list}>
      {cars.map((el) => (
        <Car key={el.id} element={el} modalOpen={modalOpen} />
      ))}
    </ul>
  );
}
