import React from 'react';
import Todo from './Todo';

const TodoList = props => {
    return (
        <ul>
            {props.todoList.map( todoItem => 
                <Todo 
                    key={todoItem.id} 
                    taskId={todoItem.id} 
                    task={todoItem.task} 
                    updateTask={props.toggleTask}
                />
            )}
        </ul>
    );
};

export default TodoList;
