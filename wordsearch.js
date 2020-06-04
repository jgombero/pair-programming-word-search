const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    const regex = RegExp(word, "g");
   
    const result = [];
    for (let i = 0; i < letters[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < letters.length; j++) {
            result[i].push(letters[j][i]);
        }
    }
    const realResult = result.map(ls => ls.join(''));
    
    return regex.test(horizontalJoin) || regex.test(realResult);
};

module.exports = wordSearch;