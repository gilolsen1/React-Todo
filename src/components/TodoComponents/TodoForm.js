import React from "react";

const TodoForm = props => {
  return (
    <form>
      <input onChange={props.onInputChange} type="text" name="task" />
      <button>Add Todo</button>
    </form>
  );
};

export default TodoForm;
