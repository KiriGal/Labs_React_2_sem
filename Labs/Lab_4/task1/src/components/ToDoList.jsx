import React, {useState} from 'react';
import ToDoForm from "./ToDoForm";
import ToDoItems from "./ToDoItems";
import './ToDoListStyle.css';

const ToDoList = () => {
    const [listTodos, setListTodos] = useState([]);
    const [toDoItem, setToDoItem] = useState("");
    const [bufferItems, setBufferItems] = useState([]);

    const addToDoItem = () => {
        if(toDoItem !== ""){
            setBufferItems([...bufferItems, {task: toDoItem, stage: "0"}]);
            setToDoItem("");
        }
    };

    const buffetToList = () => {
        if(bufferItems){
            setListTodos([...listTodos, ...bufferItems]);
            setBufferItems([]);
            setToDoItem("");
        }
    }

    return (
        <div className="container">
            <h1 className="container-header">ToDo App list</h1>
            <ToDoForm toDoItem={toDoItem} setToDoItem={setToDoItem} addToDoItem={addToDoItem} submit={buffetToList}></ToDoForm>
            <ToDoItems list={listTodos}></ToDoItems>
        </div>
    );
};

export default ToDoList;