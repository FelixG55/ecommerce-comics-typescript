import { type Product } from "../types";
import propStyling from "../services/propsStyling";
import { CartContext } from "../Context/CartContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
  product: Product;
}

const ItemDetail: React.FC<Props> = ({ product }) => {
  const [count, setCount] = useState<number>(1);
  const [visible, SetVisible] = useState<boolean>(false);

  const context = useContext(CartContext);

  if (!context) {
    throw new Error("CartContext must be used within a CartContextProvider");
  }
  const { addItem } = context;

  const { description, characters } = propStyling(product);

  const incrItem = () => {
    setCount(count + 1);
  };
  const decrItem = () => {
    if (count <= 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  };

  const addOnCart = (count: number) => {
    addItem(product, count);
    SetVisible(true);
  };
  return (
    <div
      className="card mb-3 m-4 p-0 border-warning"
      style={{ maxWidth: "840px" }}
    >
      <div className="row g-0">
        <div className="col-md-4 ">
          <img
            src={product?.image}
            className="img-fluid rounded-start h-100 "
            alt="..."
          />
        </div>
        <div className="col-md-8 bg-danger ">
          <div className="card-body bg-danger ">
            <h5 className="card-title">{product?.name}</h5>
            <div className="card-text">{description}</div>
            <p className="card-text">
              <b>Publisher:</b> {product?.publisher}
            </p>
            <p className="card-text">
              <b>Characters:</b>{" "}
              {characters?.map((char) => {
                return char + ", ";
              })}
            </p>
            <p className="card-text">
              <b>Price:</b> $ {product?.price}
            </p>
            <div
              className="btn-group btn-outline-warning"
              role="group"
              aria-label="Basic example"
            >
              <div
                className="btn-group"
                role="group"
                aria-label="Basic example"
              >
                <button
                  type="button"
                  className="btn btn-outline-warning w-50"
                  onClick={decrItem}
                >
                  -
                </button>
                <button type="button" className="btn" disabled>
                  {count}
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning"
                  onClick={incrItem}
                >
                  +
                </button>
              </div>
            </div>
            <div className="mt-2">
              {visible ? (
                <div className="col-6">
                  <Link to={"/cart"}>
                    <button
                      className=" btn btn-warning mb-2"
                    >
                      {" "}
                      Finaliza tu compra !!{" "}
                    </button>
                  </Link>
                  <Link to={'/'}>
                    <button
                      className=" btn btn-warning "
                      onClick={() => addOnCart(count)}
                    >
                      {" "}
                      Agregar mas productos !!!{" "}
                    </button>
                  </Link>
                </div>
              ) : (
                <button
                  className=" btn btn-warning "
                  onClick={() => addOnCart(count)}
                >
                  {" "}
                  Agregar al carrito{" "}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
