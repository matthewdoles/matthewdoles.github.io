window.addEventListener("scroll", () => {
  if (this.pageYOffset > document.getElementById("top").offsetHeight) {
    document.getElementById("mainNav").classList.add("nav-scrolled", "scroll-shadow");
  } else {
    document.getElementById("mainNav").classList.remove("nav-scrolled", "scroll-shadow");
  }
});