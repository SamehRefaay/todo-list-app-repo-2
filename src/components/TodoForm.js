import { Component } from "react";

class TodoForm extends Component {
  state = {};
  render() {
    return (
      <form>
        <input type={"text"} />
        <input type={"submit"} value={"Add Todo"}/>
      </form>
    );
  }
}
export default TodoForm;
