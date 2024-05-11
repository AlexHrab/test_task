import Modal from "react-modal";
import css from "./Modal.module.css";

function CarModal({ isOpen, onClose, object }) {
  const adress = object.address.split(",");

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
        <span className={css.description}></span>
        <span className={css.accessoriesTitle}></span>
        <span className={css.accessoriesText}></span>
        <div className={css.rental}>
          <p className={css.rentalTitle}></p>
          <span className={css.age}></span>
          <span className={css.license}></span>
          <span className={css.security}></span>
          <span className={css.mileage}></span>
          <span className={css.price}></span>
        </div>
      </div>
    </Modal>
  );
}

export default CarModal;
