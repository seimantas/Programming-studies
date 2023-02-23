import { ProductContainer } from "../../styles/ProductContainer";
import { TransparentButton } from "../../styles/TransparentButton";
import type { TProduct } from "../../types";

export const Product = ({
  handleBuyClick,
  product,
  isProductInCart,
}: {
  product: TProduct;
  isProductInCart: boolean;
  handleBuyClick: (productId: number) => void;
}) => {
  //To Do tipa i atskira faila
  return (
    <ProductContainer>
      <img src={product.image} alt={`Product ${product.title}`} />
      <p>{product.title}</p>
      <p>{product.price}</p>

      <TransparentButton onClick={() => handleBuyClick(product.id)}>
        {isProductInCart ? "+" : "Buy"}
      </TransparentButton>

      {isProductInCart ? (
        <TransparentButton onClick={() => handleBuyClick(product.id)}>
          -
        </TransparentButton>
      ) : null}
    </ProductContainer>
  );
};
