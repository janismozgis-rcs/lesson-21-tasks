// 4. Have a list of items and a input field + button. Typing something into the field and hitting the button would add what ever was entered in the input field as a new item to the list.App

import { useState } from "react";

function Task4() {
    // state and general variables
    const [newTaskName, setNewTaskName] = useState('');
    const [list, setList] = useState([
        'Learn React',
        'Buy milk',
        'Be awesome',
    ]);

    // event actions
    const addTask = () => {
        if (newTaskName == '') {
            alert('No name passed');
            return;
        }
        setList([...list, newTaskName]);
        setNewTaskName('');
    }

    const updateNewTaskName = (event) => {
        setNewTaskName(event.target.value);
    }

    // manipulate / create html or jsx elements

    // const listElements = list.map((item) => {
    //     return <li>{item}</li>
    // })
    const listElements = list.map((item, index) => <li key={index}>{item}</li>);


    return (
        <div>
            <h1>Task 4</h1>
            <ul>
                {listElements}
            </ul>
            <h4>Add task</h4>
            <label>New task name</label>
            <input onChange={updateNewTaskName} />
            <button onClick={addTask}>Add task</button>
        </div>
    )
}

export default Task4;