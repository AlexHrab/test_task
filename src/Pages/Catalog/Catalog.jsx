import { useSelector } from "react-redux";

import { useState } from "react";
import { CarList } from "../../components/CarList/CarList";
import { Button } from "../../components/Button/Button";

import {
  selectCarsAmount,
  selectCars,
  selectFilteredCarsMemo,
  selectLoading,
} from "../../redux/cars/selectors";
import CarModal from "../../components/Modal/Modal";
import { Loader } from "../../components/Loader/Loader";
import css from "./Catalog.module.css";
import { selectShowBtn } from "../../redux/filter/selectors";

export function Catalog({ onClick }) {
  const carsAmount = useSelector(selectCarsAmount);
  const carSelect = useSelector(selectCars);
  const isLoading = useSelector(selectLoading);
  const showBtn = useSelector(selectShowBtn);

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
      {carsAmount > carSelect.length && cars.length > 0 && showBtn && (
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
