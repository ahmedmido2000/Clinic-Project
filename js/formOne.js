
let formOneClose = document.getElementById("from-one-close");
let formTwoClose = document.getElementById("from-two-close");
let formThreeClose = document.getElementById("from-three-close");
activeButton.forEach(active => {
  active.addEventListener("click" , () => {
  active.classList.add("not-active-button");
  });
});
notActiveButton.forEach(notActive => {
  notActive.addEventListener("click" , () => {
  notActive.classList.remove("active-button");
  });
});
function nextPage() {
  formOneClose.classList.add("d-none");
  formTwoClose.classList.remove("d-none");
  formThreeClose.classList.add("d-none");
};
function subMit() {
  formOneClose.classList.add("d-none");
  formTwoClose.classList.add("d-none");
  formThreeClose.classList.remove("d-none");
};
