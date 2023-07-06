const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const option3 = document.getElementById("option3");

const audio = document.getElementById("myAudio");

let answer = 0;

function generateEqn() {
  let num1 = Math.floor(Math.random() * 13);
  let num2 = Math.floor(Math.random() * 13);

  let dummyAns1 = Math.floor(Math.random() * 13);
  let dummyAns2 = Math.floor(Math.random() * 13);

  let allAnswer = [];
  let switchAns = [];

  answer = num1 / num2;

  document.getElementById("num1").innerHTML = num1;
  document.getElementById("num2").innerHTML = num2;

  allAnswer = [answer, dummyAns1, dummyAns2];

  for (i = allAnswer.length; i--; ) {
    switchAns.push(allAnswer.splice(Math.floor(Math.random() * (i + 1)), 1));
  }

  option1.innerHTML = switchAns[0];
  option2.innerHTML = switchAns[1];
  option3.innerHTML = switchAns[2];
}

option1.addEventListener("click", function () {
  if (option1.innerHTML == answer) {
    generateEqn();
  } else {
    audio.play();
  }
});

option2.addEventListener("click", function () {
  if (option2.innerHTML == answer) {
    generateEqn();
  } else {
    audio.play();
  }
});
option3.addEventListener("click", function () {
  if (option3.innerHTML == answer) {
    generateEqn();
  } else {
    audio.play();
  }
});

generateEqn();
