// reuse most of <head>
// tngina i need to make the title ng tab separate pala
class B2PHead extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>B2Pinoy.com</title>
      <link rel="stylesheet" href="style.css">
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
                <div class="header-links">
                  <button onclick="location.href='index.html'">
                    <img src="Logos/b2p.png" alt="Find Suppliers"/>
                  </button>
                  <a href="aboutus.html">About Us</a>
                  <a href="faqs.html">FAQs</a>
                  <span class="modal-header" onclick="showPopup()">Customer Support</span>
                </div>
              </header>

            <!-- Modal -->
            <div id="popup" class="modal">
              <div class="modal-content">
                <span class="close" onclick="hidePopup()">&times;</span>
                <h2 style="margin-bottom: 0px;">Questions?</h2>
                <p style ="font-size:2rem; margin-bottom: 40px;">Hit us up!</h4>
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
              <img src="Logos/b2p.png" alt="B2Pinoy">
            </button>
            <div class="side-by-side">
              <button onclick="location.href='placeholder.html'">
                <img src="Logos/SocMed/ig.png" alt="Instagram">
              </button>
              <button onclick="location.href='https://www.facebook.com/profile.php?id=61570464069710'">
                <img src="Logos/SocMed/fb.png" alt="Facebook">
              </button>
              <button onclick="location.href='https://x.com/B2Pinoy'">
                <img src="Logos/SocMed/x.png" alt="X">
              </button>
              <button onclick="location.href='placeholder.html'">
                <img src="Logos/SocMed/linkedin.png" alt="Linkedin">
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

