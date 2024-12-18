// show popup and blur bg
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// hide popup and remove blur
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

// close popup when click x
window.onclick = function (event) {
  const modal = document.getElementById("popup");
  if (event.target === modal) {
    hideModal();
  }
};
