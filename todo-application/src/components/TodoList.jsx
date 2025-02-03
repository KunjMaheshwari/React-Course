import React, { useState } from "react";

function TodoList() {

    const [tasks, setTask] = useState(["Eat Breakfast", "Take a shower", "Walk the dog"]);
    const [newTask, setNewTask] = useState([]);

    function handleInputChange(e) {
        setNewTask(e.target.value);
    }

    function addTask() {
        if (newTask.trim() !== "") {
            setTask(t => [...t, newTask]);
            setNewTask("");
        }
    }

    function deleteTask(index) {
        const updatedTask = tasks.filter((_, i) => i != index);
        setNewTask(updatedTask);
    }

    function moveTaskUp(index) {
        if(index > 0){
            const updatedTask =[...tasks];
            [updatedTask[index], updatedTask[index-1]] = [updatedTask[index-1], updatedTask[index]];

            setTask(updatedTask);
        }
    }

    function moveTaskDown(index) {
        // Similarly.
    }

    return (
        <div className="to-do-list">
            <h1>TodoList</h1>
            <div>
                <input
                    type="text"
                    placeholder="Enter a task..."
                    id="input-box"
                    value={newTask}
                    onChange={handleInputChange}
                />
                <button className="add-button" onClick={addTask}>Add</button>
            </div>

            <ul>
                {tasks.map((task, index) =>
                    <li key={index}><span className="text">{task}</span><button className="delete-button" onClick={() => deleteTask(index)}>Delete</button>
                        <button className="move-button" onClick={moveTaskUp}>Move Up</button>
                        <button className="move-down" onClick={moveTaskDown}>Move Down</button></li>)}
            </ul>

        </div>
    )
}

export default TodoList;