//find the least common multiple of sequential numbers in the range
//example smallestCommons([3, 5]) is 3 * 2^2 * 5 = 60 since it is multiple (least) of 3, 4, 5

function smallestCommons(arr) {
  //sort the length 2 array from small to big
  arr.sort((a,b) => a-b)

  //expand the array with increment of 1
  for (let i = arr[0]; i < arr[arr.length - 1] - 1; i++) {
    arr.splice(arr.length-1, 0, i + 1) 
  }

  //set up prime collection less than or equal to last element of array
  let primeArr = Primes(arr[arr.length-1])
  console.log(primeArr)
  console.log(arr)

  //factor and save under json


  //create function to save power of each prime factor under json
  let primeGather = function(n) {
    let divisor = 2;
    let factor = {}
    for (let i = 0; i < primeArr.length; i++) {
      factor[primeArr[i]] = 0
    }
    while (n >= 2) {
      if (n % divisor == 0) {
        factor[divisor] += 1;
        n = n / divisor;
      } else {
        divisor++;
      }
    }
    return factor;
  }

  //primeGather for each element in arr
  let primePower = arr.map(element => primeGather(element))
  let pp = {}
  for (let i = 0; i < primePower.length; i++) {
    for (const property in primePower[i]) {
      if (pp[property] == undefined) {
        pp[property] = []
        pp[property].push(primePower[i][property])
        console.log(pp)
      } else {
        pp[property].push(primePower[i][property])
      }
    }
  }

767



  console.log(pp)
  let cancun = 1
  for (const property in pp) {
    cancun *= property ** Math.max(...pp[property])
  }
  console.log(cancun)
  

  return cancun;
}





function Primes(num) {
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
  return tryingArr
}
smallestCommons([6,8]);
