import NavMenu from "../NavMenu";
import AuthMenu from "../AuthMenu";
import UserMenu from "../UserMenu";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors.js";
import css from "./AppBar.module.css";

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <header className={css.header}>
      <NavMenu />
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};

export default AppBar;
