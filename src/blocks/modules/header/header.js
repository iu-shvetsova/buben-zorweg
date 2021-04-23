const header = document.querySelector(".header");

if (header) {
  const submenusOpenLinks = header.querySelectorAll(".header__arrow-link");

  submenusOpenLinks.forEach((link) =>
    link.addEventListener("click", (event) => {
      event.preventDefault();
      link.classList.toggle("header__arrow-link_opened");
    })
  );
}
