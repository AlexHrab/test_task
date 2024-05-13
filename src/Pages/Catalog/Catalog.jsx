import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchCars } from "../../redux/cars/operations";
import { useEffect, useState } from "react";
import { CarList } from "../../components/CarList/CarList";
import { Button } from "../../components/Button/Button";
import { Cars } from "../../components/Select/Cars";
import { MainSelect } from "../../components/Select/Select";
import {
  selectCarsAmount,
  selectCars,
  selectFilteredCarsMemo,
  selectLoading,
} from "../../redux/cars/selectors";
import CarModal from "../../components/Modal/Modal";
import { Loader } from "../../components/Loader/Loader";
import css from "./Catalog.module.css";

export function Catalog({ onClick }) {
  const dispatch = useDispatch();
  const carsAmount = useSelector(selectCarsAmount);
  const carSelect = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  // console.log(carsAmount);
  // console.log(carSelect.length);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [object, setObject] = useState({});

  function isOpenModal(data) {
    setObject(data);
    setModalIsOpen(true);
  }

  function close() {
    setModalIsOpen(false);
  }

  const cars = useSelector(selectFilteredCarsMemo);

  return (
    <div className={css.catalog}>
      <CarList cars={cars} modalOpen={isOpenModal} />
      {carsAmount > carSelect.length && cars.length > 0 && (
        <Button
          type={"button"}
          credentionals={"Load more"}
          onClick={onClick}
          clasName={"catalogBtn"}
        />
      )}
      {isLoading && <Loader />}
      {modalIsOpen && (
        <CarModal isOpen={modalIsOpen} onClose={close} object={object} />
      )}
    </div>
  );
}
