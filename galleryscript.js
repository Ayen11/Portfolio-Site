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

document.addEventListener("DOMContentLoaded", function () {
  var galleryItems = document.querySelectorAll(".gallery-item");

  galleryItems.forEach(function (item) {
    var image = item.querySelector("img");
    var description = item.querySelector("h3");

    // Set the width and height of the gallery item based on the image dimensions
    image.addEventListener("load", function () {
      var width = image.width;
      var height = image.height;
      item.style.width = width + "px";
      item.style.height = 85 + height + "px";

      // Set the max-width of the description to match the width of the image
      description.style.maxWidth = width + "px";
    });
  });
});
