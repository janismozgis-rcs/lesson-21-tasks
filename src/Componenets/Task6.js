// 6. Print out a list of cars (at least 5) and have an input field underneeth it. Typing a car name in the input field should change the cars background to red.
//['vaz', 'zaz', 'gaz']

import { useState } from "react";

function Task6() {
    const cars = ['vaz', 'gaz', 'zaz', 'maz', 'bmw'];
    const [specialCarName, setSpecialCarName] = useState('');

    const updateSpecialCarName = (event) => {
        setSpecialCarName(event.target.value);
    }

    const carsElements = cars.map((car, index) => {
        // let bgColor = 'none';
        // if (car === specialCarName) {
        //     bgColor = 'red';
        // }
        const bgColor = car === specialCarName ? 'red' : 'transparent';
        
        return <li key={index} style={{backgroundColor: bgColor}}>{car}</li>
    })

    return (
        <div>
            <h1>Task 6</h1>
            <ul>
                {carsElements}
            </ul>
            <input value={specialCarName} onChange={updateSpecialCarName} />
        </div>
    )
}

export default Task6;