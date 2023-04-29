// program to sort words in alphabetical order

// take input
const string = 'I am learning JavaScript';

// converting to an array
const words = string.split(' ');

// sort the array elements
words.sort();

// display the sorted words
console.log('The sorted words are:');

for (const element of words) {
  console.log(element);
}

// The sorted words are:
// Ans :-
// I
// JavaScript
// am
// learning

let text = "How are you doing today?";
const myArray = text.split(" ", 3);

console.log(myArray);

// Ans:- How,are,you