// 3. Have a table, with 2 columns and 2 rows + a button. Clicking on that button should add a row to the table. Here is example HTML for the table.
// <table id="sampleTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>

import { useState } from "react";

function Task3() {
    const [numberOfRows, setNumberOfRows] = useState(2);

    const addRow = () => {
        setNumberOfRows(numberOfRows + 1);
    }

    const rows = [];
    for (let i = 1; i <= numberOfRows; i++) {
        rows.push(
        <tr key={i}>
            <td>Row {i} Col 1</td>
            <td>Row {i} Col 2</td>
        </tr>)
    }

    return (
        <div>
            <h1>Task 3</h1>
            <table>
                <tbody>
                    {rows}
                </tbody>
            </table>
            <button onClick={addRow}>Add row</button>
        </div>
    )
}

export default Task3;