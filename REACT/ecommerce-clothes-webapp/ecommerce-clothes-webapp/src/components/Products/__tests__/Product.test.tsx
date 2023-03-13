import { Product } from "../Product";
import { render, screen } from "@testing-library/react";

describe("Product", () => {
  it("should display product information", () => {
    const product = {
      id: 1,
      title: "Pants",
      price: 10,
      description: "Black pants",
      category: "pants",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      rating: {
        rate: 3,
        count: 1,
      },
    };

    render(<Product product={product} />);

    const productImage = screen.getByRole("img");
    const productTitle = screen.getByText(product.title);
    const productDescription = screen.getByText(product.description);
    const productPrice = screen.getByText(`PRICE: ${product.price}`);



    expect(productTitle).toBeVisible();
    expect(productDescription).toBeVisible();
    expect(productPrice).toBeVisible();
    expect(productImage).toHaveAttribute("src", product.image);
    expect(productImage).toBeVisible();
    

  });
});
