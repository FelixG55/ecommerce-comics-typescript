import React, { useEffect, useState } from "react";
import { type ProductList } from "../types";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

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
  }, [id, products]);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-warning ">
      <ItemDetail product={oneProduct} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
