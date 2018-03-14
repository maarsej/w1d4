var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];

var sorted = students.sort(function(info1, info2) {
  var nameA = info1.name.toUpperCase(); // ignore upper and lowercase
  var nameB = info2.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
   return 1;
  }
  else if (info1.age < info2.age){
    return -1;
  }
  else if (info1.age > info2.age){
    return 1;
  }
});
console.log(sorted);