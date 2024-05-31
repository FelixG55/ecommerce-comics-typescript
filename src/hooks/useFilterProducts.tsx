import { useEffect, useState } from "react";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
  doc,
} from "firebase/firestore";
import { Product, ProductList } from "../types";

const useFilterProducts = (categoryKey: String | undefined) => {
  const [products, setListProducts] = useState<ProductList>();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const db = getFirestore();
        const itemsCollection = collection(db, "items");
        let queryCollection;

        if (categoryKey) {
          const categoriesCollection = collection(db, "categories");
          const categoryQuery = query(
            categoriesCollection,
            where("key", "==", categoryKey)
          );

          const categorySnapshot = await getDocs(categoryQuery);
          if (categorySnapshot.size > 0) {
            const categoryDoc = categorySnapshot.docs[0];
            const categoryRef = doc(db, "categories", categoryDoc.id);

            queryCollection = query(
              itemsCollection,
              where("category", "==", categoryRef)
            );
          } else {
            // Si no se encuentra la categoría, devolver todos los items
            queryCollection = itemsCollection;
          }
        } else {
          // Si no se proporciona categoryKey, devolver todos los items
          queryCollection = itemsCollection;
        }

        const itemSnapshot = await getDocs(queryCollection);
        if (itemSnapshot.size > 0) {
          setListProducts(
            itemSnapshot.docs.map(
              (item) => ({ id: item.id, ...item.data() } as Product)
            )
          );
        } else {
          setListProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setVisible(false);
      }
    };

    fetchProducts();
  }, [categoryKey]);

  return { products, visible };
};

export default useFilterProducts;
