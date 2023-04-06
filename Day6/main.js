const box = document.querySelector(".box");
const button = document.querySelector(".keydown");
const eKey = document.querySelector(".eKey p:last-child");
const eLocation = document.querySelector(".eLocation p:last-child");
const eWhich = document.querySelector(".eWhich p:last-child");
const eCode = document.querySelector(".eCode p:last-child");

console.log(eCode);

document.addEventListener("keydown", (event) => {
  let keyName = event.keyCode === 32 ? "Space" : event.key;
  console.log(keyName);

  eKey.innerText = keyName;
  eLocation.innerText = event.location;
  eWhich.innerText = event.which;
  eCode.innerText = event.code;

  button.classList.remove("-show");
  button.classList.add("-hide");
  box.classList.add("-show");
});

document.addEventListener("click", (event) => {
  button.classList.remove("-hide");
  button.classList.add("-show");
  box.classList.remove("-show");
  box.classList.add("-hide");
});
