/* ================= HEADER BLUR ON SCROLL ================= */
const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("glass");
  } else {
    header.classList.remove("glass");
  }
});

/* ================= MOBILE MENU ================= */
const menuBtn = document.querySelector(".menu-btn");
const mobileMenu = document.querySelector(".mobile-menu");

if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("show");
  });
}

/* Close menu when link clicked */
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});
