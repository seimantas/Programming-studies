import { useContext, useEffect, useState } from "react";
import { getProducts } from "../../utils/getProducts";
import { ProductsContext } from "../../ProductsContext";
import type { TProduct } from "../../types";

export const ProductsList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { products, dispatch } = useContext(ProductsContext);

  const addProductToCart = (productId: TProduct["id"]) => {
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h1>Products</h1>

      {products.map((product) => (
        <div key={product.id} className="product-box">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <button onClick={() => addProductToCart(product.id)}>
            Add Product
          </button>
        </div>
      ))}
    </div>
  );
};
