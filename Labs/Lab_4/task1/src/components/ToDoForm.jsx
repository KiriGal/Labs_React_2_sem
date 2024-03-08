import React from 'react';
import './ToDoFormStyle.css';

const ToDoForm = ({toDoItem, setToDoItem, addToDoItem, submit}) => {

    return (
            <form>
                <h1>Write your task</h1>
                <input
                    value={toDoItem}
                    type="text"
                    onChange={(e) => {
                        setToDoItem(e.target.value)
                    }}
                />
                <p><button className="add-button" onClick={(e) => {
                    e.preventDefault();
                    addToDoItem();
                }}>Add</button></p>
                <p><button className="submit-button" onClick={(e) => {
                    e.preventDefault();
                    submit();
                }}>Submit</button></p>
            </form>
    );
};

export default ToDoForm;