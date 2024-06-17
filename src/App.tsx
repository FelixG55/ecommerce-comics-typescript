import { BrowserRouter, Route, Routes } from "react-router-dom";
import logo404 from "./assets/404.jpg";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import { useEffect, useState } from "react";
import { ProductList } from "./types";
import useProducts from "./hooks/useProducts";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./Context/CartContext";
import Checkout from "./components/Checkout";
import Register from "./components/Register";
import Login from "./components/Login";

// import Cart from "./components/Cart/Checkout";

const App = (): JSX.Element => {
  const products = useProducts();

  const [listProducts, setProducts] = useState<ProductList>(products);

  useEffect(() => {
    setProducts(products);
  }, [products]);

  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/register" element={<Register/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/category/:categoryId" element={<ItemListContainer />} />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer products={listProducts} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="*"
            element={<img src={logo404} style={{ width: "100%" }}></img>}
          />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
};

export default App;
