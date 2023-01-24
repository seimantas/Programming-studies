import { Logo } from "./Logo";
import "./App.css";
import { Form } from "./Form";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo />
      </header>

      <main>
        <Form />
      </main>
    </div>
  );
}

export default App;
