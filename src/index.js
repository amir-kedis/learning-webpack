import myName from "./myName";
import "./style.css";
import "./main.scss";
import image1 from "./image.jpg";
import Data from "./data.xml";
import Notes from "./data.csv";

function component() {
  const element = document.createElement("div");

  element.textContent = myName("Amir");
  element.classList.add("hello");
  element.classList.add("hi-body");

  const myImage = new Image(100);
  myImage.src = image1;

  element.appendChild(myImage);

  console.log(Data);
  console.log(Notes);

  return element;
}

document.body.appendChild(component());
