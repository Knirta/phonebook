import { useId } from "react";
import css from "./SearchBox.module.css";

const SearchBox = ({ value, onFilter }) => {
  const searhId = useId();

  return (
    <div className={css.filter}>
      <p>
        <label htmlFor={searhId}>Find contact by name:</label>
      </p>
      <input
        type="text"
        id={searhId}
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
};

export default SearchBox;
