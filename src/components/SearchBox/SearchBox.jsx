import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../../redux/filtersSlice.js";

import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector((state) => state.filters.text);
  const dispatch = useDispatch();
  const searhId = useId();

  return (
    <div className={css.filter}>
      <p>
        <label htmlFor={searhId}>Find contact by name:</label>
      </p>
      <input
        type="text"
        id={searhId}
        value={filter}
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
