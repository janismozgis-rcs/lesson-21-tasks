// 3. Have a table, with 2 columns and 2 rows + a button. Clicking on that button should add a row to the table. Here is example HTML for the table.
// <table id="sampleTable" border="1">
// <tr><td>Row1 cell1</td>
// <td>Row1 cell2</td></tr>
// <tr><td>Row2 cell1</td>
// <td>Row2 cell2</td></tr>

import { useState } from "react";

function Task3_2() {
    const [tableRows, setTableRows] = useState([
        ['Row 1 Col 1', 'Row 1 Col 2'],
        ['Row 2 Col 1', 'Row 2 Col 2'],
    ]);
    const addRow = () => {
        const nextRowNumber = tableRows.length + 1;

        const newRow = [`Row ${nextRowNumber} Col 1`, `Row ${nextRowNumber} Col 2`];
        setTableRows([...tableRows, newRow]);
    }

    const tableRowElements = tableRows.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
            </tr>
        )
    })

    return (
        <div>
            <h1>Task 3</h1>
            <table>
                <tbody>
                    {tableRowElements}
                </tbody>
            </table>
            <button onClick={addRow}>Add row</button>
        </div>
    )
}

export default Task3_2;