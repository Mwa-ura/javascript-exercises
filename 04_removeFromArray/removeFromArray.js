const removeFromArray = function(array, ...args) { 
	let array2 = [...args]

	newArray = array.filter(function(element) {
		return !array2.includes(element);
	});
	return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
