import { React, useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import Todo from "./components/Todo";

function App() {
  let [todos, setTodos] = useState([]);
  const [todosToShow, setTodosToShow] = useState("all");
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
  //tod-o toshow
  const handleTodosToShow = (s) => {
    setTodosToShow(s);
  };
  if (todosToShow === "active") {
    todos = todos.filter((todo) => !todo.isComplete);
  } else if (todosToShow === "complete") {
    todos = todos.filter((todo) => todo.isComplete);
  }
  //remove all complete todos from list
  const handleRemoveAllComplete = () => {
    setTodos(todos.filter((todo) => !todo.isComplete));
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
          <button
            className="update-btn btn"
            onClick={() => handleTodosToShow("all")}
          >
            All Todos
          </button>
          <button
            className="update-btn btn"
            onClick={() => handleTodosToShow("active")}
          >
            Active Todos
          </button>
          <button
            className="update-btn btn"
            onClick={() => handleTodosToShow("complete")}
          >
            Complete Todos
          </button>
        </div>
        <div className="update-btns-holder">
          <button className="update-btn btn" onClick={handleRemoveAllComplete}>
            Remove all Complete Todos
          </button>
          <button className="update-btn btn">Toggle all Complete Todos:</button>
        </div>
      </div>
    </div>
  );
}
export default App;
