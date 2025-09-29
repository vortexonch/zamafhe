// Mobile menu toggle
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
});

// Wallet popup
const popup = document.getElementById("wallet-popup");
const closePopup = document.getElementById("close-popup");

// Buttons (desktop + mobile)
const desktopBtn = document.getElementById("connect-wallet-btn-desktop");
const mobileBtn = document.getElementById("connect-wallet-btn-mobile");

// Open popup when either button is clicked
[desktopBtn, mobileBtn].forEach((btn) => {
  if (btn) {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      popup.classList.remove("hidden");
    });
  }
});

// Close popup when X is clicked
closePopup.addEventListener("click", () => {
  popup.classList.add("hidden");
});

// Also close if user clicks outside modal
popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    popup.classList.add("hidden");
  }
});
