import React from 'react';

const TodoForm = (props) => {
    return (
        <div>
            <input 
                onChange={props.updateTodoList} 
                onKeyDown={props.updateAddTodo} 
                value={props.inputValue}
                placeholder="...todo">
            </input>
            <button onClick={props.updateAddTodo}>Add Todo</button>
            <button>Clear Completed</button>
        </div>
    );
};

export default TodoForm;
