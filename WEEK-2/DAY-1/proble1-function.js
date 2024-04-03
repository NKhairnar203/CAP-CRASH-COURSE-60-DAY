// Create a function to check if a number is Prime or Not

function isPrime(num) {
  let flag = true;

  if (num <= 1) {
    flag = false;
  } else {
    for (let i = 2; i < num; i++) {
      if (num % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag) {
    console.log(num + " is a prime number");
  } else {
    console.log(num + " is not a prime number");
  }
}

isPrime(2);
