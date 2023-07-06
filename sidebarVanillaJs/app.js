const toggleBtn = document.querySelector(".togglerBtn");
const crossBtn = document.querySelector(".crossBtn");
const menu = document.querySelector(".navbar");
document.getElementById("navbar").style.display = "none";

toggleBtn.addEventListener("click", function () {
  //   console.log("clicked");
  //   document.getElementById("navbar").style.display = "flex";
  const display = document.getElementById("navbar").style.display;
  console.log(display);
  if (display == "none") {
    document.getElementById("navbar").style.display = "flex";
  } else {
    document.getElementById("navbar").style.display = "none";
  }
});

crossBtn.addEventListener("click", function () {
  document.getElementById("navbar").style.display = "none";
});
