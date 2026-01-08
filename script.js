document.querySelectorAll(".lms-section-header").forEach(button => {
  button.addEventListener("click", () => {
    const content = button.nextElementSibling;
    const arrow = button.querySelector("span");

    if (content.style.display === "block") {
      content.style.display = "none";
      arrow.textContent = "▼";
    } else {
      content.style.display = "block";
      arrow.textContent = "▲";
    }
  });
});
