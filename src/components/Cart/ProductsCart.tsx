import { useContext } from "react";
import { CartProduct } from "../../types";
import { CartContext } from "../../Context/CartContext";

function ProductsCart(product: CartProduct) {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }
  const { removeItem, decreaseItem, increaseItem } = context;

  return (
    <>
      <div className="card mb-4 list-group">
        <ul className="list-group list-group-flush">
          <li className="list-group-item " style={{ background: "#fffdc1" }}>
            <h6 className="row ">{product.category.description}</h6>
          </li>
          <li className="list-group-item " style={{ background: "#fffdc1" }}>
            <div className="row">
              <div className="col">
                <a href="" className="link ">
                  <img
                    className="img-fluid"
                    style={{ width: 100 }}
                    src={product.image}
                    alt=""
                  />
                </a>
              </div>
              <div className="col">
                <a className="nav-link" href="">
                  <h6
                    className="row text-truncate"
                    style={{ maxWidth: "250px" }}
                  >
                    {product.name}
                  </h6>
                </a>
                <div className="row ">
                  <a
                    className="col nav-link text-warning d-flex"
                    href=""
                    onClick={() => removeItem(product.id)}
                  >
                    Eliminar
                  </a>
                  <a href="" className="col nav-link text-warning d-flex">
                    Comprar
                  </a>
                </div>
              </div>
              <div
                className="col btn-group mt-2"
                style={{ height: "100%" }}
                role="group"
                aria-label="counter"
              >
                {product.quantity > 1 ? (
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => decreaseItem(product)}
                  >
                    -
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => removeItem(product.id)}
                    disabled
                  >
                    -
                  </button>
                )}
                <button type="button" className="btn btn-warning" disabled>
                  {product.quantity}
                </button>
                <button
                  type="button"
                  className="btn btn-warning"
                  onClick={() => increaseItem(product)}
                >
                  +
                </button>
              </div>
              <div className="col mt-3">
                <h6>$ {Intl.NumberFormat().format(product.price)}</h6>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ProductsCart;
