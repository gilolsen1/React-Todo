import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state = {
    task: "",
    todos: [
      {
        task: "Organize Garage",
        id: 1528817077286,
        completed: false
      },
      {
        task: "Bake Cookies",
        id: 1528817084358,
        completed: false
      },
      {
        task: "Wizzard",
        id: 1528817084359,
        completed: true
      }
    ]
  };

  addTodo = (event, todo) => {
    event.preventDefault();
    const newTodo = {
      task: todo,
      completed: false,
      id: Date.now() * 100
    };

    this.setState({
      todos: [...this.state.todos, newTodo]
    });
  };

  onInputChange = event => {
    this.setState({
      task: event.target.value
    });
  };

  render() {
    return (
      <div>
        {/* {this.state.todos.map(todo => {
          return <div key={todo.id}>{todo.task}</div>;
        })} */}
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todos} />
        <TodoForm
          addTodo={event => this.addTodo(event, this.state.task)}
          onInputChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default App;
