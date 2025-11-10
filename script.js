document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.querySelector(".intro button");
  const contactSection = document.getElementById("contact-loc");

  if (contactBtn && contactSection) {
    contactBtn.addEventListener("click", function () {
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  }
});
