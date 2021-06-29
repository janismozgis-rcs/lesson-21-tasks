function isAnangram(word1, word2) {
    const sortedWord1 = word1.toLowerCase().replace(/ /g, '').split('').sort().join('');
    const sortedWord2 = word2.toLowerCase().replace(/ /g, '').split('').sort().join('');

    return sortedWord1 == sortedWord2;
}

export default isAnangram;