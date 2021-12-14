import { FaHome, FaChessRook, FaFilm } from "react-icons/fa";
import NavLink from "./NavLink";

const NavMobile = () => {
  return (
    <nav className="nav">
      <ul className="nav--ul">
        <NavLink exact="true" path="/">
          <FaHome className="nav--icon__mobile" />
        </NavLink>
        <NavLink path="/places">
          <FaChessRook className="nav--icon__mobile" />
        </NavLink>
        <NavLink path="/movies">
          <FaFilm className="nav--icon__mobile" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default NavMobile;
