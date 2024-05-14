import { NavLink } from "react-router-dom";
import css from "./Home.module.css";
import { useDispatch } from "react-redux";
import { changeFilterCars } from "../../redux/filter/slice";
import { useSelector } from "react-redux";
import { selectCars } from "../../redux/cars/selectors";
import { Logos } from "./Logo";
import { Cars } from "../../components/Select/Cars";

export function Home() {
  const dispatch = useDispatch();
  // const cars = useSelector(selectCars);

  function onClick(value) {
    dispatch(changeFilterCars(value.toString()));
  }

  return (
    <div>
      <ul className={css.list}>
        {Cars.slice(1).map((el) => (
          <li>
            <NavLink
              to="catalog"
              className={css.car}
              onClick={() => onClick(el.value)}
            >
              {
                <img
                  className={css.image}
                  src={Logos.find((elem) => elem.value === el.value)?.label}
                ></img>
              }
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}
