import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';

const todoArray = [
  {
      task: 'Organize Garage',
      id: 1528817077286,
      completed: false
  },
  {
      task: 'Bake Cookies',
      id: 1528817084358,
      completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      todos: todoArray,
    };
  }
  
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <ul>
          <TodoList todoList={this.state.todos}/>
        </ul>
        <input placeholder="...todo"></input>
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
