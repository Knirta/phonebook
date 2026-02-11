import { useId } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filter/slice.js";
import { selectFilter } from "../../redux/filter/selectors.js";
import css from "./SearchBox.module.css";

const SearchBox = () => {
  const filter = useSelector(selectFilter);
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
