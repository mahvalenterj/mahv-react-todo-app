import React from 'react';

const TodoForm = (props) => {
    return (
        <div className='form-container'>
            <div className='input-field'>
                <input 
                    onChange={props.updateTodoList} 
                    onKeyDown={props.updateAddTodo} 
                    value={props.inputValue}
                    placeholder='...adicionar tarefa'
                >
                </input>
            </div>
            <div className='btn-field'>
                <button onClick={props.updateAddTodo}>Adicionar tarefa</button>
                <button onClick={props.updateRemoveTodos}>Limpar tarefas completas</button>
            </div>
        </div>
    );
};

export default TodoForm;
