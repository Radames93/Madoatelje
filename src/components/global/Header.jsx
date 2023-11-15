import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="firstContainer">
        <Link className="items item1" to="/">
          Logo
        </Link>
        <Link className="items item2" to="/">
          Madu Ateljé
        </Link>
        <div className="items item3">
          <Link className="subitem" to="/login">
            Login
          </Link>
          <Link className="subitem" to="/wishlist">
            Wishlist
          </Link>
          <Link className="subitem" to="/cart">
            Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
