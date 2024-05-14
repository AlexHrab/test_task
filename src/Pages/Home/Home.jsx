import { NavLink } from "react-router-dom";
import css from "./Home.module.css";
import { useDispatch } from "react-redux";
import { changeFilterCars, changeShowBtn } from "../../redux/filter/slice";

import { Logos } from "./Logo";
import { Cars } from "../../components/Select/Cars";

export function Home() {
  const dispatch = useDispatch();

  function onClick(value) {
    dispatch(changeFilterCars(value.toString()));
    dispatch(changeShowBtn(false));
  }

  return (
    <div>
      <p className={css.text}>Please select a car brand:</p>
      <ul className={css.list}>
        {Cars.slice(1).map((el) => (
          <li key={el.value}>
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
