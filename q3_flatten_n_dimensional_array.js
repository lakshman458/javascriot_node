/* Write a Program to Flatten a given n-dimensional array */

const flatten = () => {
	const arr1 = [0, 1, 2, [3, 4]];

console.log(arr1.flat());


};

flatten();

/* For example,
INPUT - flatten([1, [2, 3], [[4], [5]])
OUTPUT - [ 1, 2, 3, 4, 5 ]

*/

module.exports = flatten;
