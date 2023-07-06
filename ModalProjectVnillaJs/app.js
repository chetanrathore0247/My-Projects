const openModalBtn = document.querySelector(".open-modal-example button");
const modalContainer = document.querySelector(".modal-container");
const closeModalBtn = document.querySelector(".modal-close");
const overlay = document.querySelector("#overlay");

openModalBtn.addEventListener("click", (e) => {
  console.log(e);
  // modalContainer.style.display = "flex";
  modalContainer.classList.add("show-modal");
  modalContainer.classList.remove("hide-modal");
});

closeModalBtn.addEventListener("click", (e) => {
  console.log(e);
  modalContainer.classList.remove("show-modal");
  modalContainer.classList.add("hide-modal");
});

overlay.addEventListener("click", (e) => {
  console.log(e);
  modalContainer.classList.remove("show-modal");
  modalContainer.classList.add("hide-modal");
});
