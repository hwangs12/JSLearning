//A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

//Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.

//sumPrimes(10) should return a number.

//sumPrimes(10) should return 17.

//sumPrimes(977) should return 73156.

function sumPrimes(num) {
  let numArr = [];
  for (let i = 1; i <= num; i++) {
    numArr.push(i)
  }
  
  let tryingArr = numArr.slice(1)

  for (let j = 0; j < tryingArr.length; j++) {
    let storePrime = tryingArr[j]
    tryingArr = tryingArr.filter(element => element % tryingArr[j] != 0)
    tryingArr.splice(j, 0, storePrime)
  }
  
  let sumOfPrime = tryingArr.reduce((a, b) => a+b)

  return sumOfPrime;
}
