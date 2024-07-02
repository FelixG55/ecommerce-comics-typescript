import { createContext, useState, useEffect, ReactNode } from "react";
import { CartProduct, CartProductList, Product } from "../types";
import { CartContextProps } from "../types";

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContext = createContext<CartContextProps | undefined>(
  undefined
);

const CartContextProvider = ({ children }: CartContextProviderProps) => {
  const [cart, setCart] = useState<CartProductList>(() => {
    const storedProducts = localStorage.getItem("cart");
    return storedProducts ? JSON.parse(storedProducts) : [];
  });

  useEffect(() => {
    if (cart) {
      localStorage.setItem("cart", JSON.stringify(cart));
    } else {
      localStorage.removeItem("cart");
    }
  }, [cart]);

  const addItem = (item: Product, quantity: number) => {
    if (isInCart(item.id)) {
      let product = cart.find((prod) => prod.id === item.id);
      product!.quantity += quantity;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...item, quantity: quantity }]);
    }
  };

  const removeItem = (id: string) => {
    const items = cart.filter((item) => item.id !== id);
    setCart([...items]);
  };

  const decreaseItem = (item: CartProduct) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id && prod.quantity > 1
          ? { ...prod, quantity: prod.quantity - 1 }
          : prod
      );
      setCart(updatedCart);
    }
  };

  const increaseItem = (item: CartProduct) => {
    if (isInCart(item.id)) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id ? { ...prod, quantity: prod.quantity + 1 } : prod
      );
      setCart(updatedCart);
    }
  }

  const clear = () => {
    setCart([]);
  };

  const isInCart = (id: string) => {
    return cart.some((item) => item.id === id);
  };

  const getCountProducts = () => {
    return cart.reduce((acum, item) => (acum += item.quantity), 0);
  };

  const getSumProducts = () => {
    return cart.reduce((acum, item) => (acum += item.quantity * item.price), 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        decreaseItem,
        removeItem,
        increaseItem,
        clear,
        getCountProducts,
        getSumProducts,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
