import { useEffect } from "react";
import "./App.css";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="App">
      <h1>GitHub Users</h1>
      <Users getUsers />
    </div>
  );
}

export default App;
