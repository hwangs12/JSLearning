//Arguments Optional
//Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

//For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

//Calling this returned function with a single argument will then return the sum:

//var sumTwoAnd = addTogether(2);
//sumTwoAnd(3) returns 5.

//If either argument isn't a valid number, return undefined.

function addTogether(arg1) {
  let sum = 0
  if (isNaN(arg1)) {
    return undefined
  }

  if (arguments.length == 2) {
    if (typeof arguments[1] !== "number") {
      return undefined
    }
    sum = arg1 + arguments[1]
    return sum
  } else if (arguments.length ==1) {
    return function(arg2) {
      if (typeof arg2 !== "number") {
        return undefined
      } else {
        return arg1 + arg2
      }
    }
  }
}
