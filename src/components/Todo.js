import { Component } from "react";

class Todo extends Component {
  state = {};
  render() {
    return (
      <div className="todo">
        <div className="todo-text">{this.props.todo.text}</div>
        <button className="delete-btn" onClick={this.props.onDelete}>
          Delete
        </button>
      </div>
    );
  }
}
export default Todo;
