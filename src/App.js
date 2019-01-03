import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';

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

  constructor() {
    super();
    this.state = {
      todos: todoArray,
      taskTitle: '',
    };
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({taskTitle: e.target.value});
  }

  handleAddTodo(e) {

    if (e.type === 'keydown') {
      if(e.key !== 'Enter') {
        return;
      } 
    }
    
    todoArray.push(
      {
        task: this.state.taskTitle,
        id: Date.now(),
        completed: false
      }
    )
    this.setState({todos: todoArray, taskTitle: ''});
  }
  
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList todoList={this.state.todos}/>
        <TodoForm 
          inputValue={this.state.taskTitle}
          updateTodoList={this.handleChange}
          updateAddTodo={this.handleAddTodo}
        />
      </div>
    );
  }
}

export default App;
