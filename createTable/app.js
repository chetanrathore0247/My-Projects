const input = document.querySelector(".paraNum");
const btn = document.querySelector(".btn");
const tableSection = document.querySelector(".paraSection");

function showTable() {
  while (tableSection.childElementCount > 0) {
    tableSection.removeChild(tableSection.firstChild);
  }
  let inputNum = parseInt(input.value);

  for (let i = 1; i <= 10; i++) {
    const p = document.createElement("p");
    p.append(inputNum * i);
    tableSection.append(p);
  }
}

btn.addEventListener("click", function () {
  showTable();
});
