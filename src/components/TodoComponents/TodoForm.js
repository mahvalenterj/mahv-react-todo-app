import React from 'react';

const TodoForm = (props) => {
    return (
        <div className='form-container'>
            <div className='input-field'>
                <input 
                    onChange={props.updateTodoList} 
                    onKeyDown={props.updateAddTodo} 
                    value={props.inputValue}
                    placeholder='...add todo'
                >
                </input>
            </div>
            <div className='btn-field'>
                <button onClick={props.updateAddTodo}>Add Todo</button>
                <button onClick={props.updateRemoveTodos}>Clear Completed</button>
            </div>
        </div>
    );
};

export default TodoForm;
