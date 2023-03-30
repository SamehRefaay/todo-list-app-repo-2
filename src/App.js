import { React, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  let [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  //delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  return (
    <div className="App">
      <div className="container">
        <TodoForm onSubmit={addTodo} />
        {todos.map((todo) => (
          <Todo todo={todo} onDelete={() => deleteTodo(todo.id)} />
        ))}
      </div>
    </div>
  );
}

export default App;
