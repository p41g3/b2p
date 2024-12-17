class B2PHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
              <!-- Wrapper for background content -->
            <div id="header">
              <!-- Header Section -->
              <header>
                <div class="header-links">
                  <button onclick="location.href='index.html'">
                    <img src="Logos/b2p.png" alt="Find Suppliers" />
                  </button>
                  <a href="aboutus.html">About Us</a>
                  <a href="faqs.html">FAQs</a>
                  <a href="#" onclick="showModal()">Customer Support</a>
                </div>
              </header>
            </div>

            <!-- Modal -->
            <div id="customerSupportModal" class="modal">
              <div class="modal-content">
                <span class="close" onclick="hideModal()">&times;</span>
                <h2>Customer Support</h2>
                <p>Ton is a faggot?</p>
              </div>
            </div>
        `;
    }
}

customElements.define('b2p-header', B2PHeader);

class B2PFooter extends HTMLElement {
  connectedCallback() {
      this.innerHTML = `
        <footer class="footer" id="footer">
          <div class="left-section">
            <button onclick="location.href='placeholder.html'">
              <img src="Logos/b2p.png" alt="B2Pinoy" height="80px" width=auto>
            </button>
            <div class="side-by-side">
              <button onclick="location.href='placeholder.html'">
                <img src="Logos/SocMed/ig.png" alt="Instagram" height="30px" width="30px">
              </button>
              <button onclick="location.href='https://www.facebook.com/profile.php?id=61570464069710'">
                <img src="Logos/SocMed/fb.png" alt="Facebook" height="30px" width="30px">
              </button>
              <button onclick="location.href='https://x.com/B2Pinoy'">
                <img src="Logos/SocMed/x.png" alt="X" height="30px" width="30px">
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

        <p class="copyright" id="copyright">© 2024 B2Pinoy.com</p>
      `;
  }
}

customElements.define('b2p-footer', B2PFooter);

