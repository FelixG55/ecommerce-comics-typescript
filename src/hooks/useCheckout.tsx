import { useState } from "react";
import { collection, getFirestore, addDoc } from "firebase/firestore";
import { CartProductList } from "../types";

interface UseCheckOutProps {
  cart: CartProductList;
  name: string;
  lastName: string;
  telephone: string;
  email: string;
  getSumProducts: () => number;
}

const useCheckOut = ({
  cart,
  name,
  lastName,
  telephone,
  email,
  getSumProducts,
}: UseCheckOutProps): { orderId: string; createOrder: () => void } => {
  const [orderId, setOrderId] = useState<string>("");

  const createOrder = () => {
    const items = cart.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }));

    const buyer = {
      name,
      lastName,
      telephone,
      email,
    };

    const date = new Date();
    const currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()} ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;

    const order = {
      buyer,
      items,
      date: currentDate,
      total: getSumProducts(),
    };

    const db = getFirestore();
    const ordersCollection = collection(db, "orders");

    addDoc(ordersCollection, order)
      .then((docRef) => {
        setOrderId(docRef.id);
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  return { orderId, createOrder };
};

export default useCheckOut;
