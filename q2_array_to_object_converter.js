/* Write a Program to convert an array of objects to an object
	based on a given key */


const convert = () => {
	// Write your code here
     var arr=[{id:1,name:'lucky',role:'developer'}]

let res=arr.reduce((pre,current)=>{
	pre[current.v]=current;
	return pre;
},{})
console.log(res);

};
convert();
/* For example,
INPUT - convert([{id: 1, value: 'abc'}, {id: 2, value: 'xyz'}], 'id')
OUTPUT - {
			'1': {id: 1, value: 'abc'},
			'2': {id: 2, value: 'xyz'}
		 }


*/

module.exports = convert;
