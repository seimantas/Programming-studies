import { useContext, useEffect, useState } from "react";
import { ProductsContext } from "../../ProductsContext/ProductsContext";
import { ProductsContainer } from "../../styles/ProductsContainer";
import { getProducts } from "../../utils/getProducts";
import { Product } from "./Product";

export const Products = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { products, cartProducts, dispatch } = useContext(ProductsContext);

  const handleBuyClick = (productId: number) => {
    dispatch({ type: "addProductToCart", payload: { productId } });
  };

  useEffect(() => {
    if (!products.length) {
      getProducts().then((fetchedProducts) => {
        dispatch({ type: "setProducts", payload: { fetchedProducts } });

        setIsLoading(false);
      });
    }
  }, []);

  return (
    <ProductsContainer>
      {products.map((product) => {
        const isProductInCart = cartProducts.some(
          (cartProduct) => cartProduct.id === product.id
        );

        return (
          <Product
            handleBuyClick={handleBuyClick}
            isProductInCart={isProductInCart}
            product={product}
            key={product.id}
          />
        );
      })}
    </ProductsContainer>
  );
};
