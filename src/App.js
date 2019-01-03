import React from 'react';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <ul>
          <li>list of todos</li>
        </ul>
        <input placeholder="...todo"></input>
        <button>Add Todo</button>
        <button>Clear Completed</button>
      </div>
    );
  }
}

export default App;
