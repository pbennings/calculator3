let storeData = 'blank'
let showData = ''
let operData = ''

window.onload = init()

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
  showData += event.target.innerText;
  console.log(showData);
  let displayOnScreen = document.querySelector(".calculatorDisplay");
  console.log(typeof displayOnScreen.innerText);
  displayOnScreen.innerText = showData;
  }

function thingForOper (event) {
  event.preventDefault();
  let activeOper = event.target.innerText;
  console.log(activeOper);
  switch(symbol){
  case '+':
    activeOper += parseFloat(showData)
    result.textContent = activeOper
    showData = activeOper.toString()
    activeOper = ''
    break;
  case '-':
      activeOper += parseFloat(showData)
      result.textContent = activeOper
      showData = activeOper.toString()
      activeOper = ''
    break;
  case '/':
      activeOper += parseFloat(showData)
      result.textContent = activeOper
      showData = activeOper.toString()
      activeOper = ''
    break;
  case '*':
      activeOper += parseFloat(showData)
      result.textContent = activeOper
      showData = activeOper.toString()
      activeOper = ''
}
}