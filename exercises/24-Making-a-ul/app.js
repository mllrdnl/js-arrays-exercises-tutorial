let allColors = [
	{label: 'Red', sexy: true},
	{label: 'Pink', sexy: false},
	{label: 'Orange', sexy: true},
	{label: 'Brown', sexy: false},
	{label: 'Pink', sexy: true},
	{label: 'Violet', sexy: true},
	{label: 'Purple', sexy: false},
];

function generateLI(color){
	// your code here
	return '<li>' + color.label + '</li>';

}

//purpose of function is to generate an <li></li> tag.
// the input is an array with a string label and sexy boolean, 
// the output is <li></li> tags for each 'sexy color'

function filterColors(color){
	// your code here
	if (color.sexy === true) {
		return color.sexy;
	}
}


function generateHTMLFromArray(array){
	
	let filteredOptions = array.filter(filterColors);
	let LIs = filteredOptions.map(generateLI);

	let htmlString = '<ul>';
	LIs.forEach(function(elm){
		htmlString += elm;
	})
	htmlString += '</ul>';
	return htmlString;
}

console.log(generateHTMLFromArray(allColors));

