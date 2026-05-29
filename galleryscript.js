document.addEventListener("DOMContentLoaded", function () {
  const overlay = document.getElementById("overlay");
  const overlayImage = document.getElementById("overlay-image");
  const overlayCaption = document.getElementById("overlay-caption");
  const closeButton = document.getElementById("close-button");

  document.querySelectorAll(".gallery-item").forEach(function (item) {
    item.addEventListener("click", function () {
      const img = item.querySelector("img");
      const caption = item.querySelector("p");
      overlayImage.src = img.src;
      overlayImage.alt = img.alt;
      overlayCaption.textContent = caption ? caption.textContent : "";
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
