// CHALLENGE #1
// Convert the function "add" to an ES6 arrow function

var add = (x,y) => x + y;

// You don't need to change this part
var result = add(3,4);
console.log("add(3,4) === ", result);

// CHALLENGE #2
// Convert the function "sumArray" to an ES6 arrow function
var sumArray = (arr) => {
    var total = 0;
    for (var i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

// You don't need to change this part
var result = sumArray([1,2,3,4,5]);
console.log("sumArray([1,2,3,4,5]) === ", result);

// CHALLENGE #3
// Convert the function "greetLikePirate" to an ES6 arrow function

var greetLikePirate = (name) => `ahoy ${name} shiver me timgers arrr!`;

// You don't need to change this part

var myName = "Mitch";
var result = greetLikePirate(myName);
console.log(`greetLikePirate(${myName}) === `, result);