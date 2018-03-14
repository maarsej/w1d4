var countdownGenerator = function (x) {
  /* your code here */
  // console.log('inside f1');
  var index = x;
  return function(){
    // console.log('inside f2');
    // console.log(index>0);
    if (index > 0 ){
      console.log('T-minus'+" " + index);
      index = index - 1;
    }
    else if (index === 0){
      console.log('Blast Off');
      index = index - 1;
    }
    else {
      console.log('Rockets already gone, bub!');
    }
  };
};

var countdown = countdownGenerator(3);
countdown(); // T-minus 3...
countdown(); // T-minus 2...
countdown(); // T-minus 1...
countdown(); // Blast Off!
countdown(); // Rockets already gone, bub!
countdown(); // Rockets already gone, bub!