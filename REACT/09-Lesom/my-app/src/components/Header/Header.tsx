import { Link } from "react-router-dom";
import "./Headrer.css";
import { CartLogo } from "../CartLogo/CartLogo";
import { ShopLogo } from "../ShopLogo/ShopLogo";

export const Header = () => {
  return (
    <div className="header">
      <ShopLogo />
      <Link to="/">
        <h2 className="product-button">Product List</h2>
      </Link>
      <Link to="/cart">
        <CartLogo />
      </Link>
    </div>
  );
};
