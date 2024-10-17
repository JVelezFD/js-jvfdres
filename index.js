"strict mode";

document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("privacyModal");
  const openModalButton = document.getElementById("openModal");
  const closeButton = document.getElementsByClassName("close")[0];

  openModalButton.onclick = function () {
    modal.style.display = "block";
  };

  closeButton.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
});
