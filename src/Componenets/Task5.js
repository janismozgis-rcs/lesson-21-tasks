// 5. Create a table based on array matrix. For example this would be a 5x5 table
// [
//   ['Foo 1-1', 'Foo 1-2', 'Foo 1-3', 'Foo 1-4', 'Foo 1-5'],
//   ['Foo 2-1', 'Foo 2-2', 'Foo 2-3', 'Foo 2-4', 'Foo 2-5'],
//   ['Foo 3-1', 'Foo 3-2', 'Foo 3-3', 'Foo 3-4', 'Foo 3-5'],
//   ['Foo 4-1', 'Foo 4-2', 'Foo 4-3', 'Foo 4-4', 'Foo 4-5'],
//   ['Foo 5-1', 'Foo 5-2', 'Foo 5-3', 'Foo 5-4', 'Foo 5-5'],
// ]

function Task5() {
    const tableRows = [
        ['Foo 1-1', 'Foo 1-2', 'Foo 1-3', 'Foo 1-4', 'Foo 1-5'],
        ['Foo 2-1', 'Foo 2-2', 'Foo 2-3', 'Foo 2-4', 'Foo 2-5'],
        ['Foo 3-1', 'Foo 3-2', 'Foo 3-3', 'Foo 3-4', 'Foo 3-5'],
        ['Foo 4-1', 'Foo 4-2', 'Foo 4-3', 'Foo 4-4', 'Foo 4-5'],
        ['Foo 5-1', 'Foo 5-2', 'Foo 5-3', 'Foo 5-4', 'Foo 5-5'],
    ];

    // const tableRowElements = [];
    // let rowNumber = 0;
    // for (let row of tableRows) {
    //     const colElemetns = [];
    //     let colNumber = 0;
    //     for (let col of row) {
    //         colElemetns.push(<td key={colNumber}>{col}</td>)
    //         colNumber++;
    //     }

    //     tableRowElements.push(
    //         <tr key={rowNumber}>
    //             {colElemetns}
    //         </tr>
    //     );
    //     rowNumber++;
    // }

    const tableRowElements = tableRows.map((row, rowIndex) => {
        const tableColElemetns = row.map((col, colIndex) => {
            return <td key={colIndex}>{col}</td>
        })
        return (
            <tr key={rowIndex}>
                {tableColElemetns}
            </tr>
        )
    });

    return (
        <div>
            <h1>Task 5</h1>
            <table>
                <tbody>
                    {tableRowElements}
                </tbody>
            </table>
        </div>
    )
}

export default Task5;