// invert values

//given a set of numbers, return additive inverse of each
//each positive number becomes negative, negative becomes positive
//watch for zero edge cases
//buil for this, invoke and pass test parameter of [0,1,3,-2]
//function takes in 1 parameter 'array'
//output should be [0,-1,-3,2]

/* Es5 function
function invert(arr){ 
  var myArray = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      myArray.push(arr[i]);
  } else{
      myArray.push(arr[i] * -1);
  }
  
return myArray;

}

console.log(invert([0,1,-2,3]))
*/

//Es6
/*funtion invert(arr){
  return arr.map(x => === 0 x ? -x); //funtional array method = arr.map and x is a number. Map is the i in for loops => is arrow function and returns map will create a new array and modifies so 0 is left and anything else is to the right
}

console.log(invert([0,1,-2,3]))

*/

//ES6 into?

// var vs let (es5 vs es6) same but different cause method of scope, let restricts scope(can't change out of loop), var can be constantly changed

//ie of var and let

var arr = [5];

let arr = [5];

function varTest(){
  var x = 1;

  if(true){
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
varTest();


function letTest(){
  let x = 1;

  if(true){
    var x = 2;
    console.log(x);
  }
  console.log(x);
} 
letTest();