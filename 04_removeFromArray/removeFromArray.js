const removeFromArray = function(array, num) { 
    var list = [];
	for (i = 0; i<array.length; i++) {
		var eachItem = array[i];
		if (eachItem == num) { 
			continue;
		}
		else {
			list.push(eachItem)
		}
	}
	return list;
};

// Do not edit below this line
module.exports = removeFromArray;
