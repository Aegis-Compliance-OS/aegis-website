/* ============================================================
   Aegis — Shared Nav + Footer Components
   ============================================================ */

function getBasePath() {
  const path = window.location.pathname;
  // If we're in /pages/, go up one level
  return path.includes('/pages/') ? '../' : './';
}

function renderNav(activePage) {
  const base = getBasePath();
  const links = [
    { href: `${base}index.html#platform`,    label: 'Platform',   key: 'platform' },
    { href: `${base}pages/trident.html`,     label: 'TRIDENT',    key: 'trident' },
    { href: `${base}pages/stars.html`,       label: 'STARS',      key: 'stars' },
    { href: `${base}pages/aurum.html`,       label: 'AURUM',      key: 'aurum' },
    { href: `${base}pages/prism.html`,       label: 'PRISM',      key: 'prism' },
    { href: `${base}pages/team.html`,        label: 'Team',       key: 'team' },
  ];

  const navLinks = links.map(l =>
    `<a href="${l.href}" class="${l.key === activePage ? 'active' : ''}">${l.label}</a>`
  ).join('');

  document.getElementById('site-nav').innerHTML = `
    <div class="nav-inner">
      <a href="${base}index.html" class="nav-logo">
        <img src="${base}images/KANEA_logo_dark.svg" alt="Aegis Compliance OS mark" width="40" height="40">
        <div class="nav-wordmark">Aegis<span>Compliance OS</span></div>
      </a>
      <nav class="nav-links" id="nav-links">
        ${navLinks}
        <a href="${base}pages/contact.html" class="nav-cta${activePage === 'contact' ? ' active' : ''}">Get in Touch</a>
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
            <img src="${base}images/KANEA_logo_dark.svg" class="footer-logo-mark" alt="Aegis Compliance OS mark" width="48" height="48">
            <div class="nav-wordmark" style="margin-top:14px;">Aegis<span>Compliance OS</span></div>
            <p class="footer-tagline">Technical solutions for regulated industries.<br>Grounded authority. Built to spec.</p>
          </div>
          <div class="footer-col">
            <h4>Platform</h4>
            <ul>
              <li><a href="${base}index.html#how-it-works">How It Works</a></li>
              <li><a href="${base}index.html#industries">Industries</a></li>
              <li><a href="${base}index.html#frameworks">Frameworks</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Industries</h4>
            <ul>
              <li><a href="${base}index.html#industries">Defense</a></li>
              <li><a href="${base}index.html#industries">Aerospace</a></li>
              <li><a href="${base}index.html#industries">Healthcare</a></li>
              <li><a href="${base}index.html#industries">Critical Minerals</a></li>
              <li><a href="${base}index.html#industries">Maritime Logistics</a></li>
            </ul>
          </div>
          <div class="footer-col">
            <h4>Company</h4>
            <ul>
              <li><a href="${base}pages/team.html">Team</a></li>
              <li><a href="${base}pages/contact.html">Get in Touch</a></li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <div class="footer-legal">
            &copy; ${new Date().getFullYear()} Aegis Compliance OS, Inc. &nbsp;|&nbsp;
            <span class="mono">CAGE 19Y32</span> &nbsp;|&nbsp;
            All rights reserved
          </div>
          <div class="footer-badges">
            <span class="badge">SDVOSB</span>
            <span class="badge">WOSB</span>
            <span class="badge">Delaware C-Corp</span>
          </div>
        </div>
      </div>
    </footer>
  `;
}
