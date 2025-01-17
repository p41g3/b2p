// reuse most of <head>
class B2PHead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link rel="stylesheet" href="styles.css">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=search"/>
    `;
  }
}

customElements.define('b2p-head', B2PHead);

// reuse <header>
class B2PHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
              <!-- Header Section -->
              <header>
                <img src="pics/logos/b2p.png" alt="B2P">
                <nav>
                    <ul class="nav-links">
                        <li><a href="aboutus.html">About Us</a></li>
                        <li><a href="faqs.html">FAQs</a></li>
                        <li><span class="modal-header" onclick="showPopup()">Customer Support</span></li>
                    </ul>
                </nav>
            </header>

            <!-- Modal -->
            <div id="popup" class="modal">
              <div class="modal-content">
                <span class="close" onclick="hidePopup()">&times;</span>
                <h2 style="margin-bottom: 0px;">Questions?</h2>
                <p style ="font-size:1.75rem; margin-bottom: 40px;">Hit us up!</h4>
                <h5 style="margin-bottom: 8px;">Listing Inquiries</h5>
                <p><u>sales.b2pinoy@gmail.com</u></p>
                <h5 style="margin-bottom: 8px;">Customer Support</h5>
                <p><u>cs.b2pinoy@gmail.com</u></p>
              </div>
            </div>
        `;
    }
}

customElements.define('b2p-header', B2PHeader);

// reuse <footer>
class B2PFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        <footer class="footer" id="footer">
          <div class="left-section">
            <button onclick="location.href='placeholder.html'">
              <img src="pics/logos/b2p.png" alt="B2Pinoy">
            </button>
            <div class="side-by-side">
              <button onclick="location.href='placeholder.html'">
                <img src="pics/logos/ig.png" alt="Instagram">
              </button>
              <button onclick="location.href='https://www.facebook.com/profile.php?id=61570464069710'">
                <img src="pics/logos/fb.png" alt="Facebook">
              </button>
              <button onclick="location.href='https://x.com/B2Pinoy'">
                <img src="pics/logos/x.png" alt="X">
              </button>
              <button onclick="location.href='placeholder.html'">
                <img src="pics/logos/linkedin.png" alt="Linkedin">
              </button>
            </div>
          </div>

          <div class="right-section">
            <p class="top"><strong>About B2Pinoy</strong></p>
            <p class="top"><strong>Careers</strong></p>
            <p class="top"><strong>Customer Support</strong></p>
            <p><a href="aboutus.html">About Us</a></p>
            <p><a href="placeholder.html">Be a Supplier!</a></p>
            <p><span class="modal-footer" onclick="showPopup()">Contact Us</span></p>
            <p><a href="placeholder.html">Privacy Policy</a></p>
            <p><a href="placeholder.html">Promote your Service!</a></p>
            <p><a href="placeholder.html">B2Pinoy Verified</a></p>
            <p><a href="placeholder.html">B2Pinoy Foundation</a></p>
            <p><a href="placeholder.html">List your Franchise!</a></p>
            <p><span class="modal-footer" onclick="showPopup()">Help Center</span></p>
          </div>
        </footer>

        <p class="copyright">© 2024 B2Pinoy.com</p>
      `;
  }
}

customElements.define('b2p-footer', B2PFooter);

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

// SEARCH BAR

document.addEventListener("DOMContentLoaded", () => {
  const data = [
    { name: "Hollow Blocks", link: "placeholder.html", category: "supplier" },
    { name: "Manila Hardware", link: "manilahardware.html", category: "supplier" },
    { name: "Jollibee", link: "placeholder.html", category: "franchise" },
    { name: "Potato Corner", link: "potatocorner.html", category: "franchise" },
    { name: "Siomai King", link: "placeholder.html", category: "franchise" },
    { name: "Ilao Ilao", link: "placeholder.html", category: "franchise" },
    { name: "Dream Space", link: "dreamspace.html", category: "service" },
    { name: "Automotive Detailing", link: "placeholder.html", category: "service" },
  ];
  

  const input = document.querySelector(".search-input");
  const suggestionsList = document.getElementById("suggestions-list");
  const form = document.getElementById("search-form");

  input.addEventListener("input", () => {
    const query = input.value.toLowerCase();
    suggestionsList.innerHTML = "";

    input.addEventListener("input", () => {
      const query = input.value.toLowerCase();
      const category = form.getAttribute("data-category");
      suggestionsList.innerHTML = "";
    
      if (query.trim() !== "") {
        // Filter by both query and category
        const suggestions = data.filter(
          (item) =>
            item.name.toLowerCase().includes(query) &&
            (!category || item.category === category)
        );
    
        if (suggestions.length > 0) {
          suggestionsList.style.display = "block";
          suggestions.forEach((item) => {
            const li = document.createElement("li");
            li.textContent = item.name;
            li.dataset.link = item.link;
            suggestionsList.appendChild(li);
          });
        } else {
          const noMatch = document.createElement("li");
          noMatch.textContent = "No matches found";
          noMatch.style.color = "#888";
          suggestionsList.appendChild(noMatch);
        }
      } else {
        suggestionsList.style.display = "none";
      }
    });
    

  suggestionsList.addEventListener("click", (e) => {
    if (e.target.tagName === "LI" && e.target.dataset.link) {
      window.location.href = e.target.dataset.link;
    }
  });

  input.addEventListener("blur", () => {
    setTimeout(() => {
      suggestionsList.style.display = "none";
      suggestionsList.innerHTML = "";
    }, 200);
  });

  suggestionsList.addEventListener("mouseover", () => {
    suggestionsList.style.display = "block";
  });

  // handle form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchTerm = input.value.trim();
    const category = form.getAttribute("data-category");
    if (searchTerm) {
      let queryString = `results.html?search=${encodeURIComponent(searchTerm)}`;
      if (category) {
        queryString += `&category=${encodeURIComponent(category)}`;
      }
      window.location.href = queryString;
    }
  });  
});
})