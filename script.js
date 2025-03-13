let btnOne = document.querySelector("#add");

let btnTwo = document.querySelector("#multiply");
let btnThree = document.querySelector("#divide");
let reset = document.querySelector("#Reset");

btnOne.addEventListener("click", function () {
  let firstNum = document.getElementById("firstNum").value;
  let secondNum = document.getElementById("secondNum").value;
  let message = document.getElementById("message");

  if (firstNum.trim() === "" || secondNum.trim() === "") {
    message.innerText = "Null";
  } else if (isNaN(firstNum) || isNaN(secondNum)) {
    message.innerText = "isNan";
  } else {
    let sum = Number(firstNum) + Number(secondNum);
    message.innerText = `${sum}`;
  }

});

btnTwo.addEventListener("click", function () {
  let firstNum = document.getElementById("firstNum").value;
  let secondNum = document.getElementById("secondNum").value;
  let message = document.getElementById("message");

  if (firstNum.trim() === "" || secondNum.trim() === "") {
    message.innerText = "Null";
  } else if (isNaN(firstNum) || isNaN(secondNum)) {
    message.innerText = "isNaN";
  } else {
    multiply = Number(firstNum) * Number(secondNum);
    message.innerText = `${multiply}`;
  }

 
});

btnThree.addEventListener("click", function () {
  let firstNum = document.getElementById("firstNum").value;
  let secondNum = document.getElementById("secondNum").value;
  let message = document.getElementById("message");

  if (firstNum.trim() === "" || secondNum.trim() === "") {
    message.innerText = "Null";
  } else if (isNaN(firstNum) || isNaN(secondNum)) {
    message.innerText = "isNaN";
  } else {
    divide = Number(firstNum) / Number(secondNum);
    message.innerText = `${divide}`;
  }
});

reset.addEventListener("click", function clearInput() {

});
 
