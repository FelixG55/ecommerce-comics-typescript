
import "../assets/css/ItemListContainer.css";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import useFilterProducts from "../hooks/useFilterProducts";


const ItemListContainer: React.FC = () => {

  const { categoryId } = useParams();
  const {products} = useFilterProducts(categoryId)
  


  return (
    <div className="container-fluid bg-warning">
      <div className="row justify-content-between pt-2">
        <h6 className="text-danger fs-1 text-center">{categoryId}</h6>
        <ItemList listProducts={products} />
      </div>
    </div>
  );
};

export default ItemListContainer;