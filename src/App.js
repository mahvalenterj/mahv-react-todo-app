import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import '../src/components/TodoComponents/Todo.css';

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
      isComplete: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAddTodo = this.handleAddTodo.bind(this);
    this.handleChange = this.handleChange.bind(this);

    console.log(this.state.todos)
  }

  handleToggle(e) {
    let taskId = Number(e.target.dataset.id);

    todoArray.map( todo => {
      if (todo.id === taskId) {
        todo.completed = !todo.completed
      }
      return todo;
    });

    this.setState({todos: todoArray});
    console.log(this.state.todos)

  }

  handleChange(e) {
    this.setState({taskTitle: e.target.value});
  }

  handleAddTodo(e) {
    if (this.state.taskTitle === ''){return}

    if (e.type === 'keydown') {
      if(e.key !== 'Enter') {return} 
    }
    
    todoArray.push(
      {
        task: this.state.taskTitle,
        id: Date.now(),
        completed: this.state.isComplete,
      }
    )
    this.setState({todos: todoArray, taskTitle: ''});
  }
  
  render() {
    return (
      <div>
        <h2>Todo App!</h2>
        <TodoList 
          todoList={this.state.todos}
          toggleTask={this.handleToggle}
        />
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
