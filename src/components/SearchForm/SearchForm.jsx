import css from "./SearchForm.module.css";
import { Button } from "../Button/Button";
import { useState } from "react";

export function SearchForm({ setFormMileageValue, minValue, maxValue }) {
  const [minMileage, setMinMileage] = useState(minValue);
  const [maxMileage, setMaxMileage] = useState(maxValue);

  function Submit(evt) {
    evt.preventDefault();
    const form = evt.target;
    if (
      form.elements.min_mileage.value.trim() === "" &&
      form.elements.max_mileage.value.trim() === ""
    ) {
      setFormMileageValue({
        minMileageValue: null,
        maxMileageValue: Infinity,
      });
      return;
    }
    setFormMileageValue({
      minMileageValue: minMileage,
      maxMileageValue: maxMileage,
    });
  }

  return (
    <div className={css.formBox}>
      <p className={css.min}>min:</p>
      <p className={css.max}>max:</p>
      <form onSubmit={Submit} className={css.form}>
        <label htmlFor="mileage" className={css.inputLabel}>
          Mileage:
        </label>
        <input
          className={css.input}
          id="mileage"
          name="min_mileage"
          type="text"
          autoComplete="off"
          autoFocus
          value={minMileage === null ? "" : minMileage}
          onChange={(e) => setMinMileage(e.target.value)}
        />
        <input
          className={css.input}
          name="max_mileage"
          type="text"
          autoComplete="off"
          autoFocus
          value={maxMileage === Infinity ? "" : maxMileage}
          onChange={(e) => setMaxMileage(e.target.value)}
        />
        <Button type={"submit"} credentionals={"Search"} clasName={"formBtn"} />
      </form>
    </div>
  );
}
