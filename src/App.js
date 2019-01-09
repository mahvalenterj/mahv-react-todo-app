import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import EmptyList from './components/EmptyList'
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
    };
  }

  handleToggle = (e) => {
    let taskId = Number(e.target.dataset.id);

    this.setState({
      todos: this.state.todos.map( todo => {
        if (todo.id === taskId) {todo.completed = !todo.completed}
        return todo;
      })
    });
  }

  handleChange = (e) => {
    this.setState({taskTitle: e.target.value});
  }

  handleAddTodo = (e) => {
    if (this.state.taskTitle === ''){return}

    if (e.type === 'keydown') {
      if(e.key !== 'Enter') {return} 
    }
    
    this.state.todos.push(
      {
        task: this.state.taskTitle,
        id: Date.now(),
        completed: false,
      }
    )
    this.setState({todos: this.state.todos, taskTitle: ''});
  }

  handleRemoveTodos = () => {  
    this.setState({
      todos: this.state.todos.filter( todo => !todo.completed)});
  }
  
  render() {
    return (
      <div className='app-container'>
        <div className='left-margin'></div>
        <div className='list-container'>
          <h1>Todo List</h1>
          <TodoList 
            todoList={this.state.todos}
            toggleTask={this.handleToggle}
          />
          <TodoForm 
            inputValue={this.state.taskTitle}
            updateTodoList={this.handleChange}
            updateAddTodo={this.handleAddTodo}
            updateRemoveTodos={this.handleRemoveTodos}
          />
          <EmptyList />
        </div>
      </div>
    );
  }
}

export default App;
