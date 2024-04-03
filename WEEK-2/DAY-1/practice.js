// function calculateSum(number) {
//   let sum = 0;
//   // Fill in the logic here to calculate the sum of all integers from 0 to the given number
//   for (let i= 0 ; i<=number ; i++) {
//       if (i%2==0) {
//           // Add the even number to the sum
//           sum += i;
//       }
//   }
//   return sum;
// }

// // Example usage:
// console.log(calculateSum(5)); // Output should be 15 (0 + 1 + 2 + 3 + 4 + 5 = 15)
// console.log(calculateSum(10)); // Output should be 55 (0 + 1 + 2 + ... + 9 + 10 = 55)


var person = {
  name: "Alice",
  age: 30,
  greet: function(timeOfDay) {
    // Update the name property with its uppercase value
    this.name = this.name.toUpperCase();
    // Create a greeting message using the updated name and the provided time of the day
    return `Good ${timeOfDay} , my name is ${this.name}.`;
  }
};

// Call the greet method with the time of the day and log the output
console.log(person.greet("morning"));