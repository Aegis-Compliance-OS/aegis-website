/* ============================================================
   KANEA — Shared Nav + Footer Components
   ============================================================ */

function getBasePath() {
  const path = window.location.pathname;
  // If we're in /pages/, go up one level
  return path.includes('/pages/') ? '../' : './';
}

function renderNav(activePage) {
  const base = getBasePath();
  const links = [
    { href: `${base}index.html`,             label: 'Home',        key: 'home' },
    { href: `${base}pages/about.html`,       label: 'About',       key: 'about' },
    { href: `${base}pages/technologies.html`,label: 'Technologies', key: 'technologies' },
    { href: `${base}pages/team.html`,        label: 'Team',        key: 'team' },
    { href: `${base}pages/news.html`,        label: 'News',        key: 'news' },
    { href: `${base}pages/contact.html`,     label: 'Contact',     key: 'contact' },
  ];

  const navLinks = links.map(l =>
    `<a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">${l.label}</a>`
  ).join('');

  document.getElementById('site-nav').innerHTML = `
    <div class="nav-inner">
      <a href="${base}index.html" class="nav-logo">
        <img src="${base}images/KANEA_logo_dark.svg" alt="KANEA mark" width="40" height="40">
        <div class="nav-wordmark">KANEA<span>Technology Systems</span></div>
      </a>
      <nav class="nav-links" id="nav-links">
        ${navLinks}
        <a href="${base}pages/contact.html" class="nav-cta">Get in Touch</a>
      </nav>
      <button class="nav-hamburger" id="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  document.getElementById('nav-toggle').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('open');
  });
}

function renderFooter() {
  const base = getBasePath();
  document.getElementById('site-footer').innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="footer-top">
          <div class="footer-brand">
            <img src="${base}images/KANEA_logo_dark.svg" class="footer-logo-mark" alt="KANEA mark" width="48" height="48">
            <div class="nav-wordmark" style="margin-top:14px;">KANEA<span>Technology Systems</span></div>
            <p class="footer-tagline">Secure by Design.<br>Compliant by Default.</p>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="${base}pages/about.html">About</a></li>
              <li><a href="${base}pages/team.html">Team</a></li>
              <li><a href="${base}pages/news.html">News</a></li>
              <li><a href="${base}pages/contact.html">Contact</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Technologies</h4>
            <ul>
              <li><a href="${base}pages/technologies.html#trident">TRIDENT</a></li>
              <li><a href="${base}pages/technologies.html#sekon">SEKON</a></li>
              <li><a href="${base}pages/technologies.html#stars">STARS</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Industries</h4>
            <ul>
              <li><a href="${base}pages/technologies.html">Defense &amp; DIB</a></li>
              <li><a href="${base}pages/technologies.html">Maritime</a></li>
              <li><a href="${base}pages/technologies.html">Critical Minerals</a></li>
              <li><a href="${base}pages/technologies.html">Medical Devices</a></li>
              <li><a href="${base}pages/technologies.html">Financial Services</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-legal">
            &copy; ${new Date().getFullYear()} KANEA Technology Systems Inc. &nbsp;|&nbsp;
            All rights reserved. &nbsp;|&nbsp;
            <span class="mono">CAGE 19Y32</span> &nbsp;|&nbsp;
            aegiscompli.com
          </div>
          <div class="footer-badges">
            <span class="badge">SDVOSB</span>
            <span class="badge">WOSB</span>
            <span class="badge">TS/SCI</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
