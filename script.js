document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("subscribeForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // stop reload
    alert("🎉 Congratulations! You’ve successfully subscribed.");
    form.reset(); // clear input after submit
  });
});
