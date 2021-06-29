// 7. Print out a list of cars (at least 5) and have an input field underneeth it. Typing a car names seperated by space should gihlight each matched car in the list with other background color.


import { useState } from "react";

function Task7() {
    const cars = ['vaz', 'gaz', 'zaz', 'maz', 'bmw'];
    const [specialCarNames, setSpecialCarNames] = useState('');

    const updateSpecialCarNames = (event) => {
        setSpecialCarNames(event.target.value);
    }

    const carsElements = cars.map((car, index) => {
        // const bgColor = car === specialCarNames ? 'red' : 'transparent';
        const specialCarNamesArray = specialCarNames.split(' ');
        const bgColor = specialCarNamesArray.indexOf(car) != -1 ? 'red' : 'transparent';
        
        return <li key={index} style={{backgroundColor: bgColor}}>{car}</li>
    })

    return (
        <div>
            <h1>Task 7</h1>
            <ul>
                {carsElements}
            </ul>
            <input value={specialCarNames} onChange={updateSpecialCarNames} />
        </div>
    )
}

export default Task7;