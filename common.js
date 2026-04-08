/* ═══════════════════════════════════════════
   AIRBRIDGE — Common JS
   nav, footer injection + active state
═══════════════════════════════════════════ */

(function () {
  // ── NAV HTML ──
  const NAV_HTML = `
<nav class="nav" id="main-nav">
  <a href="/" class="nav-logo">
    <div class="nav-logo-mark">AB</div>
    <div class="nav-logo-text">
      <div class="nav-logo-ko">에어브리지 국제특송</div>
      <div class="nav-logo-en">AIRBRIDGE Co., Ltd.</div>
    </div>
  </a>
  <ul class="nav-links">
    <li><a href="/">홈</a></li>
    <li><a href="/about.html">회사소개</a></li>
    <li><a href="/services.html">서비스</a></li>
    <li><a href="/calculator.html">운임계산기</a></li>
    <li><a href="/contact.html">문의/오시는길</a></li>
  </ul>
  <a href="tel:032-502-1880" class="nav-links nav-cta">📞 032-502-1880</a>
  <div class="nav-ham" id="nav-ham" onclick="toggleMobileNav()">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="nav-mobile" id="nav-mobile">
  <a href="/">홈</a>
  <a href="/about.html">회사소개</a>
  <a href="/services.html">서비스</a>
  <a href="/calculator.html">운임계산기</a>
  <a href="/contact.html">문의/오시는길</a>
  <a href="tel:032-502-1880" class="nav-cta">📞 032-502-1880</a>
</div>`;

  // ── FOOTER HTML ──
  const FOOTER_HTML = `
<footer class="footer">
  <div class="footer-inner">
    <div class="footer-brand">
      <div class="fb-logo">
        <div class="fb-mark">AB</div>
        <div>
          <div style="font-size:14px;font-weight:700;">에어브리지 국제특송</div>
          <div style="font-size:11px;color:var(--muted);font-family:var(--mono);">AIRBRIDGE Co., Ltd.</div>
        </div>
      </div>
      <p>DHL·FedEx·UPS 공식 대리점<br>
      항공특급·항공화물·해상화물 전문<br>
      신속하고 안전한 국제특송 서비스</p>
    </div>
    <div class="footer-col">
      <h4>메뉴</h4>
      <ul>
        <li><a href="/">홈</a></li>
        <li><a href="/about.html">회사소개</a></li>
        <li><a href="/services.html">서비스 안내</a></li>
        <li><a href="/calculator.html">운임 계산기</a></li>
        <li><a href="/contact.html">문의/오시는길</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>연락처</h4>
      <dl class="footer-info">
        <dt>전화</dt><dd>032-502-1880</dd>
        <dt>이메일</dt><dd>cs@airos.co.kr</dd>
        <dt>주소</dt><dd>인천광역시 부평구<br>(인천·부천·안산 담당)</dd>
        <dt>대표</dt><dd>호영준</dd>
      </dl>
    </div>
  </div>
  <div class="footer-bottom">
    <span>© 2026 에어브리지 국제특송 (AIRBRIDGE Co., Ltd.) All rights reserved.</span>
    <span>DHL·FedEx·UPS 공식 대리점 · airbridge.kr</span>
  </div>
</footer>`;

  // ── INJECT ──
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // ── ACTIVE STATE ──
  const path = window.location.pathname;
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    const href = a.getAttribute('href');
    if (!href) return;
    const isHome = (href === '/' || href === '/index.html');
    const isActive = isHome
      ? (path === '/' || path === '/index.html' || path === '')
      : path.includes(href.replace('/', '').replace('.html', ''));
    if (isActive && !a.classList.contains('nav-cta')) a.classList.add('active');
  });

  // ── MOBILE NAV TOGGLE ──
  window.toggleMobileNav = function () {
    const m = document.getElementById('nav-mobile');
    m.classList.toggle('open');
  };

  // ── SCROLL NAV SHADOW ──
  window.addEventListener('scroll', () => {
    const nav = document.getElementById('main-nav');
    if (nav) nav.style.borderBottomColor = window.scrollY > 20 ? 'var(--border)' : 'transparent';
  });
})();
