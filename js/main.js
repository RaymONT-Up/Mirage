// burger
(function () {
  const burger = document.querySelector(".header__burger");
  const menu = document.querySelector(".header__nav");
  const body = document.querySelector(".body");
  burger.addEventListener("click", () => {
    burger.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    menu.classList.toggle("active");
  });
  burger.addEventListener("click", () => {
    body.classList.toggle("active");
  });
})();

// review slider
const reviews = new Swiper(".reviews__slider", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
