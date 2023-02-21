import { useContext, useReducer } from "react";
import { ProductsContext } from "../ProductsContext";

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "increment-amount":
      return { ...state, amount: state.amount + 1 };
    case "decrement-amount":
      return { ...state, amount: state.amount - 1 };
    default:
  }
};

export const Cart = () => {
  const { products, setProducts } = useContext(ProductsContext);

  const [state, dispatch] = useReducer(reducer, { amount: 0 });

  const selectedProducts = products.filter((product) => product.amount > 0);

  const productFullprice = selectedProducts.reduce(
    (acc, product) => acc + product.price * product.amount,
    0
  );
  console.log(products);
  return (
    <div className="products-list">
      {selectedProducts.map((product) => {
        return (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>Price: {productFullprice} $</p>
            <p>Amount: {product.amount}</p>
            <button onClick={() => dispatch({ type: "increment-amount" })}>
              +
            </button>
            <button onClick={() => dispatch({ type: "decrement-amount" })}>
              -
            </button>
          </div>
        );
      })}
    </div>
  );
};
