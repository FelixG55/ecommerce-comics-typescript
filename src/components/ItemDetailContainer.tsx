import React, { useEffect, useState } from "react";
import { Product, type ProductList } from "../types";
import { useNavigate, useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";

interface Props {
  products: ProductList;
}

const ItemDetailContainer: React.FC<Props> = ({ products }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [oneProduct, setOneProduct] = useState<Product|null>(null);

  useEffect(() => {
    if (id) {
      const filterProduct = products.find(
        (product) => product.id.toString() === id
      ) as Product;
      if (filterProduct) {
        setOneProduct(filterProduct);
      }else{
        navigate("/not-found");
      }
    }
  }, [id, products,navigate]);
  return (
    <div className="container-fluid">
      <div className="row justify-content-center bg-warning ">
      {oneProduct ? <ItemDetail product={oneProduct} /> : <p>Loading...</p>}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
