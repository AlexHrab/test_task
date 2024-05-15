import { useEffect } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Favorites } from "./Pages/Favorites/Favorites";
import { Navbar } from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import {
  fetchAllCars,
  fetchCars,
  loadCars,
  setNewPage,
} from "./redux/cars/operations";
import { selectLoadCars, selectPage } from "./redux/cars/selectors";

import { useSelector } from "react-redux";
import { selectCoordinate } from "./redux/filter/selectors";

function App() {
  const dispatch = useDispatch();

  const loadAllCars = useSelector(selectLoadCars);
  const page = useSelector(selectPage);
  const scrolHeight = useSelector(selectCoordinate);

  useEffect(() => {
    dispatch(fetchAllCars());
  }, []);

  const pageSize = 12;

  useEffect(() => {
    if (loadAllCars) {
      dispatch(fetchCars({ page, pageSize })).then(() => {
        dispatch(loadCars(false));
        window.scrollBy({
          top: scrolHeight,
          behavior: "smooth",
        });
      });
    }
  }, [pageSize, loadAllCars, page, dispatch]);

  function onClick() {
    dispatch(loadCars(true));
    dispatch(setNewPage(page + 1));
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog onClick={onClick} />} />
          <Route path="favorites" element={<Favorites />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
