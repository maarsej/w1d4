// var foo = (function() {
//   var x = 10;

//   var inner = function() {
//     console.log("Value of x is: " + x);
//   }
//   return inner;
// })(); // Notice the () at the end,
//       // which will immediately invoke the function,
//       // assigning the returned value (inner) to foo
// foo();
// foo();

function multiplier(factor) {
    // return number => number * factor;
  return function (number){
  return number*factor;
  };
}

let twice = multiplier(2);
console.log(twice(10));
// → 10