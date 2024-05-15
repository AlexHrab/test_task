import css from "./Car.module.css";
import { HiHeart } from "react-icons/hi2";
import { useDispatch, useSelector } from "react-redux";
import { favoriteCar } from "../../redux/cars/operations";
import { useState, useRef, useEffect } from "react";
import { selectFavorite } from "../../redux/cars/selectors";
import { Button } from "../Button/Button";
import { changeCoordinate } from "../../redux/filter/slice";

export function Car({ element, modalOpen }) {
  const dispatch = useDispatch();
  const favoriteCars = useSelector(selectFavorite);
  const carIsActive = favoriteCars.find((el) => el.id === element.id);
  const [isActive, setIsActive] = useState(true);
  const adress = element.address.split(",");

  const carElementRef = useRef(null);

  useEffect(() => {
    const carElement = carElementRef.current.getBoundingClientRect();
    dispatch(changeCoordinate(carElement.height));
  }, []);

  return (
    <li ref={carElementRef} className={css.item}>
      <div className={css.box}></div>
      <HiHeart
        className={carIsActive?.isActive ? css.active : css.icon}
        onClick={() => {
          dispatch(favoriteCar({ id: element.id, isActive }));
          setIsActive((prevState) => !prevState);
        }}
      />
      <img className={css.image} src={element.img} alt={element.model}></img>
      <div className={css.textBlock}>
        <div className={css.firstBlock}>
          <span>
            {element.make}, {element.year}
          </span>
          <span>{element.rentalPrice}</span>
        </div>
        <div className={css.secondBlock}>
          <span>
            {adress[1]} | {adress[2]} | {element.rentalCompany} | {element.type}{" "}
            | {element.model} | {element.mileage} | {element.accessories[1]}
          </span>
        </div>
      </div>
      <Button
        type={"button"}
        credentionals={"Learn more"}
        onClick={() => {
          modalOpen(element);
        }}
        clasName={"btn"}
      />
    </li>
  );
}
