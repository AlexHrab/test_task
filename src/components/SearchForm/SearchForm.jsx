import css from "./SearchForm.module.css";
import { Button } from "../Button/Button";
import { useSelector } from "react-redux";
import { changeFilterMileage } from "../../redux/filter/slice";
import { useDispatch } from "react-redux";

export function SearchForm() {
  const dispatch = useDispatch();
  function Submit(evt) {
    evt.preventDefault();
    const form = evt.target;
    const minCarMileage = form.elements.min_mileage.value;
    const maxCarMileage = form.elements.max_mileage.value;
    if (
      form.elements.min_mileage.value.trim() === "" &&
      form.elements.max_mileage.value.trim() === ""
    ) {
      dispatch(
        changeFilterMileage({
          minMileage: null,
          maxMileage: Infinity,
        })
      );
      return;
    }
    dispatch(
      changeFilterMileage({
        minMileage: minCarMileage,
        maxMileage: maxCarMileage,
      })
    );
  }

  return (
    <div className={css.formBox}>
      <p className={css.min}>min:</p>
      <p className={css.max}>max:</p>
      <form onSubmit={Submit} className={css.form}>
        <label htmlFor="mileage">Mileage:</label>
        <input
          className={css.input}
          id="mileage"
          name="min_mileage"
          type="text"
          autoComplete="off"
          autoFocus
        />
        <input
          className={css.input}
          name="max_mileage"
          type="text"
          autoComplete="off"
          autoFocus
        />
        <Button type={"submit"} credentionals={"Search"} clasName={"formBtn"} />
      </form>
    </div>
  );
}
