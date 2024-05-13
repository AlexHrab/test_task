import { RotatingLines } from "react-loader-spinner";
import css from "./Loader.module.css";

export function Loader() {
  return (
    <div className={css.loader}>
      <RotatingLines height="80" width="80" strokeColor="#ff868d" />
    </div>
  );
}
