function findWaldo(arr, found) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === "Waldo") {
      found(i);   // execute callback
    }
  }
}

function actionWhenFound(index) {
  console.log("Found Him at index",index);
}

findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);

function findWaldo2(arr, found) {
 arr.forEach(function(name){
    if (name === "Waldo") {
      found();   // execute callback
    }
  });
}

function actionWhenFound2(index) {
  console.log("Found Him!");
}

findWaldo2(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound2);