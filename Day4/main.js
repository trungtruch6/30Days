const images = document.querySelectorAll(".content .image img");
const closeButton = document.querySelector(".close-button");
let contentHide = document.querySelector(".content-hide");
let changeImage = document.querySelector(".show-img .change-image");
let title = document.querySelector(".title span");
let next = document.querySelector(".control.next");
let prev = document.querySelector(".control.prev");
let currentIndex = 0;
showGallery = () => {
  contentHide.classList.add("-hide");
  currentIndex == images.length - 1
    ? next.classList.add("-hide")
    : next.classList.remove("-hide");
  currentIndex == 0
    ? prev.classList.add("-hide")
    : prev.classList.remove("-hide");
  changeImage.src = images[currentIndex].src;
  changeImage.alt = images[currentIndex].alt;
  title.innerHTML = changeImage.alt;
};

images.forEach((e, i) => {
  e.addEventListener("click", () => {
    currentIndex = i;
    showGallery();
  });
});

closeButton.addEventListener("click", () => {
  contentHide.classList.remove("-hide");
});

next.addEventListener("click", () => {
  currentIndex != images.length - 1 ? currentIndex++ : undefined;
  console.log(currentIndex);
  showGallery();
});

prev.addEventListener("click", () => {
  currentIndex != 0 ? currentIndex-- : undefined;
  showGallery();
});

document.addEventListener("keydown", (e) => {
  if (e.keyCode == 27) contentHide.classList.remove("-hide");
});
