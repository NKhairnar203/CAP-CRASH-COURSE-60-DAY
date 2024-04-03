// Problem 3: Use the same function to print Non-Primes from 2 to a given limit

// Problem 2: Use the above function to print the Primes from 2 to a given limit

function isPrime(num) {
  let count = 0;
  for(let i=0;i<=num;i++){
    if(num%i===0)
    {
      count++;
    }

  }

  if(count==2){
    return true;
  }
  else
  {
    return false;
  }
  
}

var limit = 100;
for(let i=2;i<=limit;i++){
  var result = isPrime(i);
  if(result != true){
     console.log(i + " is not prime");
  }
}


