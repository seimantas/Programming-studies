import { useContext } from "react";
import { ProductsContext } from "../ProductsContext";

export const Cart = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const incrementAmount = (id: number) => {
    const incrementProduct = products.map((product: any) => {
      if (product.id === id) {
        return { ...product, amount: product.amount + 1 };
      } else {
        return product;
      }
    });
    setProducts(incrementProduct);
  };

  const decrementAmount = (id: number) => {
    const decrementProduct = products.map((product: any) => {
      if (product.id === id) {
        return { ...product, amount: product.amount - 1 };
      } else {
        return product;
      }
    });
    setProducts(decrementProduct);
  };

  const selectedProducts = products.filter(
    (product: any) => product.amount > 0
  );
  console.log(products);

  return (
    <div className="products-list">
      {selectedProducts.map((product: any) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {product.price * product.amount} $</p>
            <p>Amount: {product.amount}</p>
            <button
              onClick={() => {
                incrementAmount(product.id);
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                decrementAmount(product.id);
              }}
            >
              -
            </button>
          </div>
        );
      })}
    </div>
  );
};
