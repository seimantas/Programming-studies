import { render } from "react-dom";
import { Cart } from "..";
import { ProductsContext } from "../../ProductsContext";

describe("Cart", () => {
   it("should Edit and Delete buttons in DataGrid component trigger expected actions', () => {
        const mockProducts = [
          { id: 1, title: 'Product 1', amount: 2, price: 10 },
          { id: 2, title: 'Product 2', amount: 1, price: 20 },
        ];
      
        const mockEditFunction = jest.fn();
        const mockDeleteFunction = jest.fn();
      
        render(
          <ProductsContext.Provider value={{ cartProducts: mockProducts }}>
            <Cart />
          </ProductsContext.Provider>
        );
      
        const firstRowEditButton = screen.getByRole('button', { name: /edit/i });
        const firstRowDeleteButton = screen.getByRole('button', { name: /delete/i });
      
        fireEvent.click(firstRowEditButton);
        fireEvent.click(firstRowDeleteButton);
      
        expect(mockEditFunction).toHaveBeenCalledTimes(1);
        expect(mockDeleteFunction).toHaveBeenCalledTimes(1);
      });
    
    it("should renders DataGrid component with correct columns and data", () => {
        const mockProducts = [
          { id: 1, title: 'Product 1', amount: 2, price: 10 },
          { id: 2, title: 'Product 2', amount: 1, price: 20 },
        ];
      
        render(
          <ProductsContext.Provider value={{ cartProducts: mockProducts }}>
            <Cart />
            </ProductsContext.Provider>
        );
      
        const idColumnHeader = screen.getByText(/ID/i);
        const titleColumnHeader = screen.getByText(/Title/i);
        const amountColumnHeader = screen.getByText(/Amount/i);
        const priceColumnHeader = screen.getByText(/Price/i);
      
        expect(idColumnHeader).toBeInTheDocument();
        expect(titleColumnHeader).toBeInTheDocument();
        expect(amountColumnHeader).toBeInTheDocument();
        expect(priceColumnHeader).toBeInTheDocument();
      
        const firstRowId = screen.getByText('1');
        const firstRowTitle = screen.getByText('Product 1');
        const firstRowAmount = screen.getByText('2');
        const firstRowPrice = screen.getByText('€20.00');
      
        const secondRowId = screen.getByText('2');
        const secondRowTitle = screen.getByText('Product 2');
        const secondRowAmount = screen.getByText('1');
        const secondRowPrice = screen.getByText('€20.00');
      
        expect(firstRowId).toBeInTheDocument();
        expect(firstRowTitle).toBeInTheDocument();
        expect(firstRowAmount).toBeInTheDocument();
        expect(firstRowPrice).toBeInTheDocument();
      
        expect(secondRowId).toBeInTheDocument();
        expect(secondRowTitle).toBeInTheDocument();
        expect(secondRowAmount).toBeInTheDocument();
        expect(secondRowPrice).toBeInTheDocument();
      });
    });



