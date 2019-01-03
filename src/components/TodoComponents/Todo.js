import React from 'react';

const Todo = props => 
    <li onClick={props.updateTask} data-id={props.taskId}>
        {props.task}
    </li>;

export default Todo;