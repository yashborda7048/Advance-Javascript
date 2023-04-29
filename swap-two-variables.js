// 1

//take input from the users
let a = 10;
let b = 15;

//create a temporary variable
let temp;

//swap variables
temp = a;
a = b;
b = temp;

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);


// 2

//take input from the users
let c = 20;
let d = 25;

//using destructuring assignment
[c, d] = [d, c];

console.log(`The value of a after swapping: ${c}`);
console.log(`The value of b after swapping: ${d}`);

// 3

//take input from the users
let x = 30;
let y = 35;

// addition and subtraction operator
x = x + y;
y = x - y;
x = x - y;

console.log(`The value of a after swapping: ${x}`);
console.log(`The value of b after swapping: ${y}`);