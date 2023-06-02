// program to find the Array in object value

// take input from the user

var emp = [
  {
    name: "yash",
    age: 21,
    salary: 20000,
  },
  {
    name: "kano xyz",
    age: 19,
    salary: 10000,
  },
  {
    name: "kano abc",
    age: 18,
    salary: 10000,
  },
  {
    name: "jenish",
    age: 20,
    salary: 12000,
  },
  {
    name: "abhishek",
    age: 20,
    salary: 12000,
  },
];
var input = prompt(); // kan
// var b = a.filter((val) => val.name == input;
var b = a.filter((val) => val.name.includes(input.toLowerCase));

// output
console.log(b);
// [
//   {
//     name: "kano xyz",
//     age: 19,
//     salary: 10000,
//   },
//   {
//     name: "kano abc",
//     age: 18, 
//     salary: 10000,
//   },
// ];
