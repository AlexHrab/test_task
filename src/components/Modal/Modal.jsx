import Modal from "react-modal";
import css from "./Modal.module.css";

import { VscChromeClose } from "react-icons/vsc";

function CarModal({ isOpen, onClose, object }) {
  const adress = object.address?.split(",");

  const rental = object.rentalConditions?.split("\n");
  const ageIndex = rental[0].indexOf(":");
  const rentalText = rental[0].slice(0, ageIndex + 1);
  const rentalAge = rental[0].slice(ageIndex + 1);

  const mileage = object.mileage.toString();
  const mileageFirstPath = mileage.slice(0, 1);
  const mileageSecondPath = mileage.slice(1);
  return (
    <div>
      <VscChromeClose className={css.icon} onClick={onClose} />
      <Modal
        isOpen={isOpen}
        className={css.modal}
        onRequestClose={onClose}
        shouldCloseOnEsc={true}
        ariaHideApp={false}
        overlayClassName={css.overlay}
        preventScroll={true}
      >
        <img className={css.image} src={object.img} alt={object.model}></img>
        <div className={css.textBox}>
          <div className={css.nameAndButton}>
            <span className={css.nameAdYear}>
              {object.make} <span className={css.model}>{object.model}</span>,{" "}
              {object.year}
            </span>
            <a className={css.modalBtn} href="tel:+380730000000">
              Rental car
            </a>
          </div>
          <span className={css.cityAndCountry}>
            {adress[1]} | {adress[2]} | id: {object.id} | Year: {object.year} |{" "}
            Type: {object.type} Fuel Consumption: {object.fuelConsumption}
          </span>
          <span className={css.description}>{object.description}</span>
          <span className={css.accessoriesTitle}>
            Accessories and functionalities:
          </span>
          <span className={css.accessoriesText}>
            {object.accessories[0]} | {object.accessories[1]} |{" "}
            {object.accessories[2]}
          </span>
          <span className={css.functionalities}>
            {object.functionalities[0]} | {object.functionalities[1]} |{" "}
            {object.functionalities[2]}
          </span>

          <p className={css.rentalTitle}>Rental Conditions: </p>
          <div className={css.rental}>
            <span className={css.age}>
              <span>{rentalText}&nbsp;</span>
              <span className={css.rentalAge}>{rentalAge}</span>
            </span>
            <span className={css.age}>{rental[1]}</span>
            <span className={css.age}>{rental[2]}</span>
            <span className={css.age}>
              Mileage:&nbsp;
              <span className={css.mileageColor}>
                {mileageFirstPath},{mileageSecondPath}
              </span>
            </span>
            <span className={css.age}>
              Price:&nbsp;
              <span className={css.price}>{object.rentalPrice}</span>
            </span>
          </div>
        </div>
      </Modal>
    </div>
  );
}

export default CarModal;
