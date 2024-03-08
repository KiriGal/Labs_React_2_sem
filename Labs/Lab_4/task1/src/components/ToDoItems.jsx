import React, {useEffect, useState} from 'react';
import './ToDoItemsStyle.css';

const ToDoItems = ({list}) => {
    const [sortedList, setSortedList] = useState(list);
    const [sortConfig, setSortConfig] = useState("0")

    useEffect(() => {
        const sorted = [...list].filter((element) => {
            if (element.stage === sortConfig) return element;
            return false;
        });
        setSortedList(sorted);
    }, [sortConfig, list]);

    const sortList = () => {
        const sorted = [...list].filter((element) => {
            if (element.stage === sortConfig) return element;
            return false;
        });

        setSortedList(sorted);
    }

    const setStageTask = (toDoItem) => {
        const newSortedList = sortedList.filter((item) => {
            if(item.task === toDoItem.task) item.stage = "1";
            return item;
        });
        console.log(newSortedList)
        setSortedList(newSortedList);
        sortList();
    }

    return (
        <div className={"todo-items"}>
            <select onChange={e => setSortConfig(e.target.value)}>
                <option value={0}>Невыполненные задачи</option>
                <option value={1}>Выполненные задачи</option>
            </select>
            {sortedList?.length > 0 ? (
                sortedList.map((toDoItem, index) => (
                    <div className="task-item" key={index}>
                        {toDoItem.stage === "0" ? (
                            <input
                                checked={toDoItem.stage === "0" ? false : null}
                                className={"task-stage"}
                                type="checkbox"
                                onChange={() => {setStageTask(toDoItem)}}
                        />) : null}
                        <p>{toDoItem.task}</p>
                    </div>
                ))
            ):(
                <div className="empty">
                    <p>No task found</p>
                </div>
            )}
        </div>
    );
};

export default ToDoItems;