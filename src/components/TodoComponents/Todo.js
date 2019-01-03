import React from 'react';
import './Todo.css';

const Todo = props => 
    <li 
        onClick={props.updateTask} 
        data-id={props.taskId}
        className={props.className}
    >
        {props.task}
    </li>;

export default Todo;