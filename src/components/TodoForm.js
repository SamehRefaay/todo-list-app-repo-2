import { Component } from "react";
import shortid from "shortid";

class TodoForm extends Component {
  state = {
    text: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit({
      id: shortid.generate(),
      text: this.state.text,
      isComplete: false,
    });
    this.setState({ text: "" });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type={"text"}
          value={this.state.text}
          onChange={(e) => {
            this.setState({ text: e.target.value });
          }}
        />
        <input type={"submit"} value={"Add Todo"} onClick={this.handleSubmit} />
      </form>
    );
  }
}
export default TodoForm;
