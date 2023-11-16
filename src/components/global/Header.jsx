import { Link } from "react-router-dom";
import login from "../../img/user.png";
import wishlist from "../../img/heart.png";
import cart from "../../img/cart.png";
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
          <img className="img" src={login} alt="login logo" />
          <Link className="subitem" to="/login">
            Login
          </Link>
          <img className="img" src={wishlist} alt="login logo" />
          <Link className="subitem" to="/wishlist">
            Wishlist
          </Link>
          <img className="img" src={cart} alt="login logo" />
          <Link className="subitem" to="/cart">
            Cart
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
