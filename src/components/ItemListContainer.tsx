import { useEffect, useState } from "react";
import "../assets/css/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { type ProductList } from "../types";

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
  }, [categoryId, products]);

  return (
    <div className="container-fluid bg-warning">
      <div className="row justify-content-between ">
        <h6 className="text-danger fs-1 text-center">{categoryId}</h6>
        <ItemList listProducts={listProducts} />
      </div>
    </div>
  );
};

export default ItemListContainer;