// Show modal and blur background
function showModal() {
  document.getElementById("customerSupportModal").style.display = "block";
  document.getElementById("header").classList.add("blur");
  document.getElementById("content").classList.add("blur");
  document.getElementById("footer").classList.add("blur");
  document.getElementById("copyright").classList.add("blur");
}

// Hide modal and remove blur
function hideModal() {
  document.getElementById("customerSupportModal").style.display = "none";
  document.getElementById("header").classList.remove("blur");
  document.getElementById("content").classList.remove("blur");
  document.getElementById("footer").classList.remove("blur");
  document.getElementById("copyright").classList.remove("blur");
}

// close popup when clicking out
window.onclick = function (event) {
  const modal = document.getElementById("customerSupportModal");
  if (event.target === modal) {
    hideModal();
  }
};
