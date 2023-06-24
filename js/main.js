var hamburgers = document.querySelectorAll(".hamburger");
var menu = document.querySelector(".navigation");
const buttonOpen = document.querySelector(".section-black__btn");
const modal = document.querySelector(".fade-block");
const buttonClose = document.querySelector(".button-close");

buttonOpen.addEventListener("click", function () {
  modal.classList.remove("hidden");
});

modal.addEventListener("click", function () {
  modal.classList.add("hidden");
});

modal.querySelector(".modal-window").addEventListener("click", function (e) {
  e.stopPropagation();
});

buttonClose.addEventListener("click", function () {
  modal.classList.add("hidden");
});

var forEach = function (t, o, r) {
  if ("[object Object]" === Object.prototype.toString.call(t))
    for (var c in t)
      Object.prototype.hasOwnProperty.call(t, c) && o.call(r, t[c], c, t);
  else for (var e = 0, l = t.length; l > e; e++) o.call(r, t[e], e, t);
};

if (hamburgers.length > 0) {
  forEach(hamburgers, function (hamburger) {
    hamburger.addEventListener(
      "click",
      function () {
        this.classList.toggle("is-active");
        menu.classList.toggle("open");
      },
      false
    );
  });
}
