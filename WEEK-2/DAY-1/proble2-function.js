// Problem 2: Use the above function to print the Primes from 2 to a given limit

function isPrime(num) {
  let flag = true;
  for (let i = 2; i <= num; i++) {
    if (num % i == 0) {
      flag = false;
      break;
    }

  }
  return flag;
}
isPrime(10)
