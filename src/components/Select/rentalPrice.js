import { useSelector } from "react-redux";
import { selectRentalPrice } from "../../redux/cars/selectors";

export function RentalPrice() {
  const price = [{ value: "", label: "" }];
  const rentalPrice = useSelector(selectRentalPrice);
  const maxPrice = Math.max(...rentalPrice);
  const minPrice = Math.min(...rentalPrice);
  for (let i = minPrice; i <= maxPrice; i += 10) {
    price.push({ value: i, label: String(i) });
  }

  return price;
}
