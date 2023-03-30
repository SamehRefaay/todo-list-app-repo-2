import { Component } from "react";

class Todo extends Component {
  state = {};
  render() {
    return (
      <div className="todo">
        <div
          style={{
            textDecoration: this.props.todo.isComplete ? "line-through" : null,
          }}
          className="todo-text"
          onClick={this.props.toggleComplete}
        >
          {this.props.todo.text}
        </div>
        <button className="delete-btn" onClick={this.props.onDelete}>
          Delete
        </button>
      </div>
    );
  }
}
export default Todo;
