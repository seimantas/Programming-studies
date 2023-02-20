import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";
import { ProductsList } from "../ProductsList/ProductsList";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<ProductsList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};
