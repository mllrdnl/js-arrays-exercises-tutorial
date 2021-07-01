function sumTheElements(theArray){
	
	var total = 0;
	
    //your code here
    for (let index = 0; index < theArray.length; index++) {
        let element = theArray[index];
        total = total + element;
    }

	return total;
}