import Item from "./Item";
import { type ProductList } from "../types";

interface Props {
  listProducts: ProductList;
}

const ItemList: React.FC<Props> = ({ listProducts }) => {
  return (
    <div className="row justify-content-center bg-warning ">
      {listProducts.map((product) => {
        return <Item product={product} key={`detail${product.id}`}/>;
      })}
    </div>
  );
};

export default ItemList;
