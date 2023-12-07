const sumAll = function(firstNum, secondNum) {
    let total = 0;
    if (firstNum < 0) {
        return 'ERROR';
    }
    else if (Number.isInteger(firstNum) === false) {
        return 'ERROR';
    }
    else if (Number.isInteger(secondNum) === false) {
        return 'ERROR';
    }
    else if (firstNum > secondNum) {
        for (let i = secondNum; i<=firstNum; i++) {
            total += i;
        }
        return total;
    } 
    else {
        for (let i = firstNum; i<=secondNum; i++ ) {
            total += i;
        }
        return total;
    }
};

// Do not edit below this line
module.exports = sumAll;
