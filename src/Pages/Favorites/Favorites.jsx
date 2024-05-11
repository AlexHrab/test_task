import { useSelector } from "react-redux";
import { selectFavoriteFilteredCarsMemo } from "../../redux/cars/selectors";
import { CarList } from "../../components/CarList/CarList";
import { useEffect } from "react";

export function Favorites() {
  const favoriteCars = useSelector(selectFavoriteFilteredCarsMemo);

  return (
    <div>
      <CarList cars={favoriteCars} />
    </div>
  );
}
