import { useSelector } from "react-redux";
import {
  selectFavoriteFilteredCarsMemo,
  selectLoading,
} from "../../redux/cars/selectors";
import { CarList } from "../../components/CarList/CarList";
import { useEffect, useState } from "react";
import CarModal from "../../components/Modal/Modal";
import { Loader } from "../../components/Loader/Loader";
import css from "./Favorites.module.css";

export function Favorites() {
  const favoriteCars = useSelector(selectFavoriteFilteredCarsMemo);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [object, setObject] = useState({});
  const isLoading = useSelector(selectLoading);

  function isOpenModal(data) {
    setObject(data);
    setModalIsOpen(true);
  }

  function close() {
    setModalIsOpen(false);
  }

  return isLoading ? (
    <Loader />
  ) : (
    <div>
      <CarList cars={favoriteCars} modalOpen={isOpenModal} />
      {modalIsOpen && (
        <CarModal isOpen={modalIsOpen} onClose={close} object={object} />
      )}
    </div>
  );
}
