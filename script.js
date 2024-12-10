const barsmenu = document.querySelector(".bars-menu");
const lasticonhead = document.querySelector(".last-icon-head");
const bars = document.querySelector(".bars");
const xmark = document.querySelector(".x-mark");
const listmenu = document.querySelector("#header .head ul");

barsmenu.addEventListener("click", function () {
  bars.classList.toggle("active");
  lasticonhead.classList.toggle("active");
  xmark.classList.toggle("active");
  listmenu.classList.toggle("active");
});
