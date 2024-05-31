import { Link } from "react-router-dom";
import { type Product } from "../types";
import propStyling from "../services/propsStyling";

interface Props {
  product: Product;
}

const Item: React.FC<Props> = ({ product }) => {
  const { description, characters } = propStyling(product);

  return (
    <div className="col-3 mb-4">
      <div
        className="card card-flip h-100 bg-warning border-black m-auto"
        key={product.id}
        style={{ width: "15rem" }}
      >
        <div
          className="card card-front border-black"
          key={`front${product.id}`}
        >
          <Link to={`/item/${product.id}`} className="text-decoration-none ">
            <img src={product.image} className="card-img-top" alt="..." />
          </Link>
          <div className="card-body bg-danger ">
            <p className="card-text inli">{product.name}</p>
          </div>
          <ul className="list-group list-group-flush border-black ">
            <li className="list-group-item bg-danger border-black">
              <b>Price:</b> $ {product.price}
            </li>
            <li className="list-group-item bg-danger border-black">
              <b>Date:</b> {product.date}
            </li>
          </ul>
        </div>
        <div className="card card-back bg-warning border-black">
          <Link
            to={`/item/${product.id}`}
            className="card-body bg-danger d-inline-block link-dark text-decoration-none"
          >
            <div className="card-text">
              <b>Summary:</b> {description}
            </div>
          </Link>

          <ul className="list-group list-group-flush border-black ">
            <li className="list-group-item bg-danger border-black">
              <b>Characters:</b>{" "}
              {characters?.map((char) => {
                return char + ", ";
              })}
            </li>
            <li className="list-group-item bg-danger border-black">
              <b>Publisher:</b>
              {product.publisher}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Item;
