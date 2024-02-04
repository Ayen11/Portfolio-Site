document.addEventListener("DOMContentLoaded", function () {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlay-image");
  const closeButton = document.getElementById("close-button");

  galleryItems.forEach((item) => {
    item.addEventListener("click", function () {
      overlayImage.src = item.src;
      overlay.style.display = "flex";
    });
  });

  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });

  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
});
