// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = props => props.todoList.map( todoItem => 
    <Todo key={todoItem.id} task={todoItem.task} /> 
);

export default TodoList;
