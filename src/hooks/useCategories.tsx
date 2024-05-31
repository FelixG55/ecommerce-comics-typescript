import { useEffect, useState } from "react";
import { CategoryList } from "../types";
import {
  collection,
  getFirestore,
  getDocs,
} from "firebase/firestore";

export const useCategories = () => {
  const [listCategories, setCategories] = useState<CategoryList>([]);
  useEffect(() => {
    const db = getFirestore();
    const categoriesCollection = collection(db, "categories");
   
    getDocs(categoriesCollection).then((snapshot) => {
      const categories = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as CategoryList;
      setCategories(categories);
    });
  }, []);

  return listCategories;
};
