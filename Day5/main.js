const isOpen = document.querySelector(".sreach-box");
const $button = document.querySelector(".button");

onClick = () => {
  isOpen.classList.toggle("open");
};

$button.addEventListener("click", onClick);
