// 8. Have a array of cars in the react component (at least 5), a input field and a field for displaying a text. When you type in a valid car name (found in the list) it shoud display a green message saying "The car was found". If it is not in the list, it shoud should have red message saying "The car was not found".


import { useState } from "react";

function Task8() {
    const cars = ['vaz', 'zaz', 'gaz', 'maz', 'uaz'];
    const [carName, setCarName] = useState('');

    const updateCarName = (event) => {
        setCarName(event.target.value);
    }

    let carFoundLabled = <h4 style={{color: 'red'}}>Car was not found</h4>
    if (cars.indexOf(carName) !== -1) {
        carFoundLabled = <h4 style={{color: 'green'}}>Car was found</h4>
    }

    return (
        <div>
            <h1>Task 8</h1>
            <input value={carName} onChange={updateCarName} />
            {/* <input value={carName} onChange={(event) => setCarName(event.target.value)} /> */}
            {carFoundLabled}
            {cars.indexOf(carName) !== -1 
                ? 
                <h4 style={{color: 'green'}}>Car was found</h4> 
                : 
                <h4 style={{color: 'red'}}>Car was not found</h4>
            }
        </div>
    )
}

export default Task8;