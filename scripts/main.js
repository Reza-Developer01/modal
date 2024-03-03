const getModalBtn = document.querySelector(".modal__btn");
const getModalBox = document.querySelector(".modal-box");
const getXMark = document.querySelector(".modal-box__top:first-child");

getModalBtn.addEventListener("click", () => {
  getModalBox.classList.add("show");
});

getXMark.addEventListener("click", () => {
  getModalBox.classList.remove("show");
});
