import { BrowserRouter, Route, Routes } from "react-router-dom";
import ItemListContainer  from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={'Hola Mundo'} />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
