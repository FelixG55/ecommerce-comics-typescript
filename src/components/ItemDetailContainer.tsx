import React, { useEffect, useState } from "react";
import { type ProductList } from "../types";
import { useParams } from "react-router-dom";

interface Props {
  products: ProductList;
}

const ItemDetailContainer: React.FC<Props> = ({ products }) => {
  const { id } = useParams();
  const [oneProduct, setOneProduct] = useState(products);

  useEffect(() => {
    const filterProduct = id
      ? products.filter((product) => product.id.toString() === id)
      : products;
    setOneProduct(filterProduct);
  }, [id]);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-warning ">
        {oneProduct.map((product) => {
          return (
            <div
              className="card mb-3 m-4 p-0 border-warning"
              style={{ maxWidth: "840px" }}
              key={`detail${product.id}`}
            >
              <div className="row g-0">
                <div className="col-md-4 ">
                  <img
                    src={product.image}
                    className="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div className="col-md-8 bg-danger ">
                  <div className="card-body bg-danger ">
                    <h5 className="card-title">{product.name}</h5>
                    <p className="card-text">{product.summary}</p>
                    <p className="card-text">
                      <b>Publisher:</b> {product.publisher}
                    </p>
                    <p className="card-text">
                      <b>Characters:</b>{" "}
                      {product.characters?.map((char) => {
                        return char + ", ";
                      })}
                    </p>
                    <p className="card-text">
                      <b>Price:</b> $ {product.price}
                    </p>
                        <div
                          className="btn-group btn-outline-warning"
                          role="group"
                          aria-label="Basic example"
                        >
                          <button type="button" className="btn btn-outline-warning">
                            -
                          </button>
                          <button type="button" className="btn" disabled>
                            1
                          </button>
                          <button type="button" className="btn btn-outline-warning">
                            +
                          </button>
                        </div>
                        <div className="mt-2">
                        <button className=" btn btn-warning "> Agregar al carrito</button>
                        </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
