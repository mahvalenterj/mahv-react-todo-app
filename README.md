# Todo List - React Application...

## Overview

Two day solo project to build a Todo list application using React. User can add new todos to list, search todos by name, mark completed todos, and clear completed todos from list.

## Deployment

Deployed via netlify at [https://catolnai-todo-app.netlify.com](https://catolnai-todo-app.netlify.com/)

## Tech Stack

JavaScript | React | CSS

## Application

### Dependencies

`react` | `react-dom` | `react-scripts`

### File Structure

- root directory
	- package.json and yarn.lock
	- `public` directory
    - index.html: HTML file to run React App
  - `src` directory
    - index.js: JavaScript file to run React App
    - App.js: App's main react component to render sub-components, handle state, and perform handler functions
    - `components` directory
      - EmptyList.js: Component for styling purposes to create empty lines at end of list
      - `TodoComponents` directory
        - TodoForm.js: Input and Sumbit component to add new todo item
        - TodoList.js: Unordered list container for each Todo Components
        - Todo.js: List component for each todo
        - SearchForm.js: Input component to search for todos by name
        - Todo.css: Styling file for Todo App components

### Initializing

- `Fork and clone` this project and cd into your cloned version.
- `yarn install` will pull in all the node_modules you need.
- `yarn start` will start a development server on your `http://localhost:3000`.
  - If yarn asks you to select different port with some error message, just select `Y` and it will pull it up on port 3001.
  - This simply means you have a development server up and running on that port already.

### Todo List Array & Object Model

The todos are an array of objects with the following keys: task, id, completed.

```js
[
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
```

- The `task` field is the todo title that is be shown to the user.
- The `completed` field defaults to `false` and toggles to `true` when a user completes a todo.
- The `id` field is a unique `Time Stamp` that is assigned by `Date.now()`.

### Components

#### *`<App />`*
All application data and `handler` functions are be stored within `<App />`. It is also the container for all secondary Todo Components.
  
#### *`<TodoList />`*

`<TodoList />` receives the Todos array and iterates over the list generating a new `<Todo />` for each element in the array.

#### *`<Todo />`*

`<Todo />` is a component that takes in the `todo` data and displays the `task` to the screen. A user can click the todo which will toggle the task's `completed` status to `true`.

#### *`<TodoForm />`*
`<TodoForm>` holds the input field, `Add Todo` and `Clear Completed` buttons. The input field takes in user input, and allow a user to press `Enter` or click on the `Add Todo` to add a todo to the list. Once a todo is submitted, the `<TodoList />` re-renders and shows the added todo. A user can click on the `Clear Completed` button to clear (`filter` out) all tasks from the task array that are marked completed (i.e. `completed` is `true`) and the `<TodoList />` re-renders with the updated array list.

#### *`<SearchForm />`*
`<SearchForm>` holds an input field that takes in user input. As an input is typed, the todo array `filter`s and the `<TodoList />` re-renders to shows the todos that match the input by the todo `task` name.

