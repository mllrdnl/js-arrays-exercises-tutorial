var people = ['juan','ana','michelle','daniella','stefany','lucy','barak'];

function deletePerson(personName)
{
    //your code here
    var newlist = [];
    for (let i = 0; i<people.length; i++) {
        var currentName = people[i]

        if (currentName !== personName) {
            newlist.push(currentName);
        }
    }

    return newlist;
}

console.log(deletePerson('daniella'));
console.log(deletePerson('juan'));
console.log(deletePerson('emilio'));

//1. create a new empty list
//2. loop through the names in the people array
//3. if element doesn't match person's name, add it to the new list
//4. after the loop, return the new list