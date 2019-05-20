window.onload = init;

function init() {
  const oneNumber = document.querySelectorAll(".keyNumbers");
  oneNumber.forEach(eachOne => eachOne.addEventListener("click", doSomething));
}

function doSomething(event) {
  event.preventDefault();
  let displayNum = this.innerText;
  console.log(displayNum);
  let displayOnScreen = document.querySelector(".calculatorDisplay");
  console.log(typeof displayOnScreen.innerText);
  if (displayOnScreen.innerText === 0) {
  } else {
  }
}
