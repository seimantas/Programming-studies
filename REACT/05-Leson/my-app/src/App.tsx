import React, { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState("");
  const [savedTodos, setSavedTodos] = useState<string[]>([]);

  console.log(savedTodos);

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
    setTodo(event.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    setSavedTodos((prevSavedTodos) => [...prevSavedTodos, todo]);

    setTodo("");
  };

  const deleteTodo = (i: any) => {
    const newTodos = [...savedTodos];
    newTodos.splice(i, 1);
    setSavedTodos(newTodos);
  };

  return (
    <div className="mane-element">
      <div className="content-element">
        <h1>You have {savedTodos.length} Todos</h1>
        <ol className="element-list">
          {savedTodos.map((curTodo, i) => (
            <li className="list-element">
              <div className="flex-element">
                <p key={i}>{curTodo}</p>
                <button
                  className="delete-button"
                  onClick={() => {
                    deleteTodo(i);
                  }}
                >
                  X
                </button>
              </div>
            </li>
          ))}
        </ol>

        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={todo}
            placeholder="Enter task"
          />
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default App;
