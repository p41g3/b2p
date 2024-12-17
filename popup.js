// show popup and blur bg
function showModal() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("header").classList.add("blur");
  document.getElementById("content").classList.add("blur");
  document.getElementById("footer").classList.add("blur");
  document.getElementById("copyright").classList.add("blur");
}

// hide popup and remove blur
function hideModal() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("header").classList.remove("blur");
  document.getElementById("content").classList.remove("blur");
  document.getElementById("footer").classList.remove("blur");
  document.getElementById("copyright").classList.remove("blur");
}

// close popup when click x
window.onclick = function (event) {
  const modal = document.getElementById("popup");
  if (event.target === modal) {
    hideModal();
  }
};
