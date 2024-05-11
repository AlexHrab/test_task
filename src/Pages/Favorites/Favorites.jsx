import { useSelector } from "react-redux";
import { selectFavoriteFilteredCarsMemo } from "../../redux/cars/selectors";
import { CarList } from "../../components/CarList/CarList";
import { useEffect, useState } from "react";
import CarModal from "../../components/Modal/Modal";

export function Favorites() {
  const favoriteCars = useSelector(selectFavoriteFilteredCarsMemo);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [object, setObject] = useState({});

  function isOpenModal(data) {
    setObject(data);
    setModalIsOpen(true);
  }

  function close() {
    setModalIsOpen(false);
  }

  return (
    <div>
      <CarList cars={favoriteCars} modalOpen={isOpenModal} />
      {modalIsOpen && (
        <CarModal isOpen={modalIsOpen} onClose={close} object={object} />
      )}
    </div>
  );
}
