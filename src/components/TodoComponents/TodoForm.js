import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input
        onChange={props.onInputChange}
        type="text"
        name="task"
        placeholder="add a task..."
      />

      <button onClick={props.addTodo}>Add Todo</button>
    </form>
  );
};

export default TodoForm;
