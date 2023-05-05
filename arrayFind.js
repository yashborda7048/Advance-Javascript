// program to find the Array in object value find first value

// take input from the user
const inventory = [
  {
    name: "apples",
    quantity: 2,
  },
  {
    name: "bananas",
    quantity: 0,
  },
  {
    name: "cherries", // find first value
    quantity: 5,
  },
  {
    name: "cherries",
    quantity: 8,
  },
  {
    name: "cherries",
    quantity: 9,
  },
];

const result = inventory.find(({ name }) => name === "cherries");

console.log(result); // { name: 'cherries', quantity: 5 }
