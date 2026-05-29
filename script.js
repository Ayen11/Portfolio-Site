function openWorkModal(work) {
  document.getElementById("work-modal-title").textContent = work.title;
  var linkEl = document.getElementById("work-modal-link");
  if (work.link && work.link !== "#") {
    linkEl.href = work.link;
    linkEl.textContent = work.link;
    linkEl.style.display = "";
  } else {
    linkEl.style.display = "none";
  }
  document.getElementById("work-modal-desc").textContent = work.description;
  var imgEl = document.getElementById("work-modal-image");
  imgEl.src = work.image;
  imgEl.alt = work.title;
  document.getElementById("work-overlay").style.display = "flex";
}

function renderWorks() {
  var grid = document.getElementById("works-grid");
  works.forEach(function (work) {
    if (work.dividerBefore) {
      var hr = document.createElement("hr");
      hr.className = "grid-divider";
      grid.appendChild(hr);
    }
    var card;
    if (work.extraClass === "card--gallery") {
      card = document.createElement("a");
      card.href = work.link;
    } else {
      card = document.createElement("div");
      card.addEventListener("click", function () { openWorkModal(work); });
    }
    card.className = "card" + (work.extraClass ? " " + work.extraClass : "");
    card.innerHTML =
      '<div class="card-image"><img src="' + work.image + '" alt="' + work.title + ' preview" /></div>' +
      '<div class="card-body"><h3>' + work.title + '</h3><p>' + work.description + '</p><span class="card-tag">' + work.tag + "</span></div>";
    grid.appendChild(card);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  renderWorks();

  var overlay = document.getElementById("overlay");
  var overlayImage = document.getElementById("overlay-image");
  var closeButton = document.getElementById("close-button");
  var openImageButton = document.getElementById("open-image-btn");

  openImageButton.addEventListener("click", function () {
    overlayImage.src = "images/PortfolioQR.png";
    overlay.style.display = "flex";
  });
  closeButton.addEventListener("click", function () {
    overlay.style.display = "none";
  });
  overlay.addEventListener("click", function (event) {
    if (event.target === overlay) overlay.style.display = "none";
  });

  var workOverlay = document.getElementById("work-overlay");
  var workCloseButton = document.getElementById("work-close-button");

  workCloseButton.addEventListener("click", function () {
    workOverlay.style.display = "none";
  });
  workOverlay.addEventListener("click", function (event) {
    if (event.target === workOverlay) workOverlay.style.display = "none";
  });
});
