let index = 0;
const Body = document.getElementsByTagName("body");

function changeColors() {
  const colors = ["red", "blue", "green", "yellow", "cyan", "orange", "purple"];
  Body[0].style.background = colors[index++];

  if (index > colors.length - 1) {
    index = 0;
  }
}
