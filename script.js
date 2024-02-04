document.addEventListener("DOMContentLoaded", function () {
  var overlay = document.getElementById("overlay");
  var overlayImage = document.getElementById("overlay-image");
  var closeButton = document.getElementById("close-button");
  var openImageButton = document.getElementById("open-image-btn");

  openImageButton.addEventListener("click", function () {
    // Set the image source dynamically
    overlayImage.src = "images/PortfolioQR.png";
    // Display the overlay
    overlay.style.display = "flex";
  });

  closeButton.addEventListener("click", function () {
    // Hide the overlay when close button is clicked
    overlay.style.display = "none";
  });

  overlay.addEventListener("click", function (event) {
    // Hide the overlay when clicking outside the image
    if (event.target === overlay) {
      overlay.style.display = "none";
    }
  });
});
