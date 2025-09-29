document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload
    alert("🎉 Congratulations! You’ve successfully subscribed.");
    form.reset(); // clear input after submit
  });
});

const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});
