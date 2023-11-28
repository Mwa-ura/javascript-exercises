const reverseString = function(string) {
    let original = string;
    let reversed = original.split('').reverse().join('');
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
