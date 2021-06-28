// 2. FizzBazz from 1 - 100, print out the result for each number (Write a program that prints the numbers from 1 to 100. But for multiples of two print "Fizz" instead of the number and for the multiples of three print "Buzz". For numbers which are multiples of both two and three print "FizzBuzz".)

function Task2() {
    const listElements = [];

    for (let i = 0; i < 100; i++) {
        // let output = '';
        // if (i % 2 == 0) {
        //     output = 'Fizz';
        // }
        // if (i % 3 == 0) {
        //     output += 'Bazz';
        // }
        // if (output == '') {
        //     output = i;
        // }
        // listElements.push(<li key={i}>{output}</li>);
        if (i % 2 == 0 && i % 3 == 0) {
            listElements.push(<li key={i}>FizzBazz</li>);
        } else if (i % 2 == 0) {
            listElements.push(<li key={i}>Fizz</li>);
        } else if (i % 3 == 0) {
            listElements.push(<li key={i}>Bazz</li>);
        } else {
            listElements.push(<li key={i}>{i}</li>);
        }
    }

    return (
        <div>
            <h1>Task 2</h1>
            <ul>
                {listElements}
            </ul>
        </div>
    )
}

export default Task2;