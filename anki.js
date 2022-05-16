for (let i = 1; i <= 100; i++) {
    let f = i % 3 == 0,
      b = i % 5 == 0;
    console.log(f ? (b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i);
  }

  var firstWord = "myry";
var secondWord = "yrmy";

isAnagram(firstWord, secondWord); // true

function isAnagram(first, second) {
  // For case insensitivity, change both words to lowercase.
  var a = first.toLowerCase();
  var b = second.toLowerCase();
 


  // Sort the strings, and join the resulting array to a string. Compare the results
  a = a.split("").sort().join("");
  b = b.split("").sort().join("");
  let newA = [...new Set(a)];
  let newB = [...new Set(a)];

  console.log(newA,newB);

  return newA === newB;
}
console.log(isAnagram(firstWord, secondWord));// true);


var y = 1;
if (function f() {}) {
    console.log(typeof f);

//   y += typeof f;
//   console.log(y);


}

var x=3;

 function add(){
    console.log(typeof add);
}
add()
