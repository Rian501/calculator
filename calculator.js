//event listener to each button
let addBtn = document.getElementById('add');
let subBtn = document.getElementById('sub');
let mulBtn = document.getElementById('mul');
let divBtn = document.getElementById('div');
let resetBtn = document.getElementById('reset');
let outputDiv = document.getElementById('output');

addBtn.addEventListener('click', function() {
  let numsArr = getNums();
  calculate(numsArr[0], numsArr[1], addNums);
});
subBtn.addEventListener('click', function() {
  let numsArr = getNums();
  calculate(numsArr[0], numsArr[1], subNums);
});
mulBtn.addEventListener('click', function() {
  let numsArr = getNums();
  calculate(numsArr[0], numsArr[1], multNums);
});
divBtn.addEventListener('click', function() {
  let numsArr = getNums();
  calculate(numsArr[0], numsArr[1], divNums);
});
//the click event starts off the getting of numbers, then can go to calculate from there, using the two gotten numbers in the new array (see getNums function below)


function multNums(a, b) {
    let product = a * b;
    return product
}
function addNums(a, b) {
  let sum = (parseInt(a) + parseInt(b));
  return sum;
}
function subNums(a, b) {
  let difference = a - b;
  return difference;
}
function divNums(a, b) {
  let quotient = a/b;
  return quotient;
}

//have to wait for button click to get the nums. When page loads they are not defined so they save nothing. So a function to get them on button click (called at button click is needed)
function getNums() {
  let num1 = document.getElementById('no1').value;
  let num2 = document.getElementById('no2').value;
  //you can just slam them straight into an array to return both, since you can only return ONE thing from a function (the first return stops the function).
  return [num1, num2]
}

function calculate(num1, num2, operationFunction){
  console.log("can I see the ops?", operationFunction);
  console.log("Can I see the nums?", num1, num2);
  //don't need a bunch of if statements because I am passing a function itself as the third argument, so it can just be input and run as below:
  let answer = operationFunction(num1, num2);

  console.log("answer?", answer);
  outputDiv.innerHTML = answer;
  return answer;
}

resetBtn.addEventListener("click", function () {
  location.reload(true);
});