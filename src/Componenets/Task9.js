// 9. Have 2 input fields. If the inputs are anagrams, show a green message stating that those are anagrams. If they are not, show red message stating they are not.

import { useState } from "react";
import isAnangram from '../Helpers/isAnagram'

function Task9() {
    const [word1, setWord1] = useState('');
    const [word2, setWord2] = useState('');

    const updateWord1 = (event) => {
        setWord1(event.target.value);
    }

    const updateWord2 = (event) => {
        setWord2(event.target.value);
    }

    let isAnagramMessage = <h4 style={{backgroundColor: 'red'}}>Words are not anagrams</h4>
    if (isAnangram(word1, word2)) {
        isAnagramMessage = <h4 style={{backgroundColor: 'green'}}>Words are anagrams</h4>
    }

    return (
        <div>
            <h1>Task 9</h1>
           <input value={word1} onChange={updateWord1} />
           <input value={word2} onChange={updateWord2} />
           {isAnagramMessage}
        </div>
    )
}

export default Task9;