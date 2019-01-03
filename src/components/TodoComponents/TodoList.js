import React from 'react';
import Todo from './Todo';
import './Todo.css';


const TodoList = props => {
    return (
        <ul>
            {props.todoList.map( todoItem => 
                <Todo 
                    key={todoItem.id} 
                    taskId={todoItem.id} 
                    task={todoItem.task} 
                    updateTask={props.toggleTask}
                    className={todoItem.completed ? 'complete' : 'incomplete'}
                />
            )}
        </ul>
    );
};

export default TodoList;
