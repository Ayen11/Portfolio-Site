document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlay-image");
  const closeButton = document.getElementById("close-button");

  document.querySelectorAll(".gallery-item img").forEach(function (img) {
    img.addEventListener("click", function () {
      overlayImage.src = img.src;
      overlay.style.display = "flex";
    });
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function (e) {
    if (e.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
