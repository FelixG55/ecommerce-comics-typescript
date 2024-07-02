import { useEffect, useState } from "react";
import { type ProductList } from "../types";
import {
  collection,
  getFirestore,
  getDocs,
} from "firebase/firestore";

const useProducts = () => {

  const [listProducts, setProducts] = useState<ProductList>([]);
  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");
    getDocs(itemsCollection).then((snapshot) => {
      const products = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as ProductList;
      setProducts(products);
    });
  }, []);
  
  return listProducts;
};

export default useProducts;
