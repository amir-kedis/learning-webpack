import myName from "./myName";
import "./style.css";
import "./main.scss";

function component() {
  const element = document.createElement("div");

  // Lodash, now imported by this script
  element.textContent = myName("Amir");
  element.classList.add("hello");

  return element;
}

document.body.appendChild(component());
