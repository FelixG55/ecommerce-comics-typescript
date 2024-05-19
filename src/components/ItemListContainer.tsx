import { Link, useParams } from "react-router-dom";
import { type ProductList } from "../types";
import { useEffect, useState } from "react";
import "../assets/css/ItemListContainer.css";

interface Props {
  products: ProductList;
}

const ItemListContainer: React.FC<Props> = ({ products }) => {
  const { categoryId } = useParams();
  const [listProducts, setListProducts] = useState(products);

  useEffect(() => {
    const filterProducts = categoryId
      ? products.filter((product) => product.category === categoryId)
      : products;
    setListProducts(filterProducts);
  }, [categoryId]);

  return (
    <div className="container-fluid bg-warning">
      <div className="row justify-content-between ">
        <h6 className="text-danger fs-1 text-center">{categoryId}</h6>
        {listProducts.map((product) => {
          return (
            <div className="col-3 mb-4">
              <Link to={`/item/${product.id}`} className="link-body-emphasis ">
                <div
                  className="card card-flip h-100 bg-warning border-black m-auto"
                  key={product.id}
                  style={{ width: "15rem" }}
                >
                  <div
                    className="card card-front border-black"
                    key={`front${product.id}`}
                  >
                    <img
                      src={product.image}
                      className="card-img-top"
                      alt="..."
                    />

                    <div className="card-body bg-danger">
                      <p className="card-text">{product.name}</p>
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
                  <div
                    className="card card-back bg-warning border-black"
                    key={`front${product.id}`}
                  >
                    <div className="card-body bg-danger ">
                      <p className="card-text"><b>Summary:</b> {product.summary}</p>
                    </div>
                    <ul className="list-group list-group-flush border-black ">
                      <li className="list-group-item bg-danger border-black">
                        <b>Characters:</b>{" "}
                        {product.characters?.map((char) => {
                          return char + ", ";
                        })}
                      </li>
                      <li className="list-group-item bg-danger border-black">
                        <b>Publisher:</b> {product.publisher}
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListContainer;
