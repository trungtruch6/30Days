const like = document.querySelector(".fa-heart");

function onClick() {
  if (like.classList.contains("-active")) {
    like.classList.remove("-active");
  } else {
    like.classList.add("-active");
  }
}

like.addEventListener("click", onClick);

const colorItem = document.querySelectorAll(".color");
// NodeList(3) [li.color.-green.-active, li.color.-red, li.color.-black]

let colorItemActive = document.querySelector(".color.-active");
// li.color.-green.-active
let itemActive = document.querySelector(".item.-active");
// li#green.item.-active

function clickIn() {
  let getValue = this;
  colorItemActive.classList.remove("-active");
  getValue.classList.add("-active");
  colorItemActive = getValue; // Vì sao lại là colorItemActive = newActive mà không phải là ngược lại.

  itemActive.classList.remove("-active");
  let idItem = getValue.querySelector("a").getAttribute("href");
  let getIdItem = document.querySelector(idItem);
  getIdItem.classList.add("-active");
  itemActive = getIdItem;
}

colorItem.forEach(function (item) {
  console.log(item);
  item.addEventListener("click", clickIn);
});
