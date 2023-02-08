import printMe from "./print.js";

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button")

  element.textContent = "WEBPACK IS IMPORTANT"
  
  btn.textContent = "click me and see the console";
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
