document.addEventListener("DOMContentLoaded", function () {
  const burgerIcon = document.querySelector(".mobile-menu");
  const closeIcon = document.querySelector(".tabler-icon-x");
  const mobileNav = document.querySelector(".mobile-nav");

  burgerIcon.addEventListener("click", function () {
    mobileNav.classList.toggle("closed-menu");
  });

  closeIcon.addEventListener("click", function () {
    mobileNav.classList.add("closed-menu");
  });

  // Close mobile menu when a menu item is clicked
  const mobileNavLinks = document.querySelectorAll(".mobile-nav a");
  mobileNavLinks.forEach(function (link) {
    link.addEventListener("click", function () {
      mobileNav.classList.add("closed-menu");
    });
  });
});
