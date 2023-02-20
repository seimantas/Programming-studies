import "./ProductsList.css";
import { useContext } from "react";
import { ProductsContext } from "../ProductsContext/ProductsContext";
import { TProduct } from "../../types/TProduct";

export const ProductsList = () => {
  const { products, setProducts } = useContext(ProductsContext);

  console.log(products);

  const handleAddToCart = (product: TProduct, index: number) => {
    const modifiedProducts = [...products];

    // modifiedProducts[index] = {
    //   ...modifiedProducts[index],
    //   amount: modifiedProducts[index].amount + 1,
    // };

    modifiedProducts[index] = {
      ...product,
      amount: product.amount + 1,
    };

    const newProducts = products.map((curProduct) => {
      const isSelectedProduct = curProduct.id === product.id;

      return {
        ...curProduct,
        amount: isSelectedProduct ? curProduct.amount + 1 : curProduct.amount,
      };
    });

    setProducts(modifiedProducts);
  };

  return (
    <>
      <h2 className="products-list-header">PRODUCTS LIST</h2>
      <div className="products-list">
        {products.map((product, i) => (
          <div key={`${product.id} - ${i}`}>
            <h2>{product.name}</h2>
            <p>Price: {product.price} $</p>
            <button onClick={() => handleAddToCart(product, i)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
