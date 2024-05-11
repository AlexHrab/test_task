import { useEffect, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { Catalog } from "./Pages/Catalog/Catalog";
import { Favorites } from "./Pages/Favorites/Favorites";
import { Navbar } from "./components/Navbar/Navbar";
import { useDispatch } from "react-redux";
import { fetchAllCars, fetchCars } from "./redux/cars/operations";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllCars());
  }, []);

  const pageSize = 12;
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(fetchCars({ page, pageSize }));
  }, [page, dispatch, pageSize]);

  function onClick() {
    setPage((prevPage) => prevPage + 1);
  }

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="catalog" element={<Catalog onClick={onClick} />} />
          <Route path="favorites" element={<Favorites />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
