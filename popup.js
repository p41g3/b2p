// show popup
function showPopup() {
  document.getElementById("popup").style.display = "block";
}

// hide popup
function hidePopup() {
  document.getElementById("popup").style.display = "none";
}

// close popup when click x
window.onclick = function (event) {
  if (event.target === document.getElementById("popup")) {
    hidePopup();
  }
};
