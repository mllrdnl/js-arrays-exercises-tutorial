function generateRandomArray()
{
	var auxArray = [];
	var randomLength = Math.floor(Math.random()*100);
	for(var i = 0;i<randomLength;i++) auxArray.push(Math.floor(Math.random()*100));
	return auxArray;	
}
var myStupidArray = generateRandomArray();

//Your code here
let totalItems = myStupidArray.length;
// console.log(totalItems);

let lastPosition = (myStupidArray.length - 1);

let theLastOne = (myStupidArray[lastPosition]);
console.log(theLastOne);

