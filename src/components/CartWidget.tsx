import { Link } from "react-router-dom";
import "../assets/css/cartWidget.css";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function CartWidget() {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }
  const { getCountProducts } = context;

  return (
    <div className="position-absolute end-0 top-0 me-2 mt-2 cart-widget-bg rounded-3">
      <Link to="/cart" className="link-dark ">
        <div className="position-relative">
          <div className="m-3 position-relative ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="currentColor"
              className="bi bi-basket"
              viewBox="0 0 16 16"
            >
              <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5" />
            </svg>
            <span
              className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-dark"
              style={{ fontSize: 8 }}
            >
              {getCountProducts()}
              <span className="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CartWidget;
