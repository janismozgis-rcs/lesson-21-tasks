// 1. Print out every other number (every odd number) from 1 - 100 as a ordered list using react.

function Task1() {

    const numbersList = [];

    // for (let i = 0; i <= 100; i++) {
    //     if (i % 2 != 0) {
    //         numbersList.push(<li>{i}</li>)
    //     }
    // }
    for (let i = 1; i <= 100; i = i + 2) {
        numbersList.push(<li key={i}>{i}</li>)
    }
    // i += 2
    // i = i + 2

    return (
        <div>
            <h1>Task 1</h1>
            <ol>
                {numbersList}
            </ol>
        </div>
    )
}

export default Task1;