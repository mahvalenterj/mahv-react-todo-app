import React from 'react';
import TodoList from '../src/components/TodoComponents/TodoList';
import TodoForm from '../src/components/TodoComponents/TodoForm';
import SearchForm from '../src/components/TodoComponents/SearchForm';
import EmptyList from './components/EmptyList'
import '../src/components/TodoComponents/Todo.css';

const todoArray = [
  {
      task: 'Organizar a Garagem',
      id: 1528817077286,
      completed: false
  },
  {
      task: 'Cozinhar',
      id: 1528817084358,
      completed: false
  }
];

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      todos: todoArray,
      filteredTodos: [],
      taskTitle: "",
      searchTitle: ""
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
    if (this.state.searchTitle) {
      alert ("Please clear search before clearing items.")
      return
    }
    this.setState({
      todos: this.state.todos.filter( todo => !todo.completed)
    })
  }

  handleSearchChange = (e) => {

    let filterTodos = this.state.todos.filter( todo => {
      return todo.task.toLowerCase().includes(e.target.value.toLowerCase());
    })

    if (filterTodos.length === this.state.todos.length) {
      this.setState({
        filteredTodos: [],
        searchTitle: e.target.value
      });
    } else {
      this.setState({
        filteredTodos: filterTodos,
        searchTitle: e.target.value
      });
    }
  }

  render() {
   
    return (
      <div className='app-container'>
        <div className='left-margin'></div>
        <div className='list-container'>
          <h1>Lista de Tarefas</h1>
          <TodoList 
            todoList={ this.state.filteredTodos.length ? this.state.filteredTodos : this.state.todos }
            toggleTask={this.handleToggle}
          />
          <TodoForm 
            inputValue={this.state.taskTitle}
            updateTodoList={this.handleChange}
            updateAddTodo={this.handleAddTodo}
            updateRemoveTodos={this.handleRemoveTodos}
          />

          <SearchForm 
            inputValue={this.state.searchTitle}
            updateSearchChange={this.handleSearchChange}
          />
          <EmptyList />
        </div>
      </div>
    );
  }
}

export default App;
