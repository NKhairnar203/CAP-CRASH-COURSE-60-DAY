let numbersArray = [2, 3, 7, 8, 10, 13, 15, 18, 34, 25];


// task 1 : Mapping to Doubles
let doublesArray = numbersArray.map(function(ele,i){
    return ele*2;
})

console.log(`Double d array: ${doublesArray}`);


// task 2 : Filtering Evens

let isEvenArray = numbersArray.filter((num) => {
   if ( num % 2 ===  0 ) {
       return true;
   } else {
      return false;
   }
});

console.log(`Even Array : ${isEvenArray} `);


// task 3 : Summation

let sumOfArray = numbersArray.reduce( function(acc, curVal){
  return  acc + curVal;
},0)

console.log(`All Sum of Array: ${sumOfArray}`);