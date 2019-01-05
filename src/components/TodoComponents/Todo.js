import React from 'react';
import './Todo.css';

const Todo = props => 
    <li>
        <span         
        onClick={props.updateTask} 
        data-id={props.taskId}
        className={`item-text ${props.className}`}
        >
            {props.task}
        </span>
    </li>;

export default Todo;