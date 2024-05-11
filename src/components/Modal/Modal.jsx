import Modal from "react-modal";
import css from "./Modal.module.css";
import { Button } from "../Button/Button";
import { VscChromeClose } from "react-icons/vsc";

function CarModal({ isOpen, onClose, object }) {
  const adress = object.address?.split(",");
  const rental = object.rentalConditions?.split("\n");
  console.log(rental);
  return (
    <Modal
      isOpen={isOpen}
      className={css.modal}
      onRequestClose={onClose}
      shouldCloseOnEsc={true}
      ariaHideApp={false}
      overlayClassName={css.overlay}
      preventScroll={true}
    >
      <VscChromeClose className={css.icon} onClick={onClose} />
      <img className={css.image} src={object.img} alt={object.model}></img>
      <div className={css.textBox}>
        <span className={css.nameAdYear}>
          {object.make} <span className={css.model}>{object.model}</span>,{" "}
          {object.year}
        </span>
        <span className={css.cityAndCountry}>
          {adress[1]} | {adress[2]} | id: {object.id} | Year: {object.year} |{" "}
          Type: {object.type} | Fuel Consumption: {object.fuelConsumption}
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
          <span className={css.age}>{rental[0]}</span>
          <span className={css.age}>{rental[1]}</span>
          <span className={css.age}>{rental[2]}</span>
          <span className={css.age}>Mileage: {object.mileage}</span>
          <span className={css.age}>Price: {object.rentalPrice}</span>
        </div>
      </div>
      <Button
        type={"button"}
        credentionals={"Rental car"}
        // onClick={() => {
        //   modalOpen(element);
        // }}
        clasName={"modalBtn"}
      />
    </Modal>
  );
}

export default CarModal;
