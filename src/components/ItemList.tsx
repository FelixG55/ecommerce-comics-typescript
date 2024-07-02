import Item from "./Item";
import { type ProductList } from "../types";

interface Props {
  listProducts: ProductList | undefined;
}

const ItemList: React.FC<Props> = ({ listProducts }) => {
  return (
    <div className="row justify-content-center mt-4">
      {listProducts?.map((product) => {
        return <Item product={product} key={`$itemList${product.id}`}/>;
      })}
    </div>
  );
};

export default ItemList;
