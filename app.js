window.onload = init;

function init() {
  const oneNumber = document.querySelectorAll(".keyNumbers");
  oneNumber.forEach(eachOne => eachOne.addEventListener("click", doSomething));
  const grabOps = document.querySelectorAll(".keyOperator");
  grabOps.forEach(eachOne => eachOne.addEventListener("click", calculate));
}

function calculate(event) {
  event.preventDefault();
  let topSymbols = this.innerText;
  console.log(topSymbols);
  calculatorDisplay.innerText = calculate;
  if (topSymbols === "+") {
    
  }
}

function doSomething(event) {
  event.preventDefault();
  let displayNum = this.innerText;
  console.log(displayNum);
  let displayOnScreen = document.querySelector(".calculatorDisplay");
  console.log(typeof displayOnScreen.innerText);
  if (displayOnScreen.innerText === "0") {
    displayOnScreen.innerText = displayNum;
  } else {
    displayOnScreen.innerText += displayNum;
  }
}
