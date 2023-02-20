import "./App.css";
import { ProductsContext } from "./components/ProductsContext";
import { INITIAL_PRODUCTS } from "./utils/initialProducts";
import { useState } from "react";
import { MainRouter } from "./components/MainRouter/MainRouter";

export const App = () => {
  const [products, setProducts] = useState(INITIAL_PRODUCTS);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <MainRouter />
    </ProductsContext.Provider>
  );
};
