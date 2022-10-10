document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector(".navbar");
  const navbarMarkup = document.querySelector("#navbarNavAltMarkup");
  const navLinks = document.querySelectorAll(".nav-link");

  const addShadow = () => {
    if (window.scrollY >= 115) {
      nav.classList.add("shadow-bg");
    } else {
      nav.classList.remove("shadow-bg");
    }
  };

  const hideNavbarMarkup = () => {
    navbarMarkup.classList.remove("show");
  };
  for (const navLink of navLinks) {
    navLink.addEventListener("click", hideNavbarMarkup);
  }

  window.addEventListener("scroll", addShadow);
});
