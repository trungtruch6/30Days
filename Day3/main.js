const closeButton = document.querySelector(".close-btn");
const openButton = document.querySelector(".open-modal");
const modalHide = document.querySelector(".modal-hide");
const closeButtonFooter = document.querySelector(".footer-btn");
const modalTable = document.querySelector(".modal-table");

function onClickButton() {
  modalHide.classList.toggle("-hidden");
}

openButton.addEventListener("click", onClickButton);
closeButton.addEventListener("click", onClickButton);
closeButtonFooter.addEventListener("click", onClickButton);
modalHide.addEventListener("click", onClickButton);
modalTable.addEventListener("click", (e) => {
  e.stopPropagation();
});

// modalHide.addEventListener("click", (e) => {
//   console.log(e);
//   console.log(e.target);
//   console.log(e.currentTarget);
//   if (e.target == e.currentTarget) onClickButton();
// });
