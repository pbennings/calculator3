window.onload = init;

function init() {
  const oneNumber = document.querySelectorAll(".keyNumbers");
  oneNumber.forEach(eachOne => eachOne.addEventListener("click", doSomething));
}

function doSomething(event) {
  event.preventDefault();
  const displayNum = this.innerText(".");
  doSomething

}
