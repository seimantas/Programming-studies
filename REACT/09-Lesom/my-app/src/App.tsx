import "./App.css";

function App() {
  return (
    <div>
      <ProductsContext.Provider value={products}>
        <BrowserRouter />
      </ProductsContext.Provider>
    </div>
  );
}

export default App;
