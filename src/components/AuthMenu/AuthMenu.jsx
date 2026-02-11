import clsx from "clsx";
import { NavLink } from "react-router-dom";
import css from "./AuthMenu.module.css";

const buildLinkClass = ({ isActive }) =>
  clsx(css.link, { [css.active]: isActive });

const AuthMenu = () => {
  return (
    <nav>
      <ul className={css.list}>
        <li>
          <NavLink to="/register" className={buildLinkClass}>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" className={buildLinkClass}>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthMenu;
