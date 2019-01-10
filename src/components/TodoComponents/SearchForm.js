import React from 'react';

const SearchForm = (props) => {
    return (
        <div className='form-container'>
            <div className='input-field'>
                <input 
                    onChange={props.updateSearchChange} 
                    onKeyDown={props.updateFilterTodos} 
                    value={props.inputValue}
                    placeholder='...search todos'
                >
                </input>
            </div>
        </div>
    );
};

export default SearchForm;
