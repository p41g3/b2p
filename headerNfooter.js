class B2PHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
          <header>
            <div class="header-links">
              <button onclick="location.href='index.html'">
                <img src="Logos/b2p.png" alt="Find Suppliers" />
              </button>
              <a href="aboutus.html">About Us</a>
              <a href="placeholder.html">FAQs</a>
              <a href="placeholder.html">Customer Support</a>
            </div>
          </header>
        `;
    }
}

customElements.define('b2p-header', B2PHeader);

class B2PFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        <footer class="footer">
          <div class="left-section">
            <button onclick="location.href='placeholder.html'">
              <img src="Logos/b2p.png" alt="B2Pinoy" height="80px" width=auto>
            </button>
            <div class="side-by-side">
              <button onclick="location.href='placeholder.html'">
                <img src="Logos/SocMed/ig.png" alt="Instagram" height="30px" width="30px">
              </button>
              <button onclick="location.href='placeholder.html'">
                <img src="Logos/SocMed/fb.png" alt="Facebook" height="30px" width="30px">
              </button>
              <button onclick="location.href='placeholder.html'">
                <img src="Logos/SocMed/yt.png" alt="YouTube" height="30px" width="30px">
              </button>
              <button onclick="location.href='placeholder.html'">
                <img src="Logos/SocMed/linkedin.png" alt="Linkedin" height="30px" width="30px">
              </button>
            </div>
          </div>

          <div class="right-section">
            <p class="top"><strong>About B2Pinoy</strong></p>
            <p class="top"><strong>Careers</strong></p>
            <p class="top"><strong>Customer Support</strong></p>
            <p><a href="aboutus.html">About Us</a></p>
            <p><a href="placeholder.html">Be a Supplier!</a></p>
            <p><a href="placeholder.html">Contact Us</a></p>
            <p><a href="placeholder.html">Privacy Policy</a></p>
            <p><a href="placeholder.html">Promote your Service!</a></p>
            <p><a href="placeholder.html">B2Pinoy Verified</a></p>
            <p><a href="placeholder.html">B2Pinoy Foundation</a></p>
            <p><a href="placeholder.html">List your Franchise!</a></p>
            <p><a href="placeholder.html">Help Center</a></p>
          </div>
        </footer>

        <p class="lastf">© 2024 B2Pinoy.com</p>
      `;
  }
}

customElements.define('b2p-footer', B2PFooter);

