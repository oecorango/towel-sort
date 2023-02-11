
// You should implement your task here.

module.exports = function towelSort (matrix) {
	let result = [];
	let arr = [];
	
	if (matrix === undefined || matrix === [] || matrix === null || matrix.length === 0) {
		return [];
	};
	
	for (let i = 0; i < matrix.length; i++) {
		if (i % 2 === 0) {
			matrix[i];
		} else matrix[i].reverse();
		arr.push(matrix[i]);
	}

	return result.concat(...arr)
}