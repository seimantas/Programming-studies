import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../Header";

describe("Header", () => {
  it("renders Header succesfully", () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
});
