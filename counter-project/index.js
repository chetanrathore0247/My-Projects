const incrementBtn = document.getElementById("btn1");
const decrementBtn = document.getElementById("btn2");
const resetBtn = document.getElementById("btn3");

let count = 0;

function changeColor(count) {
  const displayCount = document.querySelector("#h1");

  if (count > 0) {
    displayCount.style.color = "green";
  } else if (count < 0) {
    displayCount.style.color = "red";
  } else {
    displayCount.style.color = "black";
  }
}

incrementBtn.addEventListener("click", function () {
  count += 1;
  h1.innerText = count;
  changeColor(count);
});
decrementBtn.addEventListener("click", function () {
  count -= 1;
  h1.innerText = count;
  changeColor(count);
});
resetBtn.addEventListener("click", function () {
  count = 0;
  h1.innerText = count;
  changeColor(count);
});
