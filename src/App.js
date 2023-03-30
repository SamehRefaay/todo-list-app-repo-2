import { React, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  let [todos, setTodos] = useState([]);
  // const [toggleComplete,setToggleComplete] = useState([true])
  //add todo
  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };
  //delete todo
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };
  //toggle complete todo
  const handleToggleComplete = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isComplete: !todo.isComplete,
          };
        } else {
          return todo;
        }
      })
    );
  };
  return (
    <div className="App">
      <div className="container">
        <TodoForm onSubmit={addTodo} />
        {todos.map((todo) => (
          <Todo
          key={todo.id}
            todo={todo}
            onDelete={() => deleteTodo(todo.id)}
            toggleComplete={() => handleToggleComplete(todo.id)}
          />
        ))}
        <div className="update-btns-holder">
          <button></button>
        </div>
      </div>
    </div>
  );
}

export default App;
