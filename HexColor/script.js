// function changeColor() {
//   let hexNum = [
//     "0",
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "A",
//     "B",
//     "C",
//     "D",
//     "E",
//     "F",
//   ];
//   let hexCode = "#";

//   for (let i = 0; i < 6; i++) {
//     let randomNum = Math.floor(Math.random() * hexNum.length);
//     hexCode += hexNum[randomNum];
//   }
//   document.querySelector(".hex").textContent = hexCode;
//   document.getElementsByTagName("body")[0].style.backgroundColor = hexCode;
// }

// let a = "My name is chetan rathore";
// a = a.replace("name", "Name");
// a = a.split(" ");

// let res = [];

// for (let i = 0; i < a.length; i++) {
//   res.push(a[i]);
// }
// console.log(res);
// console.log(a.split(" "));

// return a.split("");

// const body = document.getElementsByTagName("body");

// function bringMeHead() {
//   const h2 = document.createElement("h2");
//   h2.innerText = "chetan";
//   h2.style.font = "500 1.5rem";

//   document.body.appendChild(h2);
// }
// bringMeHead();

// const input = document.getElementById("input");
// const btn = document.getElementById("btn");
// const table = document.getElementById("table");

// const enterNum = document.querySelector(".enterNum");

// function handleRenderTable(enterNumValue) {
//   const prevContainer = document.querySelector(".container");

//   if (prevContainer) {
//     prevContainer.remove();
//   }

//   const container = document.createElement("div");
//   container.classList.add("container");

//   for (let i = 1; i <= 10; i++) {
//     const numElement = document.createElement("h1");

//     numElement.textContent = enterNumValue * i;
//     container.appendChild(numElement);
//   }

//   document.body.appendChild(container);
// }

// enterNum.addEventListener("keyup", function (e) {
//   handleRenderTable(e.target.value);
// });

// const arr = [1, 2, 3, 4, 5, 6, 7, 8];

// const res = arr.filter((value, index) => {
//   if (value % 2 === 0) {
//     // console.log(value);
//     return value;
//   }
// });
// console.log(res);

//* project

// const container = document.querySelector(".container");
// const input = document.querySelector("#numOfWords");
// const Data = document.getElementById("data");

// const generateWord = (n) => {
//   const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   let text = "";

//   for (let i = 0; i < n; i++) {
//     const random = (Math.random() * (letters.length - 1)).toFixed(0);
//     text += letters[random];
//   }
//   return text;
// };

// let numOfWords;
// const generatePara = () => {
//   numOfWords = Number(input.value);

//   let data = "";

//   for (let i = 0; i < numOfWords; i++) {
//     const randomNum = (Math.random() * 10).toFixed(0);
//     data += generateWord(randomNum);
//     data += " ";
//   }

//   // const para = document.createElement("p");
//   // container.append(para);
//   Data.innerText = data;
// };

//*project

const name = document.getElementById("name");
const tags = document.getElementById("tags");

const addName = () => {
  if (name.value == "") {
    alert("Please Enter Your Name!");
    return null;
  }

  const tag = document.createElement("div");
  tag.setAttribute("class", "tag");

  tags.append(tag);
  tag.innerText = `Hey I am ${name.value}`;

  tag.addEventListener("click", function () {
    tag.remove();
  });
};
